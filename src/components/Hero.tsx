import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type Slide = {
  id: number
  eyebrow: string
  title: string
  description: string
  bullets: string[]
  stats?: { value: string; label: string }[]
  image: string
}

const slides: Slide[] = [
  {
    id: 1,
    eyebrow: 'Veterinary wellness',
    title: 'Natural care for healthier animals and stronger farms.',
    description: 'Science-guided homeopathic solutions created to support vitality, recovery, and everyday wellness.',
    bullets: ['Trusted by veterinarians', 'Gentle everyday support', 'Proven farm use'],
    stats: [
      { value: '500+', label: 'Formulations' },
      { value: '1K+', label: 'Active users' },
      { value: '99%', label: 'Client satisfaction' }
    ],
    image: '/images/heroimages/veterinary_wellness.png'
  },
  {
    id: 2,
    eyebrow: 'Complete product range',
    title: 'Targeted solutions for every stage of animal health.',
    description: 'From digestive support to respiratory and skin care, our range is designed for practical results.',
    bullets: ['Reproductive support', 'Digestive care', 'Respiratory relief'],
    image: '/images/heroimages/complete_product_range.png'
  },
  {
    id: 3,
    eyebrow: 'Why professionals choose us',
    title: 'Simple, safe, and dependable support for daily care.',
    description: 'Gentle formulations backed by expert guidance and trusted by professionals across the field.',
    bullets: ['Natural ingredients', 'Expert veterinary input', 'Reliable quality'],
    image: '/images/heroimages/why_professionals.png'
  },
  {
    id: 4,
    eyebrow: 'End-to-end guidance',
    title: 'Expert support that goes beyond the product itself.',
    description: 'Consultation, education, and dependable delivery designed to help farms and practices thrive.',
    bullets: ['Consultation services', 'Training programs', 'Fast delivery'],
    image: '/images/heroimages/guidance.png'
  }
]

const Hero = ({ onContactClick }: { onContactClick?: () => void }) => {
  const navigate = useNavigate()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return

    const timer = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)

    return () => window.clearInterval(timer)
  }, [isAutoPlay])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlay(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlay(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlay(false)
  }

  const slide = slides[currentSlide]

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[85vh] overflow-hidden bg-slate-950 pt-20 text-white"
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      <div className="absolute inset-0 -z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.image}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="absolute inset-0"
          >
            <img src={slide.image} alt={slide.title} className="h-full w-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/20 via-slate-950/10 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.16),_transparent_35%)]" />
            <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-slate-950/80 via-slate-950/50 to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>


      <div className="absolute left-4 top-1/2 z-30 flex -translate-y-1/2 sm:left-6 lg:left-8">
        <button
          onClick={prevSlide}
          className="rounded-full border border-white/20 bg-white/10 p-2 text-white backdrop-blur transition hover:bg-white/20 sm:p-3"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>
      </div>

      <div className="absolute right-4 top-1/2 z-30 flex -translate-y-1/2 sm:right-6 lg:right-8">
        <button
          onClick={nextSlide}
          className="rounded-full border border-white/20 bg-white/10 p-2 text-white backdrop-blur transition hover:bg-white/20 sm:p-3"
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="relative z-10 flex h-full w-full items-end justify-start">
        <div className="w-full max-w-3xl px-4 pb-10 sm:px-6 sm:pb-12 lg:px-8">
          <div className="p-4 md:p-6 lg:p-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">{slide.eyebrow}</p>
            <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-6xl">
              {slide.title}
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-100 sm:text-base">
              {slide.description}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2 sm:gap-3">
              {slide.bullets.map((bullet) => (
                <li key={bullet} className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-sm text-white">
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 items-center justify-center gap-2 sm:bottom-8">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-8 bg-emerald-400' : 'w-2.5 bg-white/60 hover:bg-white'}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      <div className="absolute right-3 top-24 z-30 rounded-full bg-white/90 px-3 py-2 text-sm font-semibold text-slate-800 shadow-lg backdrop-blur sm:right-4 sm:px-4 lg:right-6">
        <span>{currentSlide + 1}</span>/<span>{slides.length}</span>
      </div>
    </section>
  )
}

export default Hero
