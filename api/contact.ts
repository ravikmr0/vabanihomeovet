import type { IncomingMessage, ServerResponse } from 'http'
import { sanitizeContactPayload, sendContactEmails, validateContactPayload } from '../lib/mail'

interface VercelRequest extends IncomingMessage {
  body?: unknown
}

export default async function handler(req: VercelRequest, res: ServerResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    res.writeHead(405, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ success: false, message: 'Method not allowed.' }))
    return
  }

  try {
    const parseBody = async () => {
      if (req.body && typeof req.body === 'object') {
        return req.body as Record<string, unknown>
      }
      if (typeof req.body === 'string' && req.body.trim()) {
        return JSON.parse(req.body)
      }

      const chunks: Uint8Array[] = []
      for await (const chunk of req) {
        chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk)
      }

      const raw = Buffer.concat(chunks).toString('utf8')
      if (!raw) return {}
      return JSON.parse(raw)
    }

    const parsedBody = await parseBody()
    const payload = sanitizeContactPayload(parsedBody)
    const validation = validateContactPayload(payload)

    if (!validation.isValid) {
      res.writeHead(400, { 'Content-Type': 'application/json' })
      res.end(
        JSON.stringify({
          success: false,
          message: 'Please provide valid contact details.',
          errors: validation.errors
        })
      )
      return
    }

    await sendContactEmails(payload, {
      'x-forwarded-for': Array.isArray(req.headers['x-forwarded-for'])
        ? req.headers['x-forwarded-for'][0]
        : req.headers['x-forwarded-for'],
      'user-agent': Array.isArray(req.headers['user-agent'])
        ? req.headers['user-agent'][0]
        : req.headers['user-agent']
    })

    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ success: true, message: 'Your query has been submitted successfully.' }))
  } catch (error) {
    console.error('[Contact API] Submission error:', error)
    res.writeHead(500, { 'Content-Type': 'application/json' })
    res.end(
      JSON.stringify({
        success: false,
        message: 'Unable to submit your query. Please try again later.'
      })
    )
  }
}
