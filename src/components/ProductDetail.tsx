import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { PRODUCT_CATEGORIES, getProductById, getProductsByCategory } from '../data/products'

const ProductDetail = ({ productId, onBack, onViewProduct }) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = getProductById(parseInt(id || productId, 10))

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <p className="text-2xl text-gray-600">Product not found</p>
      </div>
    )
  }

  const category = PRODUCT_CATEGORIES.find((c) => c.id === product.category)
  const relatedProducts = getProductsByCategory(product.category).filter((p) => p.id !== product.id).slice(0, 3)

  const handleRelatedProductClick = (relatedProductId) => {
    if (onViewProduct) {
      onViewProduct(relatedProductId)
    }
    navigate(`/product/${relatedProductId}`)
  }

  return (
    <section className="min-h-screen bg-slate-50 pt-28 pb-20">
      <div className="container-custom px-4 md:px-8">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 text-slate-600 hover:text-emerald-700 transition mb-8 font-semibold"
        >
          <ArrowLeft size={20} />
          Back to products
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="rounded-[2rem] bg-white p-8 shadow-sm mb-12"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <span className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">
                {category?.name}
              </span>
              <h1 className="mt-4 text-4xl font-bold text-dark md:text-5xl">{product.name}</h1>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-700">{product.tagline}</p>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[1.7fr_0.95fr]">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="rounded-[2rem] bg-white p-6 shadow-sm"
            >
              <div className="aspect-[3/2] overflow-hidden rounded-[1.75rem] bg-slate-50 p-6 flex flex-col items-center justify-center">
                <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain" loading="lazy" />
                <p className="mt-4 text-center text-sm font-semibold text-slate-900">{product.name}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="rounded-[2rem] bg-white p-8 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-dark mb-4">Product overview</h2>
              <p className="text-slate-700 leading-relaxed">{product.fullDescription}</p>
              <p className="mt-4 text-slate-600 leading-relaxed">{product.shortDescription}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="grid gap-6 lg:grid-cols-2"
            >
              <div className="rounded-[2rem] bg-white p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-dark mb-4">Key benefits</h3>
                <ul className="space-y-3 text-slate-700 list-disc list-inside">
                  {product.benefits.map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[2rem] bg-white p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-dark mb-4">Indications</h3>
                <ul className="space-y-3 text-slate-700 list-disc list-inside">
                  {product.indications.map((indication, idx) => (
                    <li key={idx}>{indication}</li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="rounded-[2rem] bg-white p-8 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-dark mb-6">Specifications</h3>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Dosage</p>
                  <p className="mt-2 text-slate-700">{product.dosage}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Presentation</p>
                  <p className="mt-2 text-slate-700">{Array.isArray(product.presentation) ? product.presentation.join(', ') : product.presentation}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Storage</p>
                  <p className="mt-2 text-slate-700">{product.storage}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Ingredients</p>
                  <p className="mt-2 text-slate-700">{product.ingredients}</p>
                </div>
              </div>
            </motion.div>
          </div>

          <aside className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="sticky top-28 rounded-[2rem] bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-dark mb-4">Quick facts</h3>
              <div className="space-y-5 text-slate-700">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Category</p>
                  <p className="mt-2 font-semibold text-slate-900">{category?.name}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Presentation</p>
                  <p className="mt-2 font-semibold text-slate-900">{Array.isArray(product.presentation) ? product.presentation.join(', ') : product.presentation}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Dosage</p>
                  <p className="mt-2 text-slate-700">{product.dosage}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Storage</p>
                  <p className="mt-2 text-slate-700">{product.storage}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="rounded-[2rem] bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-dark mb-4">Why this formula</h3>
              <p className="text-slate-700 leading-relaxed">A practical veterinary solution with clear use, strong indications, and trusted ingredients for livestock and poultry wellness.</p>
            </motion.div>
          </aside>
        </div>

        {relatedProducts.length > 0 && (
          <div className="pt-12">
            <h3 className="text-2xl font-bold text-dark mb-8">Related products</h3>
            <div className="grid gap-6 md:grid-cols-3">
              {relatedProducts.map((relatedProduct) => (
                <motion.div
                  key={relatedProduct.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.1 }}
                  className="rounded-[1.75rem] bg-white p-5 shadow-sm"
                >
                  <div className="mb-4 h-36 overflow-hidden rounded-2xl bg-slate-100 p-4 flex items-center justify-center">
                    <img src={relatedProduct.image} alt={relatedProduct.name} className="max-h-full w-auto object-contain" />
                  </div>
                  <h4 className="text-lg font-semibold text-dark mb-2">{relatedProduct.name}</h4>
                  <p className="text-sm leading-6 text-slate-600 mb-4">{relatedProduct.tagline}</p>
                  <button
                    type="button"
                    onClick={() => handleRelatedProductClick(relatedProduct.id)}
                    className="text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition"
                  >
                    View details →
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default ProductDetail
