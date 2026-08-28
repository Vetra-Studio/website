import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Vetra Studio',
    short_name: 'Vetra',
    description: 'Creiamo Esperienze Digitali di Successo.',
    lang: "it",
    start_url: '/',
    scope: "/",
    display: 'standalone',
    background_color: '#0a0b10',
    theme_color: '#0a0b10',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/vetra-icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}