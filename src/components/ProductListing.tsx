import React, { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Search, Sparkles, ArrowRight, Stethoscope, ShieldCheck, CheckCircle, AlertCircle } from 'lucide-react'
import { PRODUCT_CATEGORIES, PRODUCTS } from '../data/products'

const ProductListing = ({ onProductClick }) => {
  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [isQuoteOpen, setIsQuoteOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [contactForm, setContactForm] = useState({ name: '', email: '', phone: '', company: '', subject: '', message: '' })
  const [formErrors, setFormErrors] = useState({ name: '', email: '', phone: '', company: '', subject: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [feedbackMessage, setFeedbackMessage] = useState('')

  const initialErrors = { name: '', email: '', phone: '', company: '', subject: '', message: '' }

  const openQuoteModal = (product) => {
    setSelectedProduct(product)
    setContactForm({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: product ? `Quote request for ${product.name}` : '',
      message: product ? `I would like to know more about ${product.name}.` : ''
    })
    setFormErrors(initialErrors)
    setFeedbackMessage('')
    setSubmissionStatus('idle')
    setIsSubmitting(false)
    setIsQuoteOpen(true)
  }

  const closeQuoteModal = () => {
    setIsQuoteOpen(false)
    setFeedbackMessage('')
    setSubmissionStatus('idle')
  }

  const handleFormChange = (field, value) => {
    setContactForm((prev) => ({ ...prev, [field]: value }))
    setFormErrors((prev) => ({ ...prev, [field]: '' }))
  }

  const validateContactForm = () => {
    const nextErrors = { ...initialErrors }
    const trimmedName = contactForm.name.trim()
    const trimmedEmail = contactForm.email.trim()
    const trimmedPhone = contactForm.phone.trim()
    const trimmedSubject = contactForm.subject.trim()
    const trimmedMessage = contactForm.message.trim()

    if (!trimmedName) nextErrors.name = 'Please enter your full name.'
    if (!trimmedEmail) nextErrors.email = 'Please enter your email address.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) nextErrors.email = 'Please enter a valid email address.'
    if (!trimmedPhone) nextErrors.phone = 'Please enter your phone number.'
    else if (!/^[+\d\s().-]{7,}$/.test(trimmedPhone)) nextErrors.phone = 'Please enter a valid phone number.'
    if (!trimmedSubject) nextErrors.subject = 'Please add a subject.'
    if (!trimmedMessage) nextErrors.message = 'Please describe your interest.'
    else if (trimmedMessage.length < 10) nextErrors.message = 'Please add a little more detail.'

    setFormErrors(nextErrors)
    return nextErrors
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault()

    const nextErrors = validateContactForm()
    const hasErrors = Object.values(nextErrors).some(Boolean)

    if (hasErrors) {
      setSubmissionStatus('error')
      setFeedbackMessage('Please correct the highlighted fields and try again.')
      return
    }

    if (isSubmitting) return

    setIsSubmitting(true)
    setSubmissionStatus('idle')
    setFeedbackMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...contactForm,
          subject: contactForm.subject || `Quote request for ${selectedProduct?.name || 'our products'}`,
          message: contactForm.message || `I am interested in ${selectedProduct?.name || 'your products'}.`
        })
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setContactForm({
          name: '',
          email: '',
          phone: '',
          company: '',
          subject: selectedProduct ? `Quote request for ${selectedProduct.name}` : '',
          message: selectedProduct ? `I would like to know more about ${selectedProduct.name}.` : ''
        })
        setFormErrors(initialErrors)
        setSubmissionStatus('success')
        setFeedbackMessage(result.message || 'Your query has been submitted successfully.')
      } else {
        setSubmissionStatus('error')
        setFeedbackMessage(result.message || 'Unable to submit your query. Please try again.')
      }
    } catch (error) {
      setSubmissionStatus('error')
      setFeedbackMessage('Unable to submit your query. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleViewDetails = (product) => {
    if (onProductClick) {
      onProductClick(product.id)
    }
    navigate(`/product/${product.id}`)
  }

  const filteredProducts = useMemo(() => {
    const q = searchTerm.trim().toLowerCase()

    return PRODUCTS.filter((product) => {
      const matchesCategory = !selectedCategory || product.category === selectedCategory
      const matchesQuery =
        !q ||
        product.name.toLowerCase().includes(q) ||
        product.hindiName.toLowerCase().includes(q) ||
        product.tagline.toLowerCase().includes(q) ||
        product.shortDescription.toLowerCase().includes(q)

      return matchesCategory && matchesQuery
    })
  }, [searchTerm, selectedCategory])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  }

  return (
    <section className="bg-gradient-to-b from-slate-50 via-white to-emerald-50 py-12">
      <div className="container-custom px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-[2rem] border border-emerald-100 bg-white/85 p-6 shadow-[0_25px_80px_-30px_rgba(15,118,110,0.35)] backdrop-blur-xl md:p-10"
        >
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">
                <Sparkles size={16} />
                18 premium veterinary solutions
              </div>
              <h1 className="text-4xl font-bold text-dark md:text-5xl">
                Discover our complete range of animal healthcare products
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-slate-600">
                From reproductive support and mastitis care to digestive wellness and dairy productivity, every product is crafted to support healthier animals and stronger farms.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-600">
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2">
                  <ShieldCheck size={16} className="text-emerald-600" />
                  Veterinary-focused formulations
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2">
                  <Stethoscope size={16} className="text-emerald-600" />
                  Trusted by livestock professionals
                </span>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700 p-6 text-white shadow-lg">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-100">Featured category</p>
              <h2 className="mt-2 text-2xl font-bold">Reproductive & udder support</h2>
              <p className="mt-3 text-sm text-emerald-50/90">
                Strengthen care around fertility, delivery, mastitis and postpartum recovery with specialized solutions.
              </p>
              <button
                onClick={() => setSelectedCategory('reproductive')}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-emerald-700 transition hover:-translate-y-0.5"
              >
                Explore this range
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-50/80 p-4 md:flex-row md:items-center md:justify-between">
            <label className="flex flex-1 items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-3 shadow-sm">
              <Search size={18} className="text-slate-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search by product, Hindi name or benefit"
                className="w-full border-0 bg-transparent text-sm outline-none"
              />
            </label>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory('')}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${!selectedCategory ? 'bg-emerald-600 text-white' : 'bg-white text-slate-600 hover:bg-emerald-50'}`}
              >
                All products
              </button>
              {PRODUCT_CATEGORIES.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${selectedCategory === category.id ? 'bg-emerald-600 text-white' : 'bg-white text-slate-600 hover:bg-emerald-50'}`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mt-10 grid gap-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Product catalog</p>
                <h2 className="text-2xl font-bold text-dark">Showing {filteredProducts.length} products</h2>
              </div>
              {(selectedCategory || searchTerm) && (
                <button
                  onClick={() => {
                    setSelectedCategory('')
                    setSearchTerm('')
                  }}
                  className="text-sm font-semibold text-emerald-700 hover:text-emerald-800"
                >
                  Clear filters
                </button>
              )}
            </div>

            {filteredProducts.length > 0 ? (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              >
                {filteredProducts.map((product) => (
                  <motion.article
                    key={product.id}
                    variants={itemVariants}
                    whileHover={{ y: -8, scale: 1.01 }}
                    className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_20px_60px_-25px_rgba(15,23,42,0.25)]"
                  >
                    <div className="relative aspect-[3/2] overflow-hidden bg-slate-100">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-contain p-4 transition duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 shadow-sm">
                        {product.badge}
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <div className="mb-3 flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                          {PRODUCT_CATEGORIES.find((category) => category.id === product.category)?.name}
                        </span>
                        <span className="text-sm font-medium text-slate-500">{product.hindiName}</span>
                      </div>
                      <h3 className="text-xl font-bold text-dark">{product.name}</h3>
                      <p className="mt-2 text-sm font-medium text-slate-600">{product.tagline}</p>
                      <p className="mt-4 text-sm leading-6 text-slate-600 line-clamp-2">{product.shortDescription}</p>
                      <div className="mt-6 border-t border-slate-100 pt-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Presentation</p>
                        <p className="mt-1 text-sm text-slate-700">{product.presentation}</p>
                      </div>
                      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                        <button
                          type="button"
                          onClick={() => handleViewDetails(product)}
                          className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"
                        >
                          View details
                          <ArrowRight size={16} />
                        </button>
                        <button
                          type="button"
                          onClick={() => openQuoteModal(product)}
                          className="inline-flex items-center justify-center rounded-full border border-emerald-600 bg-white px-4 py-2 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50"
                        >
                          Get quote
                        </button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="rounded-[1.5rem] border border-dashed border-slate-300 bg-white p-10 text-center shadow-sm"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-2xl text-emerald-700">
                  🔎
                </div>
                <h3 className="text-xl font-bold text-dark">No matching products found</h3>
                <p className="mt-2 text-slate-600">Try another keyword or clear the active filter to see the full catalog.</p>
              </motion.div>
            )}
          </div>

        </div>
      </div>

      {isQuoteOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 px-4 py-10">
          <div className="w-full max-w-2xl rounded-[2rem] bg-white p-8 shadow-2xl sm:p-10">
            <div className="flex items-start justify-between gap-4 pb-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Request a quote</p>
                <h2 className="mt-2 text-3xl font-bold text-dark">Send your details</h2>
                <p className="mt-2 text-sm text-slate-600">
                  {selectedProduct ? `Request a quote for ${selectedProduct.name}.` : 'Share your contact details and we will respond shortly.'}
                </p>
              </div>
              <button
                type="button"
                onClick={closeQuoteModal}
                className="rounded-full bg-slate-100 p-3 text-slate-700 transition hover:bg-slate-200"
                aria-label="Close quote form"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-5">
              {feedbackMessage ? (
                <div className={`flex items-start gap-3 rounded-2xl border px-4 py-3 text-sm ${submissionStatus === 'success' ? 'border-emerald-200 bg-emerald-50 text-emerald-700' : 'border-rose-200 bg-rose-50 text-rose-700'}`}>
                  {submissionStatus === 'success' ? <CheckCircle className="mt-0.5 flex-shrink-0" size={18} /> : <AlertCircle className="mt-0.5 flex-shrink-0" size={18} />}
                  <span>{feedbackMessage}</span>
                </div>
              ) : null}

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-sm font-medium text-slate-700">
                  Full Name
                  <input
                    type="text"
                    value={contactForm.name}
                    onChange={(event) => handleFormChange('name', event.target.value)}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                  />
                  {formErrors.name ? <p className="text-sm text-rose-600">{formErrors.name}</p> : null}
                </label>
                <label className="space-y-2 text-sm font-medium text-slate-700">
                  Phone
                  <input
                    type="tel"
                    value={contactForm.phone}
                    onChange={(event) => handleFormChange('phone', event.target.value)}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                  />
                  {formErrors.phone ? <p className="text-sm text-rose-600">{formErrors.phone}</p> : null}
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-sm font-medium text-slate-700">
                  Email
                  <input
                    type="email"
                    value={contactForm.email}
                    onChange={(event) => handleFormChange('email', event.target.value)}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                  />
                  {formErrors.email ? <p className="text-sm text-rose-600">{formErrors.email}</p> : null}
                </label>
                <label className="space-y-2 text-sm font-medium text-slate-700">
                  Company / Farm
                  <input
                    type="text"
                    value={contactForm.company}
                    onChange={(event) => handleFormChange('company', event.target.value)}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                  />
                  {formErrors.company ? <p className="text-sm text-rose-600">{formErrors.company}</p> : null}
                </label>
              </div>

              <label className="space-y-2 text-sm font-medium text-slate-700">
                Subject
                <input
                  type="text"
                  value={contactForm.subject}
                  onChange={(event) => handleFormChange('subject', event.target.value)}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                  placeholder="Quote request or product enquiry"
                />
                {formErrors.subject ? <p className="text-sm text-rose-600">{formErrors.subject}</p> : null}
              </label>

              <label className="space-y-2 text-sm font-medium text-slate-700">
                Message
                <textarea
                  rows={4}
                  value={contactForm.message}
                  onChange={(event) => handleFormChange('message', event.target.value)}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                  placeholder="Tell us what you need and we will get back to you."
                />
                {formErrors.message ? <p className="text-sm text-rose-600">{formErrors.message}</p> : null}
              </label>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-emerald-400"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}

export default ProductListing
