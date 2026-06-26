import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Download, Share2, Check, ChevronDown } from 'lucide-react'
import { PRODUCTS, PRODUCT_CATEGORIES, getProductById, getProductsByCategory } from '../data/products'

const ProductDetail = ({ productId, onBack, onViewProduct }) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = getProductById(parseInt(id || productId))
  const [expandedSection, setExpandedSection] = useState('benefits')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiry: ''
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-2xl text-gray-600">Product not found</p>
      </div>
    )
  }

  const category = PRODUCT_CATEGORIES.find(c => c.id === product.category)
  const relatedProducts = getProductsByCategory(product.category).filter(p => p.id !== product.id).slice(0, 3)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 5000)
    setFormData({ name: '', email: '', phone: '', company: '', inquiry: '' })
  }

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
    <section className="min-h-screen bg-white pt-32 pb-20">
      <div className="container-custom px-4 md:px-8">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onBack}
          className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8 font-semibold"
        >
          <ArrowLeft size={20} />
          Back to Products
        </motion.button>

        {/* Product Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
            <div>
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                {category?.name}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-dark mb-2">
                {product.name}
              </h1>
              <p className="text-xl text-gray-600 font-medium">
                {product.tagline}
              </p>
            </div>
            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-gray-100 hover:bg-primary/10 rounded-lg transition-colors"
              >
                <Share2 size={20} className="text-primary" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-gray-100 hover:bg-primary/10 rounded-lg transition-colors"
              >
                <Download size={20} className="text-primary" />
              </motion.button>
            </div>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          {/* Main Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-2 space-y-8"
          >
            {/* Product Image */}
            <motion.div
              variants={itemVariants}
              className="h-80 overflow-hidden rounded-xl border border-gray-100"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </motion.div>

            {/* Overview */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h2 className="text-2xl font-bold text-dark">Overview</h2>
              <p className="text-gray-700 leading-relaxed">
                {product.fullDescription}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {product.shortDescription}
              </p>
            </motion.div>

            {/* Expandable Sections */}
            <motion.div variants={itemVariants} className="space-y-4">
              {/* Benefits Section */}
              <motion.div
                className="border border-gray-200 rounded-lg overflow-hidden"
                layout
              >
                <button
                  onClick={() => setExpandedSection(expandedSection === 'benefits' ? null : 'benefits')}
                  className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors bg-light"
                >
                  <h3 className="text-lg font-bold text-dark flex items-center gap-2">
                    <Check className="text-primary" size={24} />
                    Key Benefits
                  </h3>
                  <ChevronDown
                    size={24}
                    className={`text-primary transition-transform ${expandedSection === 'benefits' ? 'rotate-180' : ''}`}
                  />
                </button>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: expandedSection === 'benefits' ? 'auto' : 0,
                    opacity: expandedSection === 'benefits' ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 space-y-3">
                    {product.benefits.map((benefit, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <span className="text-primary font-bold text-lg mt-1">✓</span>
                        <span className="text-gray-700">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* Indications Section */}
              <motion.div
                className="border border-gray-200 rounded-lg overflow-hidden"
                layout
              >
                <button
                  onClick={() => setExpandedSection(expandedSection === 'indications' ? null : 'indications')}
                  className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors bg-light"
                >
                  <h3 className="text-lg font-bold text-dark">Indications</h3>
                  <ChevronDown
                    size={24}
                    className={`text-primary transition-transform ${expandedSection === 'indications' ? 'rotate-180' : ''}`}
                  />
                </button>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: expandedSection === 'indications' ? 'auto' : 0,
                    opacity: expandedSection === 'indications' ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {product.indications.map((indication, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-center gap-2 text-gray-700"
                        >
                          <span className="text-primary font-bold">•</span>
                          {indication}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Specifications Section */}
              <motion.div
                className="border border-gray-200 rounded-lg overflow-hidden"
                layout
              >
                <button
                  onClick={() => setExpandedSection(expandedSection === 'specs' ? null : 'specs')}
                  className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors bg-light"
                >
                  <h3 className="text-lg font-bold text-dark">Specifications & Usage</h3>
                  <ChevronDown
                    size={24}
                    className={`text-primary transition-transform ${expandedSection === 'specs' ? 'rotate-180' : ''}`}
                  />
                </button>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: expandedSection === 'specs' ? 'auto' : 0,
                    opacity: expandedSection === 'specs' ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 space-y-4">
                    <div>
                      <p className="font-semibold text-dark mb-2">Dosage:</p>
                      <p className="text-gray-700">{product.dosage}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-dark mb-2">Presentation:</p>
                      <p className="text-gray-700">
                        {Array.isArray(product.presentation)
                          ? product.presentation.join(', ')
                          : product.presentation}
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-dark mb-2">Storage:</p>
                      <p className="text-gray-700">{product.storage}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-dark mb-2">Ingredients:</p>
                      <p className="text-gray-700">{product.ingredients}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* Quick Info Card */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-light to-white border border-gray-100 rounded-xl p-6 card-shadow"
            >
              <h3 className="font-bold text-dark text-lg mb-4">Quick Information</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase">Category</p>
                  <p className="text-dark font-semibold">{category?.name}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase">Presentation</p>
                  <p className="text-dark font-semibold">
                    {Array.isArray(product.presentation)
                      ? product.presentation.join(', ')
                      : product.presentation}
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-3">CTA Buttons</p>
                  <div className="space-y-2">
                    <button className="w-full btn-primary text-sm">
                      Request Information
                    </button>
                    <button className="w-full btn-secondary text-sm">
                      Contact Sales
                    </button>
                    <button className="w-full px-4 py-2 border-2 border-secondary text-secondary rounded-lg font-semibold hover:bg-secondary hover:text-white transition-all text-sm">
                      Become Distributor
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Enquiry Form */}
            <motion.form
              variants={itemVariants}
              onSubmit={handleFormSubmit}
              className="bg-gradient-to-br from-light to-white border border-gray-100 rounded-xl p-6 card-shadow"
            >
              <h3 className="font-bold text-dark text-lg mb-4">Send Inquiry</h3>
              
              {formSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm mb-4"
                >
                  ✓ Inquiry sent successfully!
                </motion.div>
              )}

              <div className="space-y-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm transition-all"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm transition-all"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm transition-all"
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm transition-all"
                />
                <textarea
                  name="inquiry"
                  placeholder="Your inquiry..."
                  value={formData.inquiry}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm transition-all resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full btn-primary text-sm"
                >
                  Send Inquiry
                </button>
              </div>
            </motion.form>

            {/* Download Brochure */}
            <motion.button
              variants={itemVariants}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all"
            >
              <Download size={20} />
              Download Brochure
            </motion.button>
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="border-t-2 border-gray-200 pt-12"
          >
            <h3 className="text-2xl font-bold text-dark mb-8">Related Products</h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {relatedProducts.map((relatedProduct) => (
                <motion.div
                  key={relatedProduct.id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl overflow-hidden card-shadow border border-gray-100"
                >
                  <div className="h-24 bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center text-4xl">
                    {relatedProduct.image}
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-dark mb-1">{relatedProduct.name}</h4>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{relatedProduct.tagline}</p>
                    <button
                      onClick={() => onViewProduct?.(relatedProduct.id)}
                      className="text-primary font-semibold text-sm hover:text-primary/80 transition-colors"
                    >
                      View Details →
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default ProductDetail
