import type { Metadata, Viewport } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { SITE } from '@/lib/site'

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0b10' },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),

  title: {
    default: `${SITE.name} — Realizzazione siti web`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  category: 'technology',

  openGraph: {
    title: SITE.homeTitle,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        alt: SITE.name,
      },
    ],
    locale: SITE.locale,
    type: 'website',
  },

  icons: {
    icon: [
      { url: '/vetra-icon.svg' },
      { url: '/vetra-icon-dark.svg', media: '(prefers-color-scheme: dark)' },
    ],
    apple: '/vetra-icon.svg',
  },

  twitter: {
    card: 'summary_large_image',
    title: SITE.homeTitle,
    description: SITE.description,
    creator: '@Vetrastudio_',
    images: [SITE.ogImage],
  },

}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/vetra-icon.svg`,
  description: 'Creiamo Esperienze Digitali di Successo.',
  email: SITE.emails.info,
  telephone: SITE.phone,
  address: { '@type': 'PostalAddress', addressLocality: SITE.locality, addressRegion: SITE.province, addressCountry: 'IT' },
  areaServed: { '@type': 'AdministrativeArea', name: SITE.region },
  contactPoint: [
    { '@type': 'ContactPoint', contactType: 'sales', email: SITE.emails.info, availableLanguage: 'it' },
    { '@type': 'ContactPoint', contactType: 'customer support', email: SITE.emails.help, availableLanguage: 'it' },
  ],
  sameAs: ['https://www.instagram.com/vetrastudio_social', 'https://x.com/Vetrastudio_'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
            }}
          />
      </head>
      
      <body className="min-h-screen grid grid-rows-[auto_1fr_auto]">
        <Header />

        {children}
        
        <Footer />
      </body>
    </html>
  );
}
