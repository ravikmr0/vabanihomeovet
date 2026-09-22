export const buildProductSchema = (product: any, origin = 'https://vibanihomeovet.com') => {
  const imageUrl = product?.image?.startsWith('http') ? product.image : `${origin}${product?.image || '/images/heroimages/complete_product_range.png'}`

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product?.name,
    alternateName: product?.hindiName,
    description: product?.fullDescription || product?.shortDescription || '',
    image: [imageUrl],
    brand: {
      '@type': 'Brand',
      name: 'Vibani Homeo Vet'
    },
    category: product?.category || 'Veterinary Homeopathy',
    sku: `VIBANI-${product?.id || 'product'}`,
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Category',
        value: product?.category || 'Veterinary Homeopathy'
      },
      {
        '@type': 'PropertyValue',
        name: 'Presentation',
        value: product?.presentation || ''
      },
      {
        '@type': 'PropertyValue',
        name: 'Dosage',
        value: product?.dosage || ''
      }
    ],
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      url: `${origin}/products/${product?.slug}`
    }
  }
}

export const buildItemListSchema = (products: any[], origin = 'https://vibanihomeovet.com') => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: products.map((product, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: product.name,
    url: `${origin}/products/${product.slug}`
  }))
})

export const buildOrganizationSchema = (origin = 'https://vibanihomeovet.com') => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Vibani Homeo Vet',
  url: origin,
  logo: `${origin}/images/heroimages/complete_product_range.png`,
  description: 'Homeopathic veterinary solutions for livestock, poultry, dairy animals, pets and companion animals.',
  sameAs: [origin]
})

export const buildWebSiteSchema = (origin = 'https://vibanihomeovet.com') => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Vibani Homeo Vet',
  url: origin,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${origin}/products?q={search_term_string}`,
    'query-input': 'required name=search_term_string'
  }
})
