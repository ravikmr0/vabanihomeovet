import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Search } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

const Header = ({ scrollY, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    setIsScrolled(scrollY > 40)
  }, [scrollY])

  const navItems = [
    { name: 'Home', page: 'home', path: '/' },
    { name: 'About Us', page: 'about', path: '/about' },
    { name: 'Products', page: 'products', path: '/products' },
    { name: 'Why Homeopathy', page: 'why-homeopathy', path: '/why-homeopathy' },
    { name: 'Research', page: 'research-quality', path: '/research-quality' },
    { name: 'Contact', page: 'contact', path: '/contact' }
  ]

  const handleNavClick = (path) => {
    navigate(path)
    setIsOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 z-50 w-full border-b transition-all duration-300 ${
        isScrolled
          ? 'border-slate-200/80 bg-white/85 shadow-[0_10px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl'
          : 'border-transparent bg-white/90 shadow-sm'
      }`}
    >
      <div className="container-custom py-2">
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="flex flex-shrink-0 items-center gap-2 rounded-full transition hover:opacity-90"
            aria-label="Go to home page"
          >
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <img src="/logo.png" alt="Vibani Homeo Vet logo" className="h-9 w-9 object-contain" />
            </div>
            <div className="hidden sm:block">
              <p className="text-[0.95rem] font-semibold tracking-[0.24em] text-slate-900">VIBANI</p>
              <p className="text-sm font-semibold text-primary">Homeo Vet</p>
            </div>
          </button>

          <div className="ml-2 min-w-0 flex-1 sm:ml-3">
            <label className="flex w-full items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 shadow-sm transition-all duration-200 focus-within:border-primary focus-within:bg-white focus-within:ring-2 focus-within:ring-primary/10 md:max-w-[280px] lg:ml-4 lg:max-w-[480px]">
              <Search size={15} className="flex-shrink-0 text-slate-400" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-full min-w-0 border-0 bg-transparent text-sm outline-none placeholder:text-slate-400"
                aria-label="Search products"
              />
            </label>
          </div>

          <nav className="ml-auto hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  currentPage === item.page
                    ? 'text-primary'
                    : 'text-slate-700 hover:text-primary'
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                {currentPage === item.page && (
                  <span className="absolute inset-x-2 bottom-1.5 h-0.5 rounded-full bg-primary" />
                )}
              </Link>
            ))}
          </nav>

          <button
            className="ml-auto flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-primary hover:text-primary lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden lg:hidden"
        >
          <div className="mt-3 space-y-2 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-medium transition-all duration-200 ${
                  currentPage === item.page ? 'bg-primary/10 text-primary' : 'text-slate-700 hover:bg-slate-50 hover:text-primary'
                }`}
              >
                <span>{item.name}</span>
                <span className="text-slate-400">›</span>
              </Link>
            ))}
            <button
              onClick={() => navigate('/products')}
              className="mt-2 w-full rounded-full bg-primary px-4 py-3 text-sm font-semibold text-white transition hover:bg-primary/90"
            >
              Shop Products
            </button>
          </div>
        </motion.nav>
      </div>
    </motion.header>
  )
}

export default Header
