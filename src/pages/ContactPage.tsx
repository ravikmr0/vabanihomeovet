import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

const initialFormData = {
  name: '',
  email: '',
  phone: '',
  company: '',
  subject: '',
  message: ''
}

const initialErrors = {
  name: '',
  email: '',
  phone: '',
  company: '',
  subject: '',
  message: ''
}

const ContactPage = () => {
  const [formData, setFormData] = useState(initialFormData)
  const [errors, setErrors] = useState(initialErrors)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [feedbackMessage, setFeedbackMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))

    setErrors((prev) => ({
      ...prev,
      [name]: ''
    }))
  }

  const validateForm = () => {
    const nextErrors = { ...initialErrors }
    const trimmedName = formData.name.trim()
    const trimmedEmail = formData.email.trim()
    const trimmedPhone = formData.phone.trim()
    const trimmedSubject = formData.subject.trim()
    const trimmedMessage = formData.message.trim()

    if (!trimmedName) {
      nextErrors.name = 'Please enter your full name.'
    }

    if (!trimmedEmail) {
      nextErrors.email = 'Please enter your email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      nextErrors.email = 'Please enter a valid email address.'
    }

    if (!trimmedPhone) {
      nextErrors.phone = 'Please enter your phone number.'
    } else if (!/^[+\d\s().-]{7,}$/.test(trimmedPhone)) {
      nextErrors.phone = 'Please enter a valid phone number.'
    }

    if (!trimmedSubject) {
      nextErrors.subject = 'Please select a subject.'
    }

    if (!trimmedMessage) {
      nextErrors.message = 'Please enter your message.'
    } else if (trimmedMessage.length < 10) {
      nextErrors.message = 'Please provide a bit more detail so we can help you better.'
    }

    setErrors(nextErrors)
    return nextErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const nextErrors = validateForm()
    const hasErrors = Object.values(nextErrors).some(Boolean)

    if (hasErrors) {
      setStatus('error')
      setFeedbackMessage('Please correct the highlighted fields and try again.')
      return
    }

    if (isSubmitting) {
      return
    }

    setIsSubmitting(true)
    setStatus('idle')
    setFeedbackMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setFormData(initialFormData)
        setErrors(initialErrors)
        setStatus('success')
        setFeedbackMessage(result.message || 'Your query has been submitted successfully.')
      } else {
        setStatus('error')
        setFeedbackMessage(result.message || 'Unable to submit your query. Please try again.')
      }
    } catch (error) {
      setStatus('error')
      setFeedbackMessage('Unable to submit your query. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen">
      <section className="pt-16 pb-10 bg-gradient-to-b from-emerald-50 to-white">
        <div className="container-custom px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-dark mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              We are here to help with product inquiries, support, and partnership opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-spacing bg-slate-50">
        <div className="container-custom px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl"
          >
            <div className="bg-white p-6 md:p-8 rounded-[28px] shadow-[0_24px_60px_-24px_rgba(15,23,42,0.18)] border border-slate-200">
              <div className="mb-6">
                <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary mb-4">
                  Quick Response
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Send us a Message</h2>
                <p className="text-slate-600 max-w-2xl">
                  Reach out for product details, pricing, or partnership support.
                </p>
              </div>

              {feedbackMessage ? (
                <div className={`mb-6 flex items-start gap-3 rounded-2xl border px-4 py-3 text-sm ${status === 'success' ? 'border-emerald-200 bg-emerald-50 text-emerald-700' : 'border-rose-200 bg-rose-50 text-rose-700'}`}>
                  {status === 'success' ? <CheckCircle className="mt-0.5 flex-shrink-0" size={18} /> : <AlertCircle className="mt-0.5 flex-shrink-0" size={18} />} 
                  <span>{feedbackMessage}</span>
                </div>
              ) : null}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 shadow-sm transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="John Doe"
                    />
                    {errors.name ? <p className="mt-2 text-sm text-rose-600">{errors.name}</p> : null}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 shadow-sm transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="you@example.com"
                    />
                    {errors.email ? <p className="mt-2 text-sm text-rose-600">{errors.email}</p> : null}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 shadow-sm transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="+91 63950 07309"
                    />
                    {errors.phone ? <p className="mt-2 text-sm text-rose-600">{errors.phone}</p> : null}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Company / Farm
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 shadow-sm transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Optional"
                    />
                    {errors.company ? <p className="mt-2 text-sm text-rose-600">{errors.company}</p> : null}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 shadow-sm transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="">Select a subject</option>
                    <option value="product-inquiry">Product Inquiry</option>
                    <option value="technical-support">Technical Support</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.subject ? <p className="mt-2 text-sm text-rose-600">{errors.subject}</p> : null}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 shadow-sm transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                  {errors.message ? <p className="mt-2 text-sm text-rose-600">{errors.message}</p> : null}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-2xl bg-primary px-5 py-3 text-base font-semibold text-white shadow-[0_14px_30px_-18px_rgba(16,185,129,0.9)] transition hover:bg-emerald-600 disabled:cursor-not-allowed disabled:bg-emerald-400"
                >
                  <span className="inline-flex items-center justify-center gap-2">
                    <Send size={18} />
                    {isSubmitting ? 'Submitting...' : 'Send Message'}
                  </span>
                </button>
              </form>

              <div className="mt-8 grid gap-3 sm:grid-cols-3 text-sm text-slate-600">
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                  <h3 className="font-semibold text-slate-900 mb-2">Phone</h3>
                  <a href="tel:+917906410606" className="block hover:text-primary">+91 7906410606</a>
                  <a href="tel:+916395007309" className="block hover:text-primary">+91 6395007309</a>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                  <h3 className="font-semibold text-slate-900 mb-2">Email</h3>
                  <a href="mailto:info@vibanihomeovet.com" className="block hover:text-primary">info@vibanihomeovet.com</a>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                  <h3 className="font-semibold text-slate-900 mb-2">Address</h3>
                  <p className="leading-6">Bajna Cut, Yamuna Expressway, Bajna, Mathura - 281201</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-spacing">
        <div className="container-custom px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                q: 'What are your delivery times?',
                a: 'We offer next-day delivery for orders within India. Special arrangements can be made for bulk orders.'
              },
              {
                q: 'Do you offer bulk discounts?',
                a: 'Yes! Contact our sales team for competitive pricing on bulk and institutional orders.'
              },
              {
                q: 'What is your return policy?',
                a: 'Unopened products can be returned within 30 days. Damaged or defective items are replaced immediately.'
              },
              {
                q: 'How can I become a dealer?',
                a: 'We welcome dealer partnerships. Fill the contact form with "Partnership" as subject, or call our sales team.'
              }
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <h3 className="font-bold text-dark mb-3 flex items-start gap-2">
                  <span className="text-primary font-bold">Q:</span>
                  {faq.q}
                </h3>
                <p className="text-gray-600 flex items-start gap-2">
                  <span className="text-primary font-bold flex-shrink-0">A:</span>
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container-custom px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Connect?
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Whether you have questions or want to partner with us, we're just a message away
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:info@capitalh.com" className="px-8 py-3 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-colors">
                Email Us
              </a>
              <a href="tel:+91xxxxxxxxxxxx" className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
