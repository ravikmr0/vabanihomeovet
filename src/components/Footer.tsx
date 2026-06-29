import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp, Mail, Phone, MapPin, ShieldCheck } from 'lucide-react'

const Footer = ({ onScrollTop }) => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ]

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About Us', path: '/about' },
    { name: 'Why Homeopathy', path: '/why-homeopathy' },
    { name: 'Research', path: '/research-quality' },
    { name: 'Contact', path: '/contact' }
  ]

  const productLinks = [
    { name: 'Dairy Animal Care', path: '/products' },
    { name: 'Poultry Solutions', path: '/products' },
    { name: 'Pet Healthcare', path: '/products' },
    { name: 'Immunity Support', path: '/products' }
  ]

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="section-spacing">
        <div className="container-custom">
          <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-[1.2fr_0.6fr_0.6fr_0.7fr]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-sm"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-slate-700 bg-white/95 shadow-sm">
                  <img src="/logo.png" alt="Vibani Homeo Vet logo" className="h-12 w-12 object-contain" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold tracking-[0.24em] text-white">VIBANI</h3>
                  <p className="text-sm font-semibold text-primary">Homeo Vet</p>
                </div>
              </div>

              <p className="mb-4 text-sm leading-7 text-slate-300">
                Trusted homeopathic wellness solutions for livestock, poultry, and pets. We combine natural care with modern standards to support healthier animal life every day.
              </p>

              <div className="flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-2 text-sm text-primary">
                <ShieldCheck size={16} />
                Quality-driven care for modern animal wellness
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="mb-5 text-lg font-semibold text-white">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-sm text-slate-300 transition-colors hover:text-primary">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="mb-5 text-lg font-semibold text-white">Products</h4>
              <ul className="space-y-3">
                {productLinks.map((product) => (
                  <li key={product.name}>
                    <Link to={product.path} className="text-sm text-slate-300 transition-colors hover:text-primary">
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="mb-5 text-lg font-semibold text-white">Contact Us</h4>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <div className="mt-0.5 flex-shrink-0 text-primary">
                    <Phone size={16} />
                  </div>
                  <a href="tel:+917906410606" className="transition-colors hover:text-primary">
                    +91 7906410606
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-0.5 flex-shrink-0 text-primary">
                    <Mail size={16} />
                  </div>
                  <a href="mailto:Info@vibanihomeovet.com" className="break-all transition-colors hover:text-primary">
                    Info@vibanihomeovet.com
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-0.5 flex-shrink-0 text-primary">
                    <MapPin size={16} />
                  </div>
                  <span className="leading-6">Vibani Homeo Vet., Bajna Cut, Yamuna Expressway, MaharamGarhi, Bajna, Mathura - 281201, U.P., India</span>
                </li>
              </ul>
              <div className="mt-5 flex items-center gap-3">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-300 transition-colors hover:bg-primary hover:text-white"
                      aria-label={social.label}
                    >
                      <IconComponent size={16} />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          </div>

          <div className="mb-8 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-sm text-slate-400"
            >
              © {currentYear} Vibani Homeo Vet. All rights reserved.
            </motion.p>

            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              onClick={onScrollTop}
              className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-300 transition-colors hover:bg-primary hover:text-white"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
