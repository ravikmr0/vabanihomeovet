import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const Products = ({ onProductClick }) => {
  const categories = [
    {
      id: 1,
      name: 'Dairy Animal Care',
      description: 'Specialized formulations for maintaining health and productivity in dairy cattle and farm animals.',
      icon: '🐮',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      name: 'Poultry Health Solutions',
      description: 'Comprehensive healthcare products designed for poultry farms to enhance immunity and productivity.',
      icon: '🐔',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      id: 3,
      name: 'Pet Healthcare',
      description: 'Gentle and effective homeopathic medicines for dogs, cats, and companion animals.',
      icon: '🐕',
      color: 'from-amber-500 to-amber-600'
    },
    {
      id: 4,
      name: 'Immunity Support',
      description: 'Natural formulations to strengthen immune systems and prevent common diseases.',
      icon: '💪',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 5,
      name: 'Reproductive Health',
      description: 'Specialized products for breeding efficiency and reproductive health management.',
      icon: '❤️',
      color: 'from-pink-500 to-pink-600'
    },
    {
      id: 6,
      name: 'Digestive Health',
      description: 'Targeted solutions for digestive issues and nutritional support.',
      icon: '🌱',
      color: 'from-teal-500 to-teal-600'
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-white rounded-xl overflow-hidden card-shadow border border-gray-100"
            >
              {/* Card Header */}
              <div className={`h-24 bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                <span className="text-5xl">{category.icon}</span>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {category.description}
                </p>

                <button 
                  onClick={() => {
                    // Scroll to products listing
                    const productsSection = document.querySelector('#products-listing')
                    if (productsSection) {
                      productsSection.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
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
