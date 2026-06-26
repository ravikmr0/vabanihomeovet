import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Products from '../components/Products'

const HomePage = ({ onContactClick, onViewAllProducts }) => {
  return (
    <>
      <Hero onContactClick={onContactClick} />
      <About />
      <Products onViewAllProducts={onViewAllProducts} />
    </>
  )
}

export default HomePage
