import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Informativa sulla privacy di Vetra Studio.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function Privacy() {
  return (
    <main className="flex flex-col items-center justify-center">
      <div>
        <h1 className="text-3xl font-bold">Privacy Policy</h1>
        <p>Privacy policy content coming soon.</p>
      </div>
    </main>
  );
}