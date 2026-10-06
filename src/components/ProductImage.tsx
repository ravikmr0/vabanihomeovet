import { useEffect, useState } from 'react'

type ProductImageProps = {
  productName: string
  src?: string
  className?: string
  loading?: 'eager' | 'lazy'
}

const ProductImage = ({ productName, src, className = '', loading = 'lazy' }: ProductImageProps) => {
  const [isUnavailable, setIsUnavailable] = useState(!src)

  useEffect(() => {
    setIsUnavailable(!src)
  }, [src])

  if (isUnavailable) {
    return (
      <div
        className={`flex h-full w-full items-center justify-center bg-slate-100 p-6 text-center text-sm font-medium text-slate-500 ${className}`}
        role="img"
        aria-label={`Product image unavailable: Vibani Homeo Vet ${productName}`}
      >
        Product image unavailable
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={`Vibani Homeo Vet ${productName}`}
      width={1215}
      height={1215}
      className={className}
      loading={loading}
      onError={() => {
        if (import.meta.env.DEV) {
          console.warn(`Unable to load product image for "${productName}": ${src}`)
        }
        setIsUnavailable(true)
      }}
    />
  )
}

export default ProductImage
