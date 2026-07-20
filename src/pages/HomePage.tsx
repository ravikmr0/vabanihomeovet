import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Products from '../components/Products'
import Seo from '../components/Seo'
import { buildOrganizationSchema, buildWebSiteSchema } from '../seo/seo'

const HomePage = ({ onContactClick, onViewAllProducts }) => {
  const structuredData = [buildOrganizationSchema(), buildWebSiteSchema()]

  return (
    <>
      <Seo
        title="Vibani Homeo Vet | Homeopathic Veterinary Products for Livestock, Poultry & Pets"
        description="Discover trusted homeopathic veterinary solutions for livestock, poultry, dairy animals, pets and companion animals from Vibani Homeo Vet."
        keywords={['homeopathic veterinary products','animal healthcare','livestock wellness','poultry supplements','pet wellness']}
        structuredData={structuredData}
      />
      <Hero onContactClick={onContactClick} />
      <About />
      <Products onViewAllProducts={onViewAllProducts} />
    </>
  )
}

export default HomePage
