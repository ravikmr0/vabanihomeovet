import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Phone, Search } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

const Header = ({ scrollY, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    setIsScrolled(scrollY > 50)
  }, [scrollY])

  const navItems = [
    { name: 'Home', page: 'home', path: '/' },
    { name: 'About Us', page: 'about', path: '/about' },
    { name: 'Products', page: 'products', path: '/products' },
    { name: 'Why Homeopathy', page: 'why-homeopathy', path: '/why-homeopathy' },
    { name: 'Research & Quality', page: 'research-quality', path: '/research-quality' },
    { name: 'Contact', page: 'contact', path: '/contact' }
  ]

  const handleNavClick = (e, path, page) => {
    e.preventDefault()
    navigate(path)
    setIsOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white bg-opacity-95'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between px-4 md:px-8 py-4">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">H</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-dark">CAPITAL-H</h1>
              <p className="text-xs text-primary">Vibani Homeo Vet</p>
            </div>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="hidden md:flex items-center"
          >
            <div className="relative w-64">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              />
              <Search size={18} className="absolute left-3 top-2.5 text-gray-400" />
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item, idx) => (
              <motion.a
                key={item.name}
                href="#"
                onClick={(e) => handleNavClick(e, item.path, item.page)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 * idx }}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  currentPage === item.page
                    ? 'text-primary font-bold'
                    : 'text-gray-700 hover:text-primary'
                }`}
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* Call Button - Removed */}

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden border-t border-gray-200"
        >
          <div className="px-4 py-4 space-y-4">
            {/* Mobile Search Bar */}
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              />
              <Search size={18} className="absolute left-3 top-2.5 text-gray-400" />
            </div>

            {navItems.map((item) => (
              <a
                key={item.name}
                href="#"
                onClick={(e) => handleNavClick(e, item.path, item.page)}
                className={`block px-4 py-2 transition-colors ${
                  currentPage === item.page
                    ? 'text-primary font-bold'
                    : 'text-gray-700 hover:text-primary'
                }`}
              >
                {item.name}
              </a>
            ))}
            <a
              href="tel:+917906410606"
              className="block btn-primary text-center"
            >
              Call Now
            </a>
          </div>
        </motion.nav>
      </div>
    </motion.header>
  )
}

export default Header
