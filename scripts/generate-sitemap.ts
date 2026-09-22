import { writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { PRODUCTS } from '../src/data/products.ts'

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const sitemapFile = resolve(projectRoot, 'public/sitemap.xml')
const siteUrl = 'https://vibanihomeovet.com'

const staticUrls = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/products', changefreq: 'weekly', priority: '0.9' },
  { path: '/contact', changefreq: 'monthly', priority: '0.7' },
]

const productUrls = PRODUCTS.map((product) => ({
  path: `/products/${product.slug}`,
  changefreq: 'monthly',
  priority: '0.8',
}))

const urlEntries = [...staticUrls, ...productUrls]
  .map(({ path, changefreq, priority }) => `  <url>\n    <loc>${siteUrl}${path}</loc>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`)
  .join('\n')

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>\n`

await writeFile(sitemapFile, sitemap, 'utf8')
console.log(`Generated ${sitemapFile} with ${urlEntries ? urlEntries.split('\n  <url>').length : 0} URLs.`)
