'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import arrowIcon from '@/public/down-arrow.svg';
import type { Category } from '@/lib/supabase/queries';
import SortButton from './SortButton';

export interface FilterOption {
  slug: string;
  name: string;
}

interface CategoryMenuProps {
  categories: Category[];
  className?: string;
  dateSortOptions: FilterOption[];
}

export const categoryParam = 'category';

export default function CategoryMenu({
  categories,
  className,
  dateSortOptions,
}: CategoryMenuProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Cerca la categoria attiva direttamente dall'URL
  const currentCategory = categories.find(
    (category) => category.slug === searchParams.get(categoryParam)) ?? categories[0];

  // Menu a tendina per mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Aggiorna i parametri dell'URL cliccando sui pulsanti
  const handleSelect = (id: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(categoryParam, id);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });

    setIsOpen(false);
  };

  return (
    <div className={className}>
      {/* Versione Mobile: dropdown */}
      <div ref={dropdownRef} className="relative flex gap-3">
        <button
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="group md:hidden
                     flex items-center justify-between gap-3
                     w-full py-2 px-4
                     rounded-xl border border-stroke-primary 
                     bg-panel-background backdrop-blur-sm transition-colors 
                     hover:border-orange-gradient-start focus:outline-none"
        >
          <span className="text-sm font-semibold text-foreground 
                           transition-colors group-hover:text-orange-gradient-end">
            {currentCategory.name}
          </span>
          <div
            className={`flex items-center justify-center transition-transform duration-300 
                        ${isOpen ? 'rotate-180' : 'group-hover:translate-y-1'}
                      `}
          >
            <Image src={arrowIcon} alt="" width={18} height={22} />
          </div>
        </button>

        {isOpen && (
          <div
            role="listbox"
            className="absolute left-0 right-0 top-full z-30
                       flex flex-col overflow-hidden 
                       mt-2 p-1
                       rounded-2xl border border-stroke-primary 
                       bg-panel-background backdrop-blur-md"
          >
            {categories.map((category) => (
              <button
                key={category.slug}
                type="button"
                role="option"
                aria-selected={category.slug === currentCategory.slug}
                onClick={() => handleSelect(category.slug)}
                className={`flex items-center
                            w-full p-2
                            rounded-xl text-left text-sm font-semibold 
                            transition-colors hover:bg-orange-gradient-start/10 hover:text-orange-gradient-end
                            ${category.slug === currentCategory.slug ? 'text-orange-gradient-end' : 'text-foreground'
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        )}


        {/* Versione Desktop: barra pulsanti */}
        {categories.map((category) => {
          const isActive = category.slug === currentCategory.slug;
          return (
            <button
              key={category.slug}
              type="button"
              aria-pressed={isActive}
              onClick={() => handleSelect(category.slug)}
              className={`hidden md:flex flex-1 min-w-0
                          items-center justify-center
                          h-11 md:h-12 lg:h-14
                          rounded-xl md:rounded-2xl
                          px-2 md:px-3 lg:px-5
                          text-sm md:text-base font-semibold whitespace-nowrap
                          transition-all duration-200 focus:outline-none
                          ${isActive ? 'btn-gradient-orange text-[#070a0f] shadow-md shadow-[#d77635]/20'
                                    : 'border border-stroke-primary bg-panel-background text-foreground hover:border-orange-btn-border-color'
                }`}
            >
              {category.name}
            </button>
          );
        })}

        <SortButton
          dateSortOptions={dateSortOptions}
          classNameButton="flex-1 min-w-0 h-11 md:h-12 lg:h-14 px-2 md:px-3 lg:px-5 rounded-xl md:rounded-2xl"
          className="contents"
        />
      </div>

    </div>
  );
}