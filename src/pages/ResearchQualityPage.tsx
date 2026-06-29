import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const ResearchQualityPage = () => {
  const qualityStandards = [
    {
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=900&q=80',
      title: 'Advanced Testing',
      description: 'Rigorous laboratory testing at every production stage',
      details: [
        'Microbial purity analysis',
        'Potency verification',
        'Stability testing',
        'Safety compliance checks'
      ]
    },
    {
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80',
      title: 'Pharmaceutical Standards',
      description: 'Adheres to highest pharmaceutical manufacturing protocols',
      details: [
        'GMP certified processes',
        'ISO 9001:2015 compliance',
        'Clean room manufacturing',
        'Batch documentation'
      ]
    },
    {
      image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=900&q=80',
      title: 'Safety Assurance',
      description: 'Comprehensive safety protocols for all products',
      details: [
        'Toxicity screening',
        'Allergen testing',
        'Storage stability',
        'Shelf life validation'
      ]
    },
    {
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
      title: 'Quality Metrics',
      description: 'Continuous monitoring and improvement systems',
      details: [
        'Real-time tracking',
        'Performance analytics',
        'Customer feedback analysis',
        'Regulatory compliance'
      ]
    }
  ]

  const researchAreas = [
    {
      title: 'Product Efficacy',
      image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=900&q=80',
      description: 'Validating effectiveness through scientific research and veterinary trials'
    },
    {
      title: 'New Formulations',
      image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=80',
      description: 'Developing innovative solutions for emerging animal health challenges'
    },
    {
      title: 'Ingredient Research',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80',
      description: 'Exploring novel natural ingredients and their therapeutic properties'
    },
    {
      title: 'Clinical Applications',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80',
      description: 'Studying real-world applications and outcomes in veterinary practice'
    }
  ]

  const certifications = [
    { name: 'ISO 9001:2015', description: 'Quality Management System', image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=80' },
    { name: 'GMP Certified', description: 'Good Manufacturing Practice', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80' },
    { name: 'FSSAI Registered', description: 'Food Safety Authority', image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80' },
    { name: 'Ayush Approved', description: 'Ministry of AYUSH', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80' }
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
    <div className="min-h-screen">
      {/* Page Hero */}
      <section className="pt-16 pb-10 bg-gradient-to-b from-blue-50 to-white">
        <div className="container-custom px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-dark mb-6">
              Research & Quality
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Our commitment to excellence, rigorous testing, and scientific validation ensures every product meets the highest quality standards
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="relative h-72 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1530026405186-a32e567ee231?auto=format&fit=crop&w=1600&q=80"
          alt="Laboratory research"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/35 to-transparent"></div>
      </section>

      {/* Quality Standards */}
      <section className="section-spacing">
        <div className="container-custom px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
              Our Quality Standards
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive quality assurance at every stage of production
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {qualityStandards.map((standard, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <img
                  src={standard.image}
                  alt={standard.title}
                  className="h-40 w-full object-cover"
                />
                <div className="p-8">
                  <h3 className="text-xl font-bold text-dark mb-2">{standard.title}</h3>
                  <p className="text-gray-600 mb-4 font-medium text-sm">{standard.description}</p>
                  <ul className="space-y-2">
                    {standard.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <Check size={16} className="text-primary flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quality Process Flow */}
      <section className="section-spacing bg-light">
        <div className="container-custom px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
              Quality Assurance Process
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-5 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { step: 1, title: 'Raw Material\nSelection', desc: 'Premium sourcing' },
              { step: 2, title: 'Quality\nTesting', desc: 'Lab verification' },
              { step: 3, title: 'Production', desc: 'Controlled mfg' },
              { step: 4, title: 'Final Testing', desc: 'Batch validation' },
              { step: 5, title: 'Distribution', desc: 'Certification' }
            ].map((item, idx) => (
              <motion.div key={idx} variants={itemVariants} className="relative">
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="inline-flex w-12 h-12 items-center justify-center bg-gradient-to-br from-primary to-secondary text-white rounded-full font-bold mb-3">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-dark mb-1 text-sm whitespace-pre-line">{item.title}</h3>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </div>
                {idx < 4 && (
                  <div className="hidden md:block absolute top-12 -right-2 w-4 h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="section-spacing">
        <div className="container-custom px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
              Active Research Areas
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Continuous innovation to develop better solutions for animal healthcare
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6"></div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {researchAreas.map((area, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg overflow-hidden"
              >
                <img src={area.image} alt={area.title} className="h-40 w-full object-cover" />
                <div className="p-8">
                  <h3 className="text-lg font-bold text-dark mb-3">{area.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{area.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-spacing bg-light">
        <div className="container-custom px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
              Certifications & Compliance
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="inline-flex w-20 h-20 items-center justify-center rounded-full mb-4 overflow-hidden bg-white shadow-md">
                  <img
                    src={cert.image}
                    alt={`${cert.name} badge`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-dark mb-2">{cert.name}</h3>
                <p className="text-sm text-gray-600">{cert.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testing Procedures */}
      <section className="section-spacing">
        <div className="container-custom px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
              Comprehensive Testing Procedures
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          </motion.div>

          <div className="mb-10 overflow-hidden rounded-2xl shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1600&q=80"
              alt="Laboratory testing equipment"
              className="h-72 w-full object-cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                category: 'Pre-Manufacturing Tests',
                items: [
                  'Supplier verification',
                  'Raw material authenticity',
                  'Purity analysis',
                  'Contaminant screening'
                ]
              },
              {
                category: 'In-Process Testing',
                items: [
                  'Temperature monitoring',
                  'pH verification',
                  'Potency checks',
                  'Consistency control'
                ]
              },
              {
                category: 'Post-Manufacturing Tests',
                items: [
                  'Microbial analysis',
                  'Final potency verification',
                  'Packaging integrity',
                  'Labeling accuracy'
                ]
              },
              {
                category: 'Shelf-Life Testing',
                items: [
                  'Stability studies',
                  'Degradation analysis',
                  'Performance validation',
                  'Expiry determination'
                ]
              }
            ].map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-bold text-primary mb-6">{section.category}</h3>
                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="text-primary flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="section-spacing bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container-custom px-4 md:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <div className="text-5xl font-bold mb-2">100%</div>
              <p className="text-lg opacity-90">Tested Batches</p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="text-5xl font-bold mb-2">500+</div>
              <p className="text-lg opacity-90">Quality Parameters</p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="text-5xl font-bold mb-2">4</div>
              <p className="text-lg opacity-90">Certifications</p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="text-5xl font-bold mb-2">24/7</div>
              <p className="text-lg opacity-90">Laboratory Monitoring</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing">
        <div className="container-custom px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
              Trusted Quality, Proven Results
            </h2>
            <p className="text-gray-600 mb-8">
              Every product undergoes rigorous testing to ensure safety, efficacy, and quality standards
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products" className="btn-primary">
                View Our Products
              </Link>
              <Link to="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ResearchQualityPage
