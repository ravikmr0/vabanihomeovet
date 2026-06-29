import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Users } from 'lucide-react'

const WhyHomeopathyPage = () => {
  const principles = [
    {
      image: 'https://cdn.sanity.io/images/n6vy78g9/production/1856406139af3a9de3437d14fd0d3eaf493e5932-1920x1080.jpg',
      title: 'Natural Healing',
      description: 'Harnesses the body\'s natural healing mechanisms without synthetic chemicals',
      details: 'Uses only natural ingredients from plants, minerals, and animal sources to stimulate the body\'s own immune response.'
    },
    {
      image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=800&q=80',
      title: 'Safe & Gentle',
      description: 'No known side effects or adverse reactions with long-term use',
      details: 'Diluted potencies ensure safety while maintaining therapeutic efficacy. Suitable for all ages and health conditions.'
    },
    {
      image: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=800&q=80',
      title: 'Holistic Approach',
      description: 'Treats the whole animal, not just symptoms',
      details: 'Addresses underlying causes of disease rather than masking symptoms, promoting complete recovery.'
    },
    {
      image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80',
      title: 'No Residues',
      description: 'Safe for food-producing animals without antibiotic residues',
      details: 'Ideal for dairy and meat production. No withdrawal periods needed. Completely safe for human consumption.'
    },
    {
      image: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=800&q=80',
      title: 'Sustainable',
      description: 'Environmentally friendly and economically sustainable',
      details: 'Minimal environmental impact. Cost-effective treatment reduces overall healthcare expenses.'
    },
    {
      image: 'https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&w=800&q=80',
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

  const expertOpinions = [
    {
      title: 'Veterinary Expert Opinion',
      role: 'Dr. Veterinary Specialist',
      quote: 'Homeopathic medicine represents a paradigm shift in animal healthcare. It treats the root cause of illness rather than just symptoms, leading to better long-term outcomes.',
      keyword: 'homeopathic veterinary care'
    },
    {
      title: 'Livestock Wellness Specialist',
      role: 'Dr. A. Sharma, BVSc',
      quote: 'For dairy and poultry farms, homeopathy supports stronger immunity, better recovery, and healthier animals without antibiotic residues.',
      keyword: 'homeopathy for livestock'
    },
    {
      title: 'Natural Recovery Advocate',
      role: 'Dr. N. Patel, Veterinary Consultant',
      quote: 'I recommend homeopathic solutions because they promote gentle healing, reduce stress, and improve overall vitality in companion and farm animals.',
      keyword: 'natural animal healing'
    },
    {
      title: 'Holistic Animal Health Expert',
      role: 'Dr. S. Verma, DVM',
      quote: 'Homeopathy helps address chronic imbalances in digestion, reproduction, and immunity while supporting sustainable animal husbandry.',
      keyword: 'holistic veterinary homeopathy'
    },
    {
      title: 'Safe Alternative Care',
      role: 'Dr. K. Rao, Veterinary Physician',
      quote: 'The gentle nature of homeopathic treatment makes it ideal for sensitive animals, young stock, and long-term wellness programs.',
      keyword: 'safe alternative veterinary care'
    },
    {
      title: 'Productivity & Welfare Expert',
      role: 'Dr. M. Iqbal, Animal Health Advisor',
      quote: 'When animals recover faster and experience fewer side effects, farms see better productivity, lower treatment costs, and improved welfare.',
      keyword: 'animal productivity homeopathy'
    },
    {
      title: 'Trusted Veterinary Homeopathy',
      role: 'Dr. L. Thomas, Senior Vet',
      quote: 'Modern veterinary practice increasingly values homeopathy for its preventive strength, residue-free profile, and measurable improvement in animal quality of life.',
      keyword: 'trusted veterinary homeopathy'
    }
  ]

  const [activeOpinion, setActiveOpinion] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveOpinion((prev) => (prev + 1) % expertOpinions.length)
    }, 5000)

    return () => window.clearInterval(interval)
  }, [])

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
      <section className="pt-16 pb-10 bg-gradient-to-b from-purple-50 to-white">
        <div className="container-custom px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-dark mb-6 leading-tight">
              Why Homeopathy?
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              Discover the natural, safe, and effective benefits of homeopathy for animal healthcare.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="relative h-72 overflow-hidden">
        <img
          src="/images/heroimages/complete_product_range.png"
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
            className="text-center mb-10"
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {principles.map((principle, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <img
                  src={principle.image}
                  alt={principle.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-8">
                  <h3 className="text-xl font-bold text-dark mb-2">{principle.title}</h3>
                  <p className="text-gray-600 mb-3 font-medium">{principle.description}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{principle.details}</p>
                </div>
              </motion.div>
            ))}
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
            className="text-center mb-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
              Three Categories of Benefits
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
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
            className="text-center mb-10"
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
            className="text-center mb-10"
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

      {/* Expert Testimonial Carousel */}
      <section className="section-spacing bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container-custom px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-6xl"
          >
            <div className="mb-6 text-center md:text-left">
              <div className="mb-4 flex items-center justify-center gap-3 md:justify-start">
                <Users className="text-primary" size={32} />
                <div>
                  <h3 className="text-2xl font-bold text-dark">Veterinary Expert Opinion</h3>
                  <p className="text-gray-600">Trusted insights for modern animal health and homeopathic care</p>
                </div>
              </div>
              <p className="mx-auto max-w-3xl text-gray-600 md:mx-0">
                These expert perspectives highlight why homeopathy is gaining recognition for safe, residue-free, and holistic animal wellness.
              </p>
            </div>

            <div className="overflow-hidden rounded-3xl border border-primary/10 bg-white p-6 shadow-xl md:p-8">
              <motion.div
                key={activeOpinion}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]"
              >
                <div className="rounded-2xl border-l-4 border-primary bg-gradient-to-br from-primary/5 to-transparent p-6 md:p-8">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                    {expertOpinions[activeOpinion].keyword}
                  </p>
                  <h4 className="mb-2 text-xl font-bold text-dark">
                    {expertOpinions[activeOpinion].title}
                  </h4>
                  <p className="mb-4 text-sm font-semibold text-gray-600">
                    {expertOpinions[activeOpinion].role}
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700 italic">
                    “{expertOpinions[activeOpinion].quote}”
                  </p>
                </div>

                <div className="flex flex-col justify-center rounded-2xl bg-gray-50 p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    {expertOpinions.map((opinion, index) => (
                      <button
                        key={opinion.title}
                        onClick={() => setActiveOpinion(index)}
                        aria-label={`Show expert opinion ${index + 1}`}
                        className={`h-3 w-3 rounded-full transition ${
                          index === activeOpinion ? 'bg-primary' : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
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
            <h2 className="mb-6 text-2xl font-bold leading-tight text-dark sm:text-3xl md:text-4xl">
              Experience the Homeopathy Difference Today
            </h2>
            <p className="text-gray-600 mb-6">
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
