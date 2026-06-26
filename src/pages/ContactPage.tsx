import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the data to a server
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: [
        { text: '+91 7906410606', href: 'tel:+917906410606' },
        { text: 'Mon-Fri: 9AM-6PM' }
      ]
    },
    {
      icon: Mail,
      title: 'Email',
      details: [
        { text: 'info@vibanihomeovet.com', href: 'mailto:info@vibanihomeovet.com' }
      ]
    },
    {
      icon: MapPin,
      title: 'Address',
      details: [
        { text: 'Vibani Homeo Vet., Bajna Cut, Yamuna Expressway, MaharamGarhi, Bajna, Mathura - 281201, U.P., India' }
      ]
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon-Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 4:00 PM']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <div className="min-h-screen">
      {/* Page Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-emerald-50 to-white">
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
              We're here to help! Contact us for inquiries, support, or partnership opportunities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="section-spacing">
        <div className="container-custom px-4 md:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {contactInfo.map((info, idx) => {
              const Icon = info.icon
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-3">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, i) => {
                      if (typeof detail === 'string') {
                        return (
                          <p key={i} className="text-gray-600 text-sm">
                            {detail}
                          </p>
                        )
                      }

                      return (
                        <a
                          key={i}
                          href={detail.href}
                          className="block text-sm text-gray-600 transition-colors hover:text-primary"
                        >
                          {detail.text}
                        </a>
                      )
                    })}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section-spacing bg-gradient-to-b from-emerald-50/70 via-white to-slate-50">
        <div className="container-custom px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 rounded-[28px] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.18)] border border-emerald-100"
            >
              <div className="mb-8">
                <div className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700 mb-4">
                  Quick Response
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-dark mb-2">Send us a Message</h2>
                <p className="text-gray-600">We typically respond within 24 hours with the support you need.</p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12"
                >
                  <div className="inline-flex p-4 bg-green-100 rounded-full mb-4">
                    <CheckCircle className="text-green-600" size={48} />
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-2">Message Sent!</h3>
                  <p className="text-gray-600 text-center">
                    Thank you for contacting us. We'll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-dark mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-slate-50/80 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-dark mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-slate-50/80 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-dark mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-slate-50/80 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                      placeholder="+91-XXXX-XXXX-XXX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-dark mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-slate-50/80 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                    >
                      <option value="">Select a subject</option>
                      <option value="product-inquiry">Product Inquiry</option>
                      <option value="technical-support">Technical Support</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-dark mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-slate-50/80 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all resize-none"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full flex items-center justify-center gap-2 rounded-xl py-3.5 text-base shadow-[0_12px_30px_-12px_rgba(16,185,129,0.7)]"
                  >
                    <Send size={20} />
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Information & Map */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Map */}
              <div className="relative h-80 rounded-[28px] overflow-hidden shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)] border border-slate-200">
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.5693696844593!2d72.5216652!3d23.0225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84b7e1f1f1f1%3A0x1f1f1f1f1f1f1f1f!2sAhmedabad%2C%20Gujarat%2C%20India!5e0!3m2!1sen!2sus!4v1234567890"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>

              {/* Additional Info */}
              <div className="bg-white p-8 rounded-[24px] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.16)] border border-slate-100">
                <h3 className="text-2xl font-bold text-dark mb-6">Why Contact Us?</h3>
                <ul className="space-y-4">
                  {[
                    'Get expert guidance on product selection',
                    'Become a dealer or distributor partner',
                    'Request bulk orders and quotes',
                    'Join our loyalty program',
                    'Schedule a product demonstration'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </motion.div>
          </div>
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
            className="text-center mb-16"
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
