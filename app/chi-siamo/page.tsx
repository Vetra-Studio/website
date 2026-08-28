import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chi Siamo',
  description: 'Scopri Vetra Studio, il nostro approccio e il team che trasforma le idee in esperienze digitali.',
  alternates: {
    canonical: '/chi-siamo',
  },
}

export default function AboutUs() {
  return (
    <main className="flex flex-col items-center justify-center font-mono scroll-smooth">
      <p>website under construction</p>
    </main>
  );
}
