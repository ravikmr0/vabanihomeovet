import React, { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Search, Sparkles, ArrowRight, Stethoscope, ShieldCheck } from 'lucide-react'
import { PRODUCT_CATEGORIES, PRODUCTS } from '../data/products'

const ProductListing = ({ onProductClick }) => {
  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [isQuoteOpen, setIsQuoteOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [contactForm, setContactForm] = useState({ fullName: '', phone: '', email: '' })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const openQuoteModal = (product) => {
    setSelectedProduct(product)
    setContactForm({ fullName: '', phone: '', email: '' })
    setFormSubmitted(false)
    setIsQuoteOpen(true)
  }

  const closeQuoteModal = () => {
    setIsQuoteOpen(false)
  }

  const handleFormChange = (field, value) => {
    setContactForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    setFormSubmitted(true)
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
    <section className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-emerald-50 pt-28 pb-20">
      <div className="container-custom px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-[2rem] border border-emerald-100 bg-white/85 p-6 shadow-[0_25px_80px_-30px_rgba(15,118,110,0.35)] backdrop-blur-xl md:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
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
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-sm font-medium text-slate-700">
                  Full Name
                  <input
                    type="text"
                    value={contactForm.fullName}
                    onChange={(event) => handleFormChange('fullName', event.target.value)}
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                  />
                </label>
                <label className="space-y-2 text-sm font-medium text-slate-700">
                  Phone
                  <input
                    type="tel"
                    value={contactForm.phone}
                    onChange={(event) => handleFormChange('phone', event.target.value)}
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                  />
                </label>
              </div>

              <label className="space-y-2 text-sm font-medium text-slate-700">
                Email
                <input
                  type="email"
                  value={contactForm.email}
                  onChange={(event) => handleFormChange('email', event.target.value)}
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                />
              </label>

              <button
                type="submit"
                className="w-full rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                Submit
              </button>

              {formSubmitted && (
                <p className="rounded-2xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                  Thank you! We have received your request and will contact you soon.
                </p>
              )}
            </form>
          </div>
        </div>
      )}
    </section>
  )
}

export default ProductListing
