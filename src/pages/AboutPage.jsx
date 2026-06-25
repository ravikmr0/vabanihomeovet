import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle, Users, Award, Target, Heart, Zap } from 'lucide-react'

const AboutPage = () => {
  const missionValues = [
    {
      icon: Heart,
      title: 'Animal Welfare First',
      description: 'Committed to the health and wellness of all animals through natural remedies'
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'Highest standards in formulation, testing, and packaging'
    },
    {
      icon: Users,
      title: 'Trusted Partnership',
      description: 'Supporting veterinarians, farmers, and pet owners with expertise'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Continuously researching and developing new solutions'
    },
    {
      icon: Target,
      title: 'Accessibility',
      description: 'Making premium animal healthcare affordable for everyone'
    },
    {
      icon: CheckCircle,
      title: 'Sustainability',
      description: 'Environmentally responsible and sustainable practices'
    }
  ]

  const timeline = [
    { year: '2010', milestone: 'Company Founded' },
    { year: '2015', milestone: 'Expanded Product Lines' },
    { year: '2018', milestone: 'Quality Certifications' },
    { year: '2022', milestone: 'National Recognition' }
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
      <section className="pt-32 pb-16 bg-gradient-to-b from-teal-50 to-white">
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
              Pioneering natural veterinary healthcare solutions with over a decade of excellence in homeopathic medicine for animals
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="section-spacing">
        <div className="container-custom px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-4xl font-bold text-dark mb-4">Who We Are</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary"></div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Vibani Homeo Vet is a leading veterinary homeopathic pharmaceutical company dedicated to providing innovative, safe, and effective healthcare solutions for livestock, poultry, dairy animals, pets, and companion animals.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With a team of experienced veterinary professionals and researchers, we've developed over 500 specialized formulations that address diverse animal health needs. Our commitment to quality and efficacy has earned us the trust of thousands of veterinarians, farmers, and pet owners across India.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe that every animal deserves access to premium healthcare. That's why we combine traditional homeopathic wisdom with modern pharmaceutical standards to create solutions that are both effective and affordable.
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
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop"
                alt="Professional veterinary team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
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
              Our Core Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Guiding principles that shape everything we do
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

      {/* Timeline */}
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
              Our Journey
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="relative text-center"
              >
                <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-xl text-white shadow-lg">
                  <div className="text-3xl font-bold mb-2">{item.year}</div>
                  <p className="font-semibold">{item.milestone}</p>
                </div>
                {idx < timeline.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent transform -translate-y-1/2"></div>
                )}
              </motion.div>
            ))}
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
