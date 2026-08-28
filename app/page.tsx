import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
}

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center font-mono scroll-smooth">
      <p>website under construction</p>
    </main>
  );
}
