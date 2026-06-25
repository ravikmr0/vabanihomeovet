import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import About from '../components/About'
import Products from '../components/Products'
import Benefits from '../components/Benefits'
import Research from '../components/Research'
import Industries from '../components/Industries'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'

const HomePage = ({ onContactClick, onViewAllProducts }) => {
  return (
    <>
      <Hero onContactClick={onContactClick} />
      <About />
      <Products onViewAllProducts={onViewAllProducts} />
      <Benefits />
      <Research />
      <Industries />
      <Testimonials />
      <Contact />
    </>
  )
}

export default HomePage
