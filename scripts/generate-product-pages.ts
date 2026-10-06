import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { PRODUCTS } from '../src/data/products.ts'
import { buildProductSchema } from '../src/seo/seo.ts'

const projectRoot = resolve(process.cwd())
const distRoot = resolve(projectRoot, 'dist')
const indexFile = resolve(distRoot, 'index.html')
const baseHtml = await readFile(indexFile, 'utf8')
const siteUrl = 'https://vibanihomeovet.com'

const escapeHtml = (value: string) => value
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#39;')

const setMeta = (html: string, attribute: 'name' | 'property', key: string, value: string) => {
  const tag = new RegExp(`<meta\\s+${attribute}="${key}"[^>]*>`)
  return html.replace(tag, `<meta ${attribute}="${key}" content="${escapeHtml(value)}" />`)
}

const removeMeta = (html: string, attribute: 'name' | 'property', key: string) =>
  html.replace(new RegExp(`<meta\\s+${attribute}="${key}"[^>]*>`, 'g'), '')

for (const product of PRODUCTS) {
  const title = `${product.name} | Vibani Homeo Vet - ${product.tagline}`
  const description = product.shortDescription || product.tagline
  const canonical = `${siteUrl}/products/${product.slug}`
  const image = product.image ? `${siteUrl}${product.image}` : undefined
  let html = baseHtml.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(title)}</title>`)

  html = setMeta(html, 'name', 'description', description)
  html = setMeta(html, 'name', 'keywords', [product.name, product.hindiName, product.tagline, 'homeopathic veterinary medicine', 'animal healthcare product'].join(', '))
  html = setMeta(html, 'name', 'robots', 'index,follow,max-image-preview:large')
  html = setMeta(html, 'property', 'og:type', 'product')
  html = setMeta(html, 'property', 'og:url', canonical)
  html = setMeta(html, 'property', 'og:title', title)
  html = setMeta(html, 'property', 'og:description', description)
  html = image ? setMeta(html, 'property', 'og:image', image) : removeMeta(html, 'property', 'og:image')
  html = setMeta(html, 'name', 'twitter:title', title)
  html = setMeta(html, 'name', 'twitter:description', description)
  html = image ? setMeta(html, 'name', 'twitter:image', image) : removeMeta(html, 'name', 'twitter:image')
  html = html.replace(/<link rel="canonical" href="[^"]*"\s*\/>/, `<link rel="canonical" href="${canonical}" />`)

  const productImageMarkup = product.image
    ? `<img src="${product.image}" alt="${escapeHtml(`${product.name} veterinary product by Vibani Homeo Vet`)}" />`
    : ''
  const productMarkup = `<main><h1>${escapeHtml(product.name)}</h1>${productImageMarkup}<p>${escapeHtml(description)}</p></main>`
  html = html.replace('<div id="root"></div>', `<div id="root">${productMarkup}</div>`)
  html = html.replace('</head>', `  <script type="application/ld+json">${JSON.stringify(buildProductSchema(product, siteUrl))}</script>\n  </head>`)

  const outputDirectory = resolve(distRoot, 'products', product.slug)
  await mkdir(outputDirectory, { recursive: true })
  await writeFile(resolve(outputDirectory, 'index.html'), html, 'utf8')
}

console.log(`Generated ${PRODUCTS.length} SEO-ready product pages.`)