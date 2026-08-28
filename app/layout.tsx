import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.vetrastudio.org'),

  title: {
    default: 'Vetra Studio — Realizzazione siti web',
    template: '%s | Vetra Studio',
  },
  description: 'Creiamo Esperienze Digitali di Successo. Realizziamo siti web, e-commerce e applicazioni web su misura per aziende e professionisti.',
  category: 'technology',

  openGraph: {
    title: 'Vetra Studio',
    description: 'Creiamo Esperienze Digitali di Successo.',
    url: 'https://www.vetrastudio.org',
    siteName: 'Vetra Studio',
    images: [
      {
        url: '/og-image.png',
        width: 1731,
        height: 909,
        alt: 'Vetra Studio',
      },
    ],
    locale: 'it_IT',
    type: 'website',
  },

  icons: {
    icon: [
      { url: '/vetra-icon.svg' },
      new URL('/vetra-icon.svg', 'https://www.vetrastudio.org'),
      { url: '/vetra-icon-dark.svg', media: '(prefers-color-scheme: dark)' },
    ],
    apple: '/vetra-icon.svg',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Vetra Studio — Realizzazione siti web',
    description: 'Creiamo Esperienze Digitali di Successo.',
    images: ['/og-image.png'],
  },

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className="min-h-screen grid grid-rows-[auto_1fr_auto]">
        <Header />

        {children}
        
        <Footer />
      </body>
    </html>
  );
}
