import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const Products = ({ onProductClick }) => {
  const categories = [
    { id: 1, name: 'Reproductive Health' },
    { id: 2, name: 'Digestive & Liver Care' },
    { id: 3, name: 'Respiratory Care' },
    { id: 4, name: 'Urinary Care' },
    { id: 5, name: 'Fever & Heat Stress Management' },
    { id: 6, name: 'Skin & Disease Management' },
    { id: 7, name: 'Dairy Productivity & Nutrition' }
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

  const [activeIndex, setActiveIndex] = useState(0)

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % categories.length)
  }

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + categories.length) % categories.length)
  }

  return (
    <section id="products" className="section-spacing bg-gradient-to-b from-light to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Product Categories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-4">
            Comprehensive range of homeopathic solutions tailored for every animal healthcare need
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white/80 p-3 shadow-sm sm:p-4">
            <motion.div
              className="flex transition-transform duration-500 ease-out"
              animate={{ x: `-${activeIndex * 100}%` }}
            >
              {categories.map((category) => (
                <div key={category.id} className="w-full flex-shrink-0 px-1 sm:px-2">
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ y: -4, scale: 1.01 }}
                    className="flex min-h-[140px] items-center justify-center rounded-2xl border border-slate-200 bg-gradient-to-br from-teal-50 via-white to-slate-50 p-6 text-center shadow-sm"
                  >
                    <div>
                      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                        {category.id}
                      </div>
                      <h3 className="text-lg font-semibold text-dark">{category.name}</h3>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center justify-center gap-2 sm:justify-start">
              {categories.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2.5 rounded-full transition-all ${idx === activeIndex ? 'w-8 bg-primary' : 'w-2.5 bg-slate-300'}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center justify-center gap-3 sm:justify-end">
              <button
                onClick={goToPrev}
                className="rounded-full border border-slate-200 bg-white p-3 text-dark shadow-sm transition hover:border-primary hover:text-primary"
                aria-label="Previous category"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                onClick={goToNext}
                className="rounded-full border border-slate-200 bg-white p-3 text-dark shadow-sm transition hover:border-primary hover:text-primary"
                aria-label="Next category"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* View All Products CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a href="#products-catalog" className="btn-primary inline-flex items-center gap-2">
            View Complete Product Catalog
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Products
