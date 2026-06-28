import React, { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { PRODUCTS } from '../data/products'

const Products = ({ onViewAllProducts }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const slideInterval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % PRODUCTS.length)
    }, 4200)

    return () => window.clearInterval(slideInterval)
  }, [])

  const visibleProducts = useMemo(() => {
    const nextProducts = []
    for (let i = 0; i < 3; i += 1) {
      nextProducts.push(PRODUCTS[(activeIndex + i) % PRODUCTS.length])
    }
    return nextProducts
  }, [activeIndex])

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + PRODUCTS.length) % PRODUCTS.length)
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % PRODUCTS.length)
  }

  return (
    <section id="products" className="section-spacing bg-gradient-to-b from-slate-50 via-white to-emerald-50">
      <div className="container-custom">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-emerald-700 mb-4">Premium product carousel</p>
          <h2 className="text-4xl font-bold text-dark md:text-5xl leading-tight">
            Discover our best-selling veterinary formulas
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
            Browse an elegant auto-sliding product gallery, designed for clear product discovery and effortless browsing.
          </p>
        </div>

        <div className="relative mx-auto max-w-[1480px] overflow-hidden rounded-[2rem] bg-white/90 shadow-[0_30px_90px_-40px_rgba(15,23,42,0.12)]">
          <div className="absolute left-2 top-1/2 z-30 -translate-y-1/2 sm:left-4">
            <button
              type="button"
              onClick={handlePrev}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-700 shadow-lg shadow-slate-200/40 transition hover:bg-white hover:text-emerald-700"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </button>
          </div>

          <div className="overflow-hidden px-1 py-4 sm:px-4">
            <motion.div className="flex gap-6 transition-transform duration-700 ease-out">
              {visibleProducts.map((product) => (
                <motion.article
                  key={product.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55 }}
                  className="min-w-[92%] sm:min-w-[45%] lg:min-w-[31%] overflow-hidden rounded-[1.75rem] bg-white shadow-[0_24px_80px_-30px_rgba(15,23,42,0.12)]"
                >
                  <div className="relative aspect-[3/2] overflow-hidden rounded-t-[1.75rem] bg-slate-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-contain p-4 transition duration-500 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 to-transparent p-4 text-white">
                      <p className="text-xs uppercase tracking-[0.24em] text-emerald-200">
                        {product.category.replace(/\b\w/g, (char) => char.toUpperCase())}
                      </p>
                      <h3 className="mt-2 text-2xl font-bold leading-tight">{product.name}</h3>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col space-y-4 p-6">
                    <p className="text-sm font-semibold text-emerald-700">{product.hindiName}</p>
                    <p className="text-base font-semibold text-dark">{product.tagline}</p>
                    <p className="text-sm leading-6 text-slate-600 line-clamp-2">{product.shortDescription}</p>
                    <div className="flex flex-wrap items-center gap-2 pt-2">
                      <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                        {product.presentation}
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>

          <div className="absolute right-2 top-1/2 z-30 -translate-y-1/2 sm:right-4">
            <button
              type="button"
              onClick={handleNext}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-700 shadow-lg shadow-slate-200/40 transition hover:bg-white hover:text-emerald-700"
              aria-label="Next slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={onViewAllProducts}
            className="inline-flex items-center gap-3 rounded-full bg-emerald-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-700"
          >
            View all 18 products
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Products
