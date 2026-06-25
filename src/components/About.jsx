import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const About = () => {
  const highlights = [
    'Quality Assured Formulations',
    'Natural & Safe Solutions',
    'Veterinary Focused Products',
    'Trusted by Animal Care Professionals',
    'Research-Based Development'
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="about" className="section-spacing bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            About Vibani Homeo Vet
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              Vibani Homeo Vet is committed to providing high-quality homeopathic veterinary medicines for livestock, poultry, dairy animals, pets, and companion animals. Our formulations are developed to support animal health naturally while promoting sustainable and responsible animal care.
            </p>

            <p className="text-gray-600 leading-relaxed">
              With years of experience in veterinary homeopathic medicine, we've established ourselves as a trusted partner for animal healthcare professionals, farms, and pet owners across India. Our mission is to make natural, effective animal healthcare accessible to everyone.
            </p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-3"
            >
              {highlights.map((highlight, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="text-primary flex-shrink-0" size={24} />
                  <span className="text-gray-700 font-medium">{highlight}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image from Unsplash */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-96 rounded-2xl overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop" 
              alt="Professional veterinary care" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
