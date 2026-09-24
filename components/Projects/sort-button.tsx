'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import arrowIcon from '@/public/down-arrow.svg';
import { FilterOption } from './types';

interface SortButtonProps {
  dateSortOptions: FilterOption[];
}

export const sortParam = 'sort';

export default function SortButton({
  dateSortOptions,
}: SortButtonProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // Cerca l'opzione selezionata
  const currentOption = dateSortOptions.find(
    (dateSortOption) => dateSortOption.slug === searchParams.get(sortParam)) ?? dateSortOptions[0];

  // Menu a tendina
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

  // Aggiunta parametro nell'url
  const handleSelect = (dateSortOption: FilterOption) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(sortParam, dateSortOption.slug);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });

    setIsOpen(false);
  };

  // Contenuto
  return (
    <div ref={dropdownRef} className="relative w-full">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="group flex items-center justify-between
                   h-11 md:h-12 lg:h-14 w-full  
                   gap-2 md:gap-3 px-3 md:px-4 lg:px-5
                   rounded-xl md:rounded-2xl border border-stroke-primary bg-panel-background  backdrop-blur-sm
                   transition-colors hover:border-orange-gradient-start focus:outline-none"
      >
        <span className="text-sm md:text-base font-semibold whitespace-nowrap 
                         text-foreground transition-colors group-hover:text-orange-gradient-end">
          {currentOption.name}
        </span>
        <div className={`flex shrink-0 items-center justify-center 
                         transition-transform duration-300 ${isOpen ? 'rotate-180' : 'group-hover:translate-y-1'}`}>
          <Image src={arrowIcon} alt="" width={18} height={22} />
        </div>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 z-50 
                        flex flex-col overflow-hidden 
                        rounded-xl md:rounded-2xl border border-stroke-primary bg-panel-background 
                        p-1 md:p-1.5 w-full
                        shadow-xl backdrop-blur-md">
          {dateSortOptions.map((dateSortOption) => (
            <button
              key={dateSortOption.slug}
              type="button"
              onClick={() => handleSelect(dateSortOption)}
              className={`flex items-center text-left
                          h-9 md:h-10 lg:h-11 w-full px-3
                          rounded-lg md:rounded-xl 
                          text-sm lg:text-base font-semibold whitespace-nowrap 
                          transition-colors hover:bg-orange-gradient-start/10 hover:text-orange-gradient-end 
                          ${currentOption.slug === dateSortOption.slug ? 'text-orange-gradient-end' : 'text-foreground'
                }`}
            >
              {dateSortOption.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}