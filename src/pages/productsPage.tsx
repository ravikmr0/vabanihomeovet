import React from 'react'
import ProductListing from '../components/ProductListing'
import Seo from '../components/Seo'
import { buildOrganizationSchema, buildWebSiteSchema, buildItemListSchema } from '../seo/seo'
import { PRODUCTS } from '../data/products'

const ProductsPage = ({ onProductClick }) => {
  const structuredData = [buildOrganizationSchema(), buildWebSiteSchema(), buildItemListSchema(PRODUCTS)]

  return (
    <>
      <Seo
        title="Animal Healthcare Products | Vibani Homeo Vet Product Catalog"
        description="Browse the complete Vibani Homeo Vet product catalog for reproductive care, digestive support, respiratory wellness, skin care, urinary care and dairy productivity."
        keywords={['vibani products','veterinary homeopathy catalog','animal health products','livestock products','poultry medicine']}
        structuredData={structuredData}
      />
      <ProductListing onProductClick={onProductClick} />
    </>
  )
}

export default ProductsPage
