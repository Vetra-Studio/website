import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.vetrastudio.org',
    },
    {
      url: 'https://www.vetrastudio.org/servizi',
    },
    {
      url: 'https://www.vetrastudio.org/chi-siamo',
    }
  ]
}