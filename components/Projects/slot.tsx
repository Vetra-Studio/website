'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Import dell'icona SVG dai tuoi asset (modifica il percorso con quello reale del tuo progetto)
import arrowIcon from '@/public/right-arrow.svg'; 

export interface SlotProps {
  id?: string;
  category: string;
  title: string;
  description: string;
  imageSrc: string;
  href: string;
}

export default function SlotCard({
  category,
  title,
  description,
  imageSrc,
  href,
}: SlotProps) {
  return (
    <article className="group relative flex w-full flex-col overflow-hidden rounded-[18px] border border-stroke-primary bg-panel-background/35 p-4 backdrop-blur-md transition-all duration-300 hover:border-orange-gradient-start/50 hover:shadow-lg hover:shadow-orange-gradient-start/10 md:p-5">
        {/* Container Foto-grid */}
        <div className="relative aspect-[589/423] w-full overflow-hidden rounded-[14px] border border-stroke-primary bg-panel-background/50">
            <Image
            src={imageSrc}
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
            <span className="bg-gradient-to-b from-orange-gradient-start to-orange-gradient-end bg-clip-text text-[15px] font-bold text-transparent md:text-[17px] lg:text-[18px]">
                {category}
            </span>

            {/* Nome Azienda / Titolo */}
            <h3 className="text-[18px] font-normal leading-tight text-foreground md:text-[20px] lg:text-[22px]">
                {title}
            </h3>

            {/* Descrizione */}
            <p className="mt-0.5 line-clamp-3 text-[14px] font-normal leading-relaxed text-light-gray-text md:text-[15px] lg:text-[16px]">
                {description}
            </p>
            </div>

            {/* Link / CTA */}
            <div className="mt-4 md:mt-5">
            <Link
                href={href}
                className="group/link inline-flex items-center gap-2.5 focus:outline-none"
            >
                <span className="bg-gradient-to-b from-orange-gradient-start to-orange-gradient-end bg-clip-text text-[15px] font-bold text-transparent md:text-[17px] lg:text-[18px]">
                Vedi progetto
                </span>

                {/* Icona Freccia */}
                <Image
                src={arrowIcon}
                alt="Freccia vedi progetto"
                width={28}
                height={24}
                className="h-5 w-6 transition-transform duration-300 group-hover/link:translate-x-1 md:h-5 md:w-6"
                />
            </Link>
            </div>
        </div>
    </article>
  );
}