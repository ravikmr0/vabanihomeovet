import React from 'react'
import { motion } from 'framer-motion'
import { Microscope, TestTube, Users, Lightbulb } from 'lucide-react'

const Research = () => {
  const features = [
    {
      icon: Microscope,
      title: 'Quality Control',
      description: 'Rigorous testing and quality assurance at every stage of production'
    },
    {
      icon: TestTube,
      title: 'Advanced Formulation',
      description: 'Latest pharmaceutical standards and formulation techniques'
    },
    {
      icon: Users,
      title: 'Veterinary Expertise',
      description: 'Developed by experienced veterinary professionals and researchers'
    },
    {
      icon: Lightbulb,
      title: 'Continuous Research',
      description: 'Ongoing research to improve and innovate our product lines'
    }
  ]

  return (
    <section id="research" className="section-spacing bg-gradient-to-b from-light to-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image from Unsplash */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-96 rounded-2xl overflow-hidden order-2 lg:order-1"
          >
            <img 
              src="https://images.unsplash.com/photo-1530026405186-a32e567ee231?w=600&h=400&fit=crop" 
              alt="Laboratory research and quality testing" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 order-1 lg:order-2"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
                Research & Quality
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mb-6"></div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our commitment to quality starts from sourcing and extends through formulation, testing, packaging, and distribution. Every product is developed under strict quality standards to ensure safety, consistency, and effectiveness.
              </p>
            </div>

            {/* Features Grid */}
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.2
                  }
                }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {features.map((feature, idx) => {
                const IconComponent = feature.icon
                return (
                  <motion.div
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
                    }}
                    className="space-y-2"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg mt-1">
                        <IconComponent className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-dark">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* Certification Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20 rounded-lg p-4 flex items-center gap-3"
            >
              <div className="text-3xl">✓</div>
              <div>
                <p className="font-semibold text-dark">Quality Certified</p>
                <p className="text-sm text-gray-600">Meets all international standards</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Research
