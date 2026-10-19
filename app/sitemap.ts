import { SITE } from '@/lib/site'
import type { MetadataRoute } from 'next'

const PAGES = ['', '/chi-siamo', '/progetti']

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map((p) => ({ url: `${SITE.url}${p}` }))
}