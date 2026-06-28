import React from 'react'
import ProductListing from '../components/ProductListing'

const ProductsPage = ({ onProductClick }) => {
  return <ProductListing onProductClick={onProductClick} />
}

export default ProductsPage
