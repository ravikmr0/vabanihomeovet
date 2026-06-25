import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Leaf, Shield, TrendingUp, Droplets, Zap, Award, Book, Users } from 'lucide-react'

const WhyHomeopathyPage = () => {
  const principles = [
    {
      icon: Leaf,
      title: 'Natural Healing',
      description: 'Harnesses the body\'s natural healing mechanisms without synthetic chemicals',
      details: 'Uses only natural ingredients from plants, minerals, and animal sources to stimulate the body\'s own immune response.'
    },
    {
      icon: Shield,
      title: 'Safe & Gentle',
      description: 'No known side effects or adverse reactions with long-term use',
      details: 'Diluted potencies ensure safety while maintaining therapeutic efficacy. Suitable for all ages and health conditions.'
    },
    {
      icon: TrendingUp,
      title: 'Holistic Approach',
      description: 'Treats the whole animal, not just symptoms',
      details: 'Addresses underlying causes of disease rather than masking symptoms, promoting complete recovery.'
    },
    {
      icon: Droplets,
      title: 'No Residues',
      description: 'Safe for food-producing animals without antibiotic residues',
      details: 'Ideal for dairy and meat production. No withdrawal periods needed. Completely safe for human consumption.'
    },
    {
      icon: Zap,
      title: 'Sustainable',
      description: 'Environmentally friendly and economically sustainable',
      details: 'Minimal environmental impact. Cost-effective treatment reduces overall healthcare expenses.'
    },
    {
      icon: Award,
      title: 'Evidence-Based',
      description: 'Supported by research and veterinary expertise',
      details: 'Developed by experienced veterinarians. Proven results across thousands of successful cases.'
    }
  ]

  const advantages = [
    {
      category: 'Health Benefits',
      items: [
        '✓ Boosts natural immunity',
        '✓ Promotes faster recovery',
        '✓ Prevents chronic diseases',
        '✓ Improves overall vitality'
      ]
    },
    {
      category: 'Economic Benefits',
      items: [
        '✓ Low treatment costs',
        '✓ Reduced veterinary visits',
        '✓ Improved productivity',
        '✓ Better profit margins'
      ]
    },
    {
      category: 'Quality Benefits',
      items: [
        '✓ No drug residues',
        '✓ Premium product quality',
        '✓ Natural certification ready',
        '✓ Consumer trust'
      ]
    }
  ]

  const conditions = [
    'Reproductive disorders',
    'Digestive issues',
    'Respiratory infections',
    'Urinary problems',
    'Fever & heat stress',
    'Skin conditions',
    'Nutritional deficiencies',
    'Immunity support'
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
      <section className="pt-32 pb-16 bg-gradient-to-b from-purple-50 to-white">
        <div className="container-custom px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-dark mb-6">
              Why Choose Homeopathy?
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Discover why thousands of veterinarians and animal care professionals trust homeopathy for comprehensive, natural, and effective animal healthcare
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="relative h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1587280413149-8ac0de946eb3?w=1200&h=400&fit=crop"
          alt="Natural animal wellness"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
      </section>

      {/* Six Principles */}
      <section className="section-spacing">
        <div className="container-custom px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
              Six Core Principles
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Understanding the foundation of homeopathic veterinary medicine
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {principles.map((principle, idx) => {
              const Icon = principle.icon
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="inline-flex p-3 bg-purple-100 rounded-lg mb-4 group-hover:bg-purple-200 transition-colors">
                    <Icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-2">{principle.title}</h3>
                  <p className="text-gray-600 mb-3 font-medium">{principle.description}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{principle.details}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Three Advantage Categories */}
      <section className="section-spacing bg-light">
        <div className="container-custom px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
              Three Categories of Benefits
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {advantages.map((advantage, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-2xl font-bold text-primary mb-6">{advantage.category}</h3>
                <div className="space-y-3">
                  {advantage.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-primary text-lg mt-0.5">•</span>
                      <span className="text-gray-700">{item.slice(2)}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Conditions Treated */}
      <section className="section-spacing">
        <div className="container-custom px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
              Conditions We Treat
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Homeopathy addresses a wide range of animal health concerns with proven effectiveness
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6"></div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {conditions.map((condition, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span className="text-dark font-semibold">{condition}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-spacing bg-light">
        <div className="container-custom px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
              Homeopathy vs. Traditional Approach
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="overflow-x-auto"
          >
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-primary to-secondary text-white">
                  <th className="px-6 py-4 text-left font-bold">Aspect</th>
                  <th className="px-6 py-4 text-left font-bold">Homeopathy</th>
                  <th className="px-6 py-4 text-left font-bold">Traditional</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-dark">Side Effects</td>
                  <td className="px-6 py-4 text-gray-700">None</td>
                  <td className="px-6 py-4 text-gray-700">Possible</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-dark">Residues</td>
                  <td className="px-6 py-4 text-gray-700">Zero</td>
                  <td className="px-6 py-4 text-gray-700">Present</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-dark">Cost</td>
                  <td className="px-6 py-4 text-gray-700">Low</td>
                  <td className="px-6 py-4 text-gray-700">High</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-dark">Recovery Time</td>
                  <td className="px-6 py-4 text-gray-700">Moderate</td>
                  <td className="px-6 py-4 text-gray-700">Fast</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-dark">Holistic Benefit</td>
                  <td className="px-6 py-4 text-gray-700">Complete</td>
                  <td className="px-6 py-4 text-gray-700">Symptomatic</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Expert Testimonial */}
      <section className="section-spacing bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container-custom px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto bg-white p-12 rounded-2xl shadow-xl border-l-4 border-primary"
          >
            <div className="flex items-center gap-4 mb-6">
              <Users className="text-primary" size={32} />
              <div>
                <h3 className="text-xl font-bold text-dark">Veterinary Expert Opinion</h3>
                <p className="text-gray-600">Dr. Veterinary Specialist</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed italic">
              "Homeopathic medicine represents a paradigm shift in animal healthcare. It treats the root cause of illness rather than just symptoms, leading to better long-term outcomes. My practice has seen remarkable improvements in animal health and productivity since incorporating homeopathic solutions."
            </p>
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
              Experience the Homeopathy Difference Today
            </h2>
            <p className="text-gray-600 mb-8">
              Join our growing community of satisfied practitioners who've transformed their animal healthcare approach
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Start Your Journey
              </Link>
              <Link to="/products" className="btn-secondary">
                Explore Our Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

const CheckCircle = ({ size, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
)

export default WhyHomeopathyPage
