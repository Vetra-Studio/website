'use client';

import Image from 'next/image';
import Link from 'next/link';

// Import dell'icona SVG dai tuoi asset (modifica il percorso con quello reale del tuo progetto)
import arrowIcon from '@/public/right-arrow.svg';

interface SlotProps {
  id?: string;
  category: string;
  release: Date;
  title: string;
  description: string;
  slug: string;
}

export default function SlotCard({
  category,
  release,
  title,
  description,
  slug
}: SlotProps) {
  return (
    <article className="group 
                        relative flex w-full flex-col overflow-hidden 
                        rounded-2xl border border-stroke-primary 
                        bg-panel-background/35 p-4 backdrop-blur-md 
                        transition-all duration-300 hover:border-orange-gradient-start/50 
                        hover:shadow-lg hover:shadow-orange-gradient-start/10 md:p-5">
      {/* Container Foto-grid */}
      <div className="relative aspect-[589/423] w-full overflow-hidden 
                      rounded-2xl border border-stroke-primary 
                      bg-panel-background/50">
        <Image
          src={`/${slug}.webp`}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Container Descrizione e Testi */}
      <div className="flex flex-1 flex-col justify-between pt-4 md:pt-5">
        <div className="flex flex-col gap-1.5">
          {/* Tipologia */}
          <span className="text-gradient-orange bg-clip-text 
                           text-base font-bold  md:text-lg"
                           >
            {category}
          </span>
          <span className="text-sm font-normal text-light-gray-text">
            {new Date(release).toLocaleDateString('it-IT', {
              day: '2-digit',
              month: 'long',
              year: 'numeric',
            })}
          </span>

          {/* Nome Azienda / Titolo */}
          <h3 className="text-lg font-normal leading-tight text-foreground 
                         md:text-xl lg:text-2xl">
            {title}
          </h3>

          {/* Descrizione */}
          <p className="mt-1 line-clamp-3 
                        text-sm font-normal leading-relaxed 
                        text-light-gray-text md:text-base">
            {description}
          </p>
        </div>

        {/* Link / CTA */}
        <div className="mt-4 md:mt-5">
          <Link href={`/progetti/${slug}`} className="group/link 
                                       inline-flex items-center gap-3 
                                       focus:outline-none">
            <span className="text-gradient-orange 
                             text-base font-bold md:text-lg">
              Vedi progetto
            </span>

            <Image
              src={arrowIcon}
              alt=""
              width={28}
              height={24}
              className="h-5 w-6 
                         transition-transform duration-300 group-hover/link:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}