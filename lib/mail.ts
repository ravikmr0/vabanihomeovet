import nodemailer from 'nodemailer'

export type ContactFormData = {
  name: string
  email: string
  phone: string
  company?: string
  subject: string
  message: string
}

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

const normalize = (value: string | undefined) => (value ?? '').trim()

const containsHeaderInjection = (value: string) => /(?:\r|\n)/.test(value)

export const sanitizeContactPayload = (payload: Partial<ContactFormData>): ContactFormData => ({
  name: normalize(payload.name).replace(/[<>]/g, ''),
  email: normalize(payload.email).replace(/[<>]/g, ''),
  phone: normalize(payload.phone).replace(/[<>]/g, ''),
  company: normalize(payload.company).replace(/[<>]/g, ''),
  subject: normalize(payload.subject).replace(/[<>]/g, ''),
  message: normalize(payload.message).replace(/[<>]/g, '')
})

export const validateContactPayload = (payload: ContactFormData) => {
  const errors: string[] = []

  if (!payload.name) errors.push('Name is required')
  if (!payload.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) errors.push('A valid email is required')
  if (!payload.phone) errors.push('Phone is required')
  if (!payload.subject) errors.push('Subject is required')
  if (!payload.message || payload.message.length < 10) errors.push('Message must be at least 10 characters')

  if (containsHeaderInjection(payload.name)) errors.push('Invalid name format')
  if (containsHeaderInjection(payload.email)) errors.push('Invalid email format')
  if (containsHeaderInjection(payload.phone)) errors.push('Invalid phone format')
  if (containsHeaderInjection(payload.subject)) errors.push('Invalid subject format')
  if (containsHeaderInjection(payload.message)) errors.push('Invalid message format')

  return {
    isValid: errors.length === 0,
    errors
  }
}

export const getClientIp = (headers: Record<string, string | string[] | undefined>) => {
  const forwardedFor = headers['x-forwarded-for']
  if (typeof forwardedFor === 'string') return forwardedFor.split(',')[0].trim()
  if (Array.isArray(forwardedFor) && forwardedFor.length > 0) return forwardedFor[0]
  return 'unknown'
}

export const sendContactEmails = async (payload: ContactFormData, headers: Record<string, string | string[] | undefined>) => {
  const host = process.env.SMTP_HOST
  const port = Number(process.env.SMTP_PORT || 587)
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
  const adminEmail = process.env.EMAIL

  if (!host || !user || !pass || !adminEmail) {
    throw new Error('SMTP configuration is incomplete')
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass
    }
  })

  const submittedAt = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
  const clientIp = getClientIp(headers)
  const userAgent = headers['user-agent'] || 'Unavailable'
  const safePayload = {
    ...payload,
    company: payload.company || 'Not provided'
  }

  const adminHtml = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
      <h2 style="color: #0f766e; margin-bottom: 12px;">New Contact Form Submission</h2>
      <p>A new enquiry has arrived from the Vibani Homeo Vet website.</p>
      <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 16px; border-radius: 12px; margin-top: 12px;">
        <p><strong>Full Name:</strong> ${escapeHtml(safePayload.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(safePayload.email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(safePayload.phone)}</p>
        <p><strong>Company/Farm:</strong> ${escapeHtml(safePayload.company)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(safePayload.subject)}</p>
        <p><strong>Message:</strong><br/>${escapeHtml(safePayload.message).replace(/\n/g, '<br/>')}</p>
        <p><strong>Date & Time:</strong> ${escapeHtml(submittedAt)}</p>
        <p><strong>User IP:</strong> ${escapeHtml(clientIp)}</p>
        <p><strong>User Agent:</strong> ${escapeHtml(String(userAgent))}</p>
      </div>
    </div>
  `

  const customerHtml = `
    <div style="font-family: Arial, sans-serif; line-height: 1.7; color: #0f172a;">
      <div style="max-width: 620px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 16px; background: #ffffff;">
        <h2 style="color: #0f766e; margin-bottom: 8px;">Thank You for Contacting Vibani Homeo Vet</h2>
        <p>Dear ${escapeHtml(safePayload.name)},</p>
        <p>Thank you for reaching out to us. We have successfully received your query and our team will get back to you shortly.</p>
        <p>If you need urgent assistance, please reply to this email or contact us directly at <a href="mailto:${adminEmail}">${adminEmail}</a>.</p>
        <p style="margin-top: 20px;">Warm regards,<br/>Vibani Homeo Vet Support Team</p>
      </div>
    </div>
  `

  await transporter.sendMail({
    from: `Vibani Homeo Vet <${adminEmail}>`,
    to: adminEmail,
    replyTo: payload.email,
    subject: 'New Contact Form Submission | Vibani Homeo Vet',
    html: adminHtml,
    text: `New contact form submission from ${payload.name} (${payload.email})\n\n${payload.message}`
  })

  await transporter.sendMail({
    from: `Vibani Homeo Vet <${adminEmail}>`,
    to: payload.email,
    replyTo: adminEmail,
    subject: 'Thank You for Contacting Vibani Homeo Vet',
    html: customerHtml,
    text: `Thank you for contacting Vibani Homeo Vet. We have received your message and will respond shortly.\n\nWarm regards,\nVibani Homeo Vet Support Team`
  })
}
