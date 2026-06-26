import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Stethoscope } from 'lucide-react'

const About = () => {
  const highlights = [
    'Evidence-based veterinary formulations',
    'Natural support with dependable quality',
    'Trusted by veterinarians and progressive farms',
    'Practical solutions for pets, poultry, and dairy care'
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="about" className="section-spacing bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-primary">About us</p>
          <h2 className="mb-4 text-4xl font-bold text-dark md:text-5xl">
            Elevated animal wellness with a trusted homeopathic approach
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-600">
            Vibani Homeo Vet combines careful formulation, veterinary awareness, and practical support to help animals thrive in everyday care.
          </p>
          <div className="mx-auto mt-6 h-1 w-20 bg-gradient-to-r from-primary to-secondary"></div>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="soft-card p-8 sm:p-10">
              <div className="mb-4 inline-flex rounded-full bg-primary/10 p-3 text-primary">
                <Stethoscope size={24} />
              </div>
              <p className="text-lg leading-8 text-gray-700">
                We are committed to delivering high-quality homeopathic veterinary solutions that support recovery, comfort, and long-term wellbeing across livestock, poultry, dairy animals, and companion pets.
              </p>
              <p className="mt-4 leading-8 text-gray-600">
                With a focus on quality, safety, and accessible care, our mission is to make dependable animal health support easier for professionals and families to trust.
              </p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-3 sm:grid-cols-2"
            >
              {highlights.map((highlight, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm"
                >
                  <CheckCircle className="mt-0.5 flex-shrink-0 text-primary" size={20} />
                  <span className="font-medium text-gray-700">{highlight}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-slate-200 shadow-[0_30px_70px_-30px_rgba(15,23,42,0.35)]"
          >
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop"
              alt="Professional veterinary care"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 rounded-[1.25rem] border border-white/40 bg-white/90 p-5 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Why professionals trust us</p>
              <p className="mt-2 text-lg font-semibold text-slate-900">Consistent quality, dependable support, and a clear commitment to animal wellbeing.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
