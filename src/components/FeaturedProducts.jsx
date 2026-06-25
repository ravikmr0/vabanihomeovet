import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import { FEATURED_PRODUCTS } from '../data/products'

const FeaturedProducts = ({ onViewAll, onProductView }) => {
  const navigate = useNavigate()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % FEATURED_PRODUCTS.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoPlay])

  const goToSlide = (index) => {
    setCurrentSlide(index)
    setAutoPlay(false)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % FEATURED_PRODUCTS.length)
    setAutoPlay(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + FEATURED_PRODUCTS.length) % FEATURED_PRODUCTS.length)
    setAutoPlay(false)
  }

  const currentProduct = FEATURED_PRODUCTS[currentSlide]

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
    <section className="section-spacing bg-gradient-to-b from-white via-light to-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Featured Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-4">
            Explore our premium pharmaceutical-grade solutions trusted by professionals
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </motion.div>

        {/* Slider Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Main Slide */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl overflow-hidden card-shadow border border-gray-100"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[500px]">
              {/* Product Image/Icon */}
              <motion.div
                key={currentProduct.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-8xl"
              >
                {currentProduct.image}
              </motion.div>

              {/* Product Info */}
              <motion.div
                key={`info-${currentProduct.id}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-8 md:p-12 flex flex-col justify-between"
              >
                {/* Badge & Title */}
                <div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-4">
                      Featured Product
                    </span>
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="text-3xl md:text-4xl font-bold text-dark mb-2"
                  >
                    {currentProduct.name}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-lg text-gray-600 font-medium mb-6"
                  >
                    {currentProduct.tagline}
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 }}
                    className="text-gray-700 leading-relaxed mb-6"
                  >
                    {currentProduct.shortDescription}
                  </motion.p>
                </div>

                {/* Benefits Preview */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mb-8"
                >
                  <p className="text-sm font-semibold text-gray-700 mb-3">Key Benefits:</p>
                  <ul className="space-y-2">
                    {currentProduct.benefits.slice(0, 3).map((benefit, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.55 + idx * 0.05 }}
                        className="flex items-start gap-2 text-gray-700"
                      >
                        <span className="text-primary font-bold mt-1">✓</span>
                        <span>{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.75 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <a href={`/product/${currentProduct.id}`} className="btn-primary flex items-center justify-center gap-2">
                    View Details
                    <ArrowRight size={18} />
                  </a>
                  <button className="btn-secondary">
                    Request Information
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Navigation Arrows */}
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            onClick={prevSlide}
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white hover:bg-primary hover:text-white rounded-full shadow-lg transition-all transform -translate-x-4 lg:-translate-x-8"
          >
            <ChevronLeft size={24} />
          </motion.button>

          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            onClick={nextSlide}
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white hover:bg-primary hover:text-white rounded-full shadow-lg transition-all transform translate-x-4 lg:translate-x-8"
          >
            <ChevronRight size={24} />
          </motion.button>

          {/* Slide Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-2 mt-8"
          >
            {FEATURED_PRODUCTS.map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => goToSlide(idx)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === currentSlide
                    ? 'bg-primary w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* View All Products CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button
            onClick={() => {
              onViewAll?.()
              navigate('/products')
            }}
            className="btn-primary inline-flex items-center gap-2"
          >
            View All Products Catalog
            <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedProducts
