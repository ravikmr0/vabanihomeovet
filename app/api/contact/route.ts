import { NextRequest, NextResponse } from 'next/server'
import { sanitizeContactPayload, sendContactEmails, validateContactPayload } from '../../../lib/mail'

export const runtime = 'nodejs'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const payload = sanitizeContactPayload(body)
    const validation = validateContactPayload(payload)

    if (!validation.isValid) {
      return NextResponse.json(
        {
          success: false,
          message: 'Please provide valid contact details.'
        },
        { status: 400 }
      )
    }

    await sendContactEmails(payload, {
      'x-forwarded-for': request.headers.get('x-forwarded-for') || undefined,
      'user-agent': request.headers.get('user-agent') || undefined
    })

    return NextResponse.json({
      success: true,
      message: 'Your query has been submitted successfully.'
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Unable to submit your query. Please try again.'
      },
      { status: 500 }
    )
  }
}
