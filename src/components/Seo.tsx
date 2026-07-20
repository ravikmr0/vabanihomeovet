import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

type SeoProps = {
  title: string
  description: string
  canonical?: string
  keywords?: string[]
  image?: string
  type?: 'website' | 'article' | 'product'
  structuredData?: Record<string, unknown> | Record<string, unknown>[]
}

const ORIGIN = 'https://vibanihomeovet.com'

const Seo = ({ title, description, canonical, keywords = [], image, type = 'website', structuredData }: SeoProps) => {
  const location = useLocation()

  useEffect(() => {
    const pageTitle = title || 'Vibani Homeo Vet'
    const pageDescription = description || 'Natural homeopathic veterinary solutions for livestock, poultry, dairy animals and pets.'
    const pageCanonical = canonical || `${ORIGIN}${location.pathname}`
    const pageImage = image?.startsWith('http') ? image : `${ORIGIN}${image || '/images/heroimages/complete_product_range.png'}`

    document.title = pageTitle

    const setMeta = (selector: string, attribute: 'name' | 'property', value: string) => {
      let element = document.querySelector(`meta[${attribute}="${selector}"]`) as HTMLMetaElement | null
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, selector)
        document.head.appendChild(element)
      }
      element.setAttribute('content', value)
    }

    setMeta('description', 'name', pageDescription)
    setMeta('keywords', 'name', [...new Set(keywords)].join(', '))
    setMeta('robots', 'name', 'index,follow,max-image-preview:large')
    setMeta('og:title', 'property', pageTitle)
    setMeta('og:description', 'property', pageDescription)
    setMeta('og:type', 'property', type)
    setMeta('og:url', 'property', pageCanonical)
    setMeta('og:image', 'property', pageImage)
    setMeta('twitter:card', 'name', 'summary_large_image')
    setMeta('twitter:title', 'name', pageTitle)
    setMeta('twitter:description', 'name', pageDescription)
    setMeta('twitter:image', 'name', pageImage)

    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.setAttribute('href', pageCanonical)

    const existingScript = document.getElementById('app-structured-data')
    if (existingScript) existingScript.remove()

    if (structuredData) {
      const script = document.createElement('script')
      script.id = 'app-structured-data'
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(structuredData)
      document.head.appendChild(script)
    }
  }, [canonical, description, image, keywords, location.pathname, structuredData, title, type])

  return null
}

export default Seo
