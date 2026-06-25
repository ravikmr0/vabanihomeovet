import React from 'react'
import { motion } from 'framer-motion'
import { Building2 } from 'lucide-react'

const Industries = () => {
  const industries = [
    {
      name: 'Dairy Farms',
      icon: '🐄',
      description: 'Specialized solutions for dairy cattle health and productivity'
    },
    {
      name: 'Poultry Farms',
      icon: '🐔',
      description: 'Comprehensive healthcare for poultry farming operations'
    },
    {
      name: 'Veterinary Clinics',
      icon: '🏥',
      description: 'Professional-grade formulations for veterinary practitioners'
    },
    {
      name: 'Pet Care Centers',
      icon: '🐾',
      description: 'Trusted solutions for companion animal healthcare'
    },
    {
      name: 'Livestock Management',
      icon: '🐑',
      description: 'Integrated solutions for livestock health management'
    },
    {
      name: 'Healthcare Distributors',
      icon: '🚚',
      description: 'B2B partnerships for broader market distribution'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
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
    <section id="industries" className="section-spacing bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Industries We Serve
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-4">
            Trusted by professionals across diverse animal healthcare sectors
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {industries.map((industry, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-light to-white border border-gray-100 rounded-xl p-8 card-shadow text-center hover:border-primary/20 transition-colors"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: idx * 0.1 }}
                className="text-5xl mb-4"
              >
                {industry.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-dark mb-2">
                {industry.name}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Industries
