import React from 'react'
import { motion } from 'framer-motion'
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react'

const Footer = ({ onScrollTop }) => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <footer className="bg-dark text-white">
      {/* Main Footer */}
      <div className="section-spacing">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">H</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg">CAPITAL-H</h3>
                  <p className="text-xs text-gray-400">Vibani Homeo Vet</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Natural Homeopathic Solutions for Animal Health & Wellness
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Products */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold text-lg mb-6">Products</h4>
              <ul className="space-y-3">
                {[
                  'Dairy Animal Care',
                  'Poultry Solutions',
                  'Pet Healthcare',
                  'Immunity Support'
                ].map((product) => (
                  <li key={product}>
                    <a href="#products" className="text-gray-400 hover:text-primary transition-colors text-sm">
                      {product}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold text-lg mb-6">Contact Us</h4>
              <ul className="space-y-3">
                <li>
                  <a href="tel:+917906410606" className="text-gray-400 hover:text-primary transition-colors text-sm">
                    +91 7906410606
                  </a>
                </li>
                <li>
                  <a href="mailto:Info@vibanihomeovet.com" className="text-gray-400 hover:text-primary transition-colors text-sm break-all">
                    Info@vibanihomeovet.com
                  </a>
                </li>
                <li className="text-gray-400 text-sm">
                  Mathura, UP<br />
                  India - 281201
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gray-700 mb-8"></div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm"
            >
              © {currentYear} CAPITAL-H | Vibani Homeo Vet. All Rights Reserved.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 bg-gray-800 hover:bg-primary rounded-lg transition-colors"
                    aria-label={social.label}
                  >
                    <IconComponent size={18} />
                  </motion.a>
                )
              })}
            </motion.div>

            {/* Scroll to Top */}
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              onClick={onScrollTop}
              className="p-2 bg-gray-800 hover:bg-primary rounded-lg transition-colors"
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
