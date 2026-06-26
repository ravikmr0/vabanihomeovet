import React, { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import { PRODUCT_CATEGORIES, PRODUCTS } from '../data/products'

const ProductListing = ({ onProductClick }) => {
  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState(null)

  const filteredProducts = useMemo(() => {
    if (!selectedCategory) {
      return PRODUCTS
    }

    return PRODUCTS.filter(p => p.category === selectedCategory)
  }, [selectedCategory])

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
                <div className="h-40 overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5 group-hover:scale-105 transition-transform">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
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
