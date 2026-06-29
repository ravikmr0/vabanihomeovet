import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle, Users, Award, Target, Heart, Zap } from 'lucide-react'

const AboutPage = () => {
  const missionValues = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'We approach every animal with empathy, attention, and a deep respect for its comfort and wellbeing.'
    },
    {
      icon: Award,
      title: 'Quality & Safety',
      description: 'Every formulation is developed with rigorous standards to support dependable results and trusted use.'
    },
    {
      icon: Users,
      title: 'Trusted Partnership',
      description: 'We work closely with veterinarians, farmers, and pet owners to provide practical support when it matters most.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We continue to research and refine solutions that meet the evolving needs of animal healthcare.'
    },
    {
      icon: Target,
      title: 'Accessible Wellness',
      description: 'Our goal is to make high-quality animal healthcare simpler to access and easier to trust.'
    },
    {
      icon: CheckCircle,
      title: 'Responsibility',
      description: 'We believe in mindful, sustainable practices that support both animals and the communities they serve.'
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
    <div className="min-h-screen">
      {/* Page Hero */}
      <section className="pt-16 pb-10 bg-gradient-to-b from-teal-50 to-white">
        <div className="container-custom px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-dark mb-6">
              About Vibani Homeo Vet
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              We are committed to advancing animal wellness through thoughtful homeopathic care, trusted formulations, and practical support for professionals and families alike.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="section-spacing">
        <div className="container-custom px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center mb-10">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-4xl font-bold text-dark mb-4">A trusted partner in animal wellness</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary"></div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Vibani Homeo Vet is a veterinary-focused brand dedicated to supporting animal health with safe, effective, and thoughtfully formulated homeopathic solutions for livestock, poultry, dairy animals, pets, and companion animals.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our work is guided by a simple belief: every animal deserves compassionate care, dependable support, and access to high-quality wellness solutions. We combine time-tested homeopathic principles with modern pharmaceutical discipline to create products that are practical, trusted, and easy to rely on.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From everyday wellness support to more serious health concerns, our focus remains the same—to help animals live healthier, more comfortable lives with confidence and care.
              </p>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src="/images/about.png"
                alt="Professional veterinary team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-spacing bg-white">
        <div className="container-custom px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-slate-200 bg-gradient-to-br from-teal-50 to-white p-8 shadow-sm"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Our Mission</p>
              <h3 className="mt-4 text-2xl font-bold text-dark">To make dependable animal healthcare more accessible, practical, and trustworthy.</h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                We strive to provide high-quality homeopathic veterinary solutions that support recovery, comfort, and long-term wellbeing across a wide range of animal care settings.
              </p>
              <ul className="mt-6 space-y-3 text-gray-700">
                <li className="flex items-start gap-2"><CheckCircle className="mt-0.5 flex-shrink-0 text-primary" size={18} />Deliver safe and thoughtful wellness support.</li>
                <li className="flex items-start gap-2"><CheckCircle className="mt-0.5 flex-shrink-0 text-primary" size={18} />Support veterinarians, farmers, and pet caregivers with confidence.</li>
                <li className="flex items-start gap-2"><CheckCircle className="mt-0.5 flex-shrink-0 text-primary" size={18} />Promote natural care backed by quality and consistency.</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-slate-200 bg-slate-900 p-8 text-white shadow-sm"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-300">Our Vision</p>
              <h3 className="mt-4 text-2xl font-bold">To become a leading force in natural veterinary wellness, driven by trust, innovation, and compassionate care.</h3>
              <p className="mt-4 text-slate-300 leading-relaxed">
                We envision a future where animal care is more holistic, more accessible, and more deeply rooted in preventive wellness and responsible treatment.
              </p>
              <ul className="mt-6 space-y-3 text-slate-200">
                <li className="flex items-start gap-2"><CheckCircle className="mt-0.5 flex-shrink-0 text-teal-300" size={18} />Expand awareness of natural veterinary support.</li>
                <li className="flex items-start gap-2"><CheckCircle className="mt-0.5 flex-shrink-0 text-teal-300" size={18} />Build long-term trust through ethical and effective solutions.</li>
                <li className="flex items-start gap-2"><CheckCircle className="mt-0.5 flex-shrink-0 text-teal-300" size={18} />Create a stronger standard for animal wellbeing in everyday care.</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Principles & Values */}
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
              Our Principles
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The values that guide our products, partnerships, and commitment to animal wellbeing
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
            {missionValues.map((item, idx) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="inline-flex p-3 bg-primary/10 rounded-lg mb-4">
                    <Icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>


      {/* Stats Section */}
      <section className="section-spacing bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container-custom px-4 md:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <div className="text-5xl font-bold mb-2">500+</div>
              <p className="text-lg opacity-90">Formulations</p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="text-5xl font-bold mb-2">1000+</div>
              <p className="text-lg opacity-90">Active Users</p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="text-5xl font-bold mb-2">99%</div>
              <p className="text-lg opacity-90">Satisfaction Rate</p>
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
              Ready to Experience the Difference?
            </h2>
            <p className="text-gray-600 mb-8">
              Join thousands of satisfied veterinarians and animal care professionals who trust Vibani Homeo Vet for their healthcare needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Get in Touch
              </Link>
              <Link to="/products" className="btn-secondary">
                Explore Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage

