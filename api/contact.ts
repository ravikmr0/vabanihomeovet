import { sanitizeContactPayload, sendContactEmails, validateContactPayload } from '../lib/mail'

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    res.status(405).json({ success: false, message: 'Method not allowed.' })
    return
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body || {}
    const payload = sanitizeContactPayload(body)
    const validation = validateContactPayload(payload)

    if (!validation.isValid) {
      res.status(400).json({
        success: false,
        message: 'Please provide valid contact details.'
      })
      return
    }

    await sendContactEmails(payload, {
      'x-forwarded-for': req.headers['x-forwarded-for'] || undefined,
      'user-agent': req.headers['user-agent'] || undefined
    })

    res.status(200).json({
      success: true,
      message: 'Your query has been submitted successfully.'
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Unable to submit your query. Please try again.'
    })
  }
}
