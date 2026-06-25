import React, { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Search, Filter, X } from 'lucide-react'
import { PRODUCT_CATEGORIES, PRODUCTS, getProductsByCategory, searchProducts } from '../data/products'

const ProductListing = ({ onProductClick }) => {
  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [showFilters, setShowFilters] = useState(false)

  // Filter and search logic
  const filteredProducts = useMemo(() => {
    let result = PRODUCTS

    // Apply search filter
    if (searchQuery) {
      result = searchProducts(searchQuery)
    }

    // Apply category filter
    if (selectedCategory) {
      result = result.filter(p => p.category === selectedCategory)
    }

    return result
  }, [selectedCategory, searchQuery])

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
    <section className="min-h-screen bg-gradient-to-b from-light to-white pt-32 pb-20">
      <div className="container-custom px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Our Product Catalog
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-4">
            Premium homeopathic solutions designed for comprehensive animal healthcare
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search products by name, benefit, or application..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>
        </motion.div>

        {/* Filter Section */}
        <div className="mb-8">
          {/* Filter Toggle Button - Mobile */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden flex items-center gap-2 btn-secondary mb-4 w-full justify-center"
          >
            <Filter size={20} />
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </motion.button>

          {/* Categories Filter */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: showFilters ? 1 : 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
            className="lg:block"
          >
            <div className="flex flex-wrap gap-2 mb-6">
              {/* All Products */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  selectedCategory === null
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white border-2 border-gray-300 text-gray-700 hover:border-primary'
                }`}
              >
                All Products ({PRODUCTS.length})
              </motion.button>

              {/* Category Buttons */}
              {PRODUCT_CATEGORIES.map((category, idx) => (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all whitespace-nowrap ${
                    selectedCategory === category.id
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-white border-2 border-gray-300 text-gray-700 hover:border-primary'
                  }`}
                >
                  {category.name} ({getProductsByCategory(category.id).length})
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Results Count */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-gray-600 mb-8"
        >
          Showing <span className="font-bold text-primary">{filteredProducts.length}</span> product{filteredProducts.length !== 1 ? 's' : ''}
          {selectedCategory && ' in selected category'}
          {searchQuery && ` matching "${searchQuery}"`}
        </motion.p>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="bg-white rounded-xl overflow-hidden card-shadow border border-gray-100 group hover:border-primary/20 transition-all"
              >
                {/* Product Image/Icon */}
                <div className="h-32 bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center text-5xl group-hover:scale-110 transition-transform">
                  {product.image}
                </div>

                {/* Product Content */}
                <div className="p-6">
                  {/* Category Badge */}
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                      {PRODUCT_CATEGORIES.find(c => c.id === product.category)?.name}
                    </span>
                  </div>

                  {/* Product Name */}
                  <h3 className="text-xl font-bold text-dark mb-1">
                    {product.name}
                  </h3>

                  {/* Tagline */}
                  <p className="text-sm text-gray-600 mb-3 font-medium">
                    {product.tagline}
                  </p>

                  {/* Short Description */}
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {product.shortDescription}
                  </p>

                  {/* Key Benefits Preview */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-700 mb-2">Key Benefits:</p>
                    <ul className="space-y-1">
                      {product.benefits.slice(0, 2).map((benefit, idx) => (
                        <li key={idx} className="text-xs text-gray-600 flex items-start gap-2">
                          <span className="text-primary font-bold">•</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                      {product.benefits.length > 2 && (
                        <li className="text-xs text-primary font-semibold">
                          +{product.benefits.length - 2} more
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Presentation */}
                  <div className="mb-4 pb-4 border-b border-gray-200">
                    <p className="text-xs text-gray-600">
                      <span className="font-semibold">Presentation:</span> {
                        Array.isArray(product.presentation)
                          ? product.presentation.join(', ')
                          : product.presentation
                      }
                    </p>
                  </div>

                  {/* View Details Button */}
                  <button
                    onClick={() => {
                      onProductClick?.(product.id)
                      navigate(`/product/${product.id}`)
                    }}
                    className="block w-full text-center btn-primary"
                  >
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center py-16"
          >
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-dark mb-2">No products found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={() => {
                setSearchQuery('')
                setSelectedCategory(null)
              }}
              className="btn-primary"
            >
              Clear Filters
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default ProductListing
