import type { ReactNode } from 'react';
import Link from 'next/link';
import { MoveLeft } from 'lucide-react';

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}

interface LegalSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export function LegalSection({
  title,
  children,
  className = 'flex flex-col gap-2',
}: LegalSectionProps) {
  return (
    <section className={className}>
      <h2 className="text-lg font-bold text-foreground md:text-xl">{title}</h2>
      {children}
    </section>
  );
}

export default function LegalPageLayout({
  title,
  lastUpdated,
  children,
}: LegalPageLayoutProps) {
  return (
    <main className="mx-auto w-full max-w-4xl py-10 md:py-16">
      <article className="flex flex-col gap-8 p-6 md:p-10">
        <header className="border-b border-stroke-primary/50 pb-6">
          <h1 className="bg-gradient-to-b from-orange-gradient-start to-orange-gradient-end bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
            {title}
          </h1>
          <p className="mt-2 text-xs text-light-gray-text md:text-sm">
            Ultimo aggiornamento: {lastUpdated}
          </p>
        </header>

        <div className="flex flex-col gap-6 text-sm leading-relaxed text-light-gray-text md:text-base">
          {children}
        </div>

        <div className="pt-6">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-semibold text-orange-gradient-start hover:underline"
          >
            <MoveLeft className="mr-2 h-4 w-4" /> Torna alla Home
          </Link>
        </div>
      </article>
    </main>
  );
}
