import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Informativa sui cookie utilizzati da Vetra Studio.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function CookiePolicy() {
  return (
    <main className="flex flex-col items-center justify-center">
      <div>
        <h1 className="text-3xl font-bold">Cookie Policy</h1>
        <p>Cookie policy content coming soon.</p>
      </div>
    </main>
  );
}