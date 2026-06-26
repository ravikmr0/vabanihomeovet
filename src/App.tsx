import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import FeaturedProducts from './components/FeaturedProducts'
import Benefits from './components/Benefits'
import Research from './components/Research'
import Industries from './components/Industries'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProductListing from './components/ProductListing'
import ProductDetail from './components/ProductDetail'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import WhyHomeopathyPage from './pages/WhyHomeopathyPage'
import ResearchQualityPage from './pages/ResearchQualityPage'
import ContactPage from './pages/ContactPage'

function AppContent() {
  const [scrollY, setScrollY] = useState(0)
  const [selectedProductId, setSelectedProductId] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleContactClick = () => {
    const contactSection = document.querySelector('#contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleViewProduct = (productId) => {
    setSelectedProductId(productId)
  }

  const handleBackFromProduct = () => {
    window.history.back()
  }

  const getCurrentPage = () => {
    const path = location.pathname
    if (path === '/') return 'home'
    if (path === '/about') return 'about'
    if (path === '/products') return 'products'
    if (path === '/why-homeopathy') return 'why-homeopathy'
    if (path === '/research-quality') return 'research-quality'
    if (path === '/contact') return 'contact'
    if (path.startsWith('/product/')) return 'product-detail'
    return 'home'
  }

  return (
    <>
      <Header scrollY={scrollY} currentPage={getCurrentPage()} />
      <Routes>
        <Route path="/" element={<HomePage onContactClick={handleContactClick} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={
          <main className="font-inter">
            <ProductListing onProductClick={handleViewProduct} />
          </main>
        } />
        <Route path="/product/:id" element={
          <main className="font-inter">
            <ProductDetail productId={selectedProductId} onBack={handleBackFromProduct} onViewProduct={handleViewProduct} />
            <Contact />
          </main>
        } />
        <Route path="/why-homeopathy" element={<WhyHomeopathyPage />} />
        <Route path="/research-quality" element={<ResearchQualityPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer onScrollTop={handleScrollTop} />
    </>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
