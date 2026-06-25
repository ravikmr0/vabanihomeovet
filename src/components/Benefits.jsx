import React from 'react'
import { motion } from 'framer-motion'
import { Leaf, Shield, TrendingUp, Droplets, Zap, Award } from 'lucide-react'

const Benefits = () => {
  const benefits = [
    {
      icon: Leaf,
      title: 'Natural Ingredients',
      description: 'Derived from pure natural sources without synthetic additives'
    },
    {
      icon: Shield,
      title: 'Safe for Long-Term Use',
      description: 'No adverse side effects or complications with extended use'
    },
    {
      icon: TrendingUp,
      title: 'No Harmful Residues',
      description: 'Safe for food-producing animals, zero residue concerns'
    },
    {
      icon: Droplets,
      title: 'Supports Natural Recovery',
      description: 'Enhances the body\'s inherent healing mechanisms'
    },
    {
      icon: Zap,
      title: 'Sustainable Healthcare',
      description: 'Environmentally friendly and economically sustainable'
    },
    {
      icon: Award,
      title: 'Cost-Effective Treatment',
      description: 'Premium quality at affordable pricing'
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="benefits" className="section-spacing bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Why Choose Homeopathy?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-4">
            Discover the advantages of homeopathic veterinary medicine for comprehensive animal care
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative h-80 rounded-2xl overflow-hidden mb-16"
        >
          <img 
            src="https://images.unsplash.com/photo-1587280413149-8ac0de946eb3?w=1200&h=400&fit=crop" 
            alt="Natural healthy animal care" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, idx) => {
            const IconComponent = benefit.icon
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-light to-white border border-gray-100 rounded-xl p-8 text-center card-shadow"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full">
                    <IconComponent className="text-primary" size={32} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-xl text-gray-700 mb-6 font-medium">
            Ready to experience the difference?
          </p>
          <a href="#contact" className="btn-primary inline-flex items-center gap-2">
            Get Started Today
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Benefits
