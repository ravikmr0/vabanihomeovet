import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

const Hero = ({ onContactClick }) => {
  const navigate = useNavigate()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  // Hero slides data with company, products, services, and benefits information
  const slides = [
    {
      id: 1,
      type: 'company',
      icon: '🏥',
      title: 'Welcome to CAPITAL-H',
      headline: 'Natural Homeopathic Solutions for Animal Health & Wellness',
      description: 'Providing scientifically developed homeopathic veterinary medicines that support animal health, productivity, immunity, and overall well-being.',
      stats: [
        { value: '500+', label: 'Formulations' },
        { value: '1000+', label: 'Active Users' },
        { value: '99%', label: 'Satisfaction' }
      ],
      color: 'from-teal-50 to-blue-50',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5338a7d?w=700&h=600&fit=crop'
    },
    {
      id: 2,
      type: 'products',
      icon: '💊',
      title: 'Our Products',
      headline: 'Comprehensive Homeopathic Solutions',
      description: 'From reproductive health to digestive care, respiratory support to dairy productivity - we offer specialized formulations for every animal health need.',
      highlights: [
        '🩺 Reproductive Health Solutions',
        '🌱 Digestive & Liver Care',
        '💨 Respiratory Support',
        '💧 Urinary Care',
        '🔥 Fever Management',
        '🛡️ Skin & Disease Management'
      ],
      color: 'from-green-50 to-emerald-50',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5f400f6f4?w=700&h=600&fit=crop'
    },
    {
      id: 3,
      type: 'benefits',
      icon: '⭐',
      title: 'Why Choose Us',
      headline: 'Premium Benefits for Your Animals',
      description: 'Our homeopathic approach delivers natural, safe, and effective solutions without harmful side effects.',
      highlights: [
        '✓ Scientifically formulated medicines',
        '✓ Natural ingredients, no harmful effects',
        '✓ Proven efficacy & safety',
        '✓ Expert veterinary guidance',
        '✓ Trusted by farmers & veterinarians',
        '✓ Affordable premium solutions'
      ],
      color: 'from-purple-50 to-pink-50',
      image: 'https://images.unsplash.com/photo-1578761681033-6461ffad8d80?w=700&h=600&fit=crop'
    },
    {
      id: 4,
      type: 'services',
      icon: '🎯',
      title: 'Our Services',
      headline: 'Complete Animal Healthcare Solutions',
      description: 'Beyond products - we provide expertise, consultation, and support for optimal animal health outcomes.',
      highlights: [
        '🔧 Veterinary consultation services',
        '📚 Training & education programs',
        '🤝 Dealer & distributor partnerships',
        '📞 24/7 customer support',
        '🚚 Fast, reliable delivery',
        '💼 Corporate solutions'
      ],
      color: 'from-blue-50 to-cyan-50',
      image: 'https://images.unsplash.com/photo-1631217239388-7a3b0e84c5cf?w=700&h=600&fit=crop'
    }
  ]

  // Auto-play effect
  useEffect(() => {
    if (!isAutoPlay) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000) // Change slide every 6 seconds

    return () => clearInterval(timer)
  }, [isAutoPlay, slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlay(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlay(false)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
    setIsAutoPlay(false)
  }

  const slide = slides[currentSlide]

  const slideVariants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      {/* Background */}
      <div className={`absolute inset-0 bg-gradient-to-b ${slide.color} -z-10`}></div>

      <div className="container-custom px-4 md:px-8 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              <motion.div variants={itemVariants} className="flex items-center gap-3">
                <span className="text-4xl">{slide.icon}</span>
                <p className="text-primary font-semibold text-lg uppercase tracking-wide">{slide.title}</p>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-3">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark leading-tight">
                  {slide.headline}
                </h1>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-700 leading-relaxed"
              >
                {slide.description}
              </motion.p>

              {/* Stats or Highlights */}
              {slide.type === 'company' ? (
                <motion.div variants={itemVariants} className="grid grid-cols-3 gap-6 pt-4">
                  {slide.stats.map((stat, idx) => (
                    <div key={idx} className="space-y-1 p-4 bg-white/60 rounded-lg backdrop-blur-sm">
                      <p className="text-2xl font-bold text-primary">{stat.value}</p>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                    </div>
                  ))}
                </motion.div>
              ) : (
                <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                  {slide.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-gray-700">
                      <span className="text-lg flex-shrink-0">{highlight.split(' ')[0]}</span>
                      <span className="text-sm">{highlight.slice(2)}</span>
                    </div>
                  ))}
                </motion.div>
              )}

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <button
                  onClick={() => {
                    onContactClick?.()
                    navigate('/contact')
                  }}
                  className="btn-primary flex items-center justify-center gap-2 group"
                >
                  Learn More
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => navigate('/contact')}
                  className="btn-secondary flex items-center justify-center"
                >
                  Contact Us
                </button>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              variants={itemVariants}
              className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={slide.image}
                alt={slide.headline}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Left Side Controls */}
      <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="p-3 bg-white shadow-lg rounded-full hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft size={28} />
        </button>
      </div>

      {/* Center Bottom Dot Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex items-center justify-center gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`h-3 rounded-full transition-all duration-300 ${
              idx === currentSlide
                ? 'bg-primary w-8'
                : 'bg-white/50 hover:bg-white w-3'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Right Side Controls */}
      <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4">
        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="p-3 bg-white shadow-lg rounded-full hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRight size={28} />
        </button>
      </div>

      {/* Slide Counter */}
      <div className="absolute top-24 right-4 md:right-8 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
        <p className="text-sm font-semibold text-primary">
          {currentSlide + 1} / {slides.length}
        </p>
      </div>
    </section>
  )
}

export default Hero
