import React from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Dr. Rajesh Kumar',
      role: 'Veterinary Clinician',
      content: 'CAPITAL-H products have revolutionized my practice. The quality and effectiveness are unmatched in the market.',
      rating: 5,
      avatar: '👨‍⚕️'
    },
    {
      id: 2,
      name: 'Priya Singh',
      role: 'Farm Owner',
      content: 'Our dairy productivity increased by 25% after switching to Vibani Homeo Vet solutions. Highly recommended!',
      rating: 5,
      avatar: '👩‍🌾'
    },
    {
      id: 3,
      name: 'Arjun Patel',
      role: 'Poultry Farm Manager',
      content: 'Excellent customer service and outstanding product quality. Our birds are healthier and more productive.',
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      id: 4,
      name: 'Meera Sharma',
      role: 'Pet Healthcare Professional',
      content: 'I trust CAPITAL-H with my own pets. Safe, effective, and the results speak for themselves.',
      rating: 5,
      avatar: '👩‍🔬'
    },
    {
      id: 5,
      name: 'Vikram Desai',
      role: 'Distributor',
      content: 'Great partnership opportunity. Their products have strong market demand and excellent margins.',
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      id: 6,
      name: 'Ananya Roy',
      role: 'Animal Healthcare Professional',
      content: 'The natural formulations are fantastic. No side effects and animals respond positively.',
      rating: 5,
      avatar: '👩‍⚕️'
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
    <section id="testimonials" className="section-spacing bg-gradient-to-b from-light to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-4">
            Hear from veterinarians, farm owners, and healthcare professionals who trust our products
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
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white border border-gray-100 rounded-xl p-8 card-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="text-3xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-bold text-dark">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
