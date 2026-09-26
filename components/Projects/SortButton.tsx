'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import arrowIcon from '@/public/down-arrow.svg';
import { FilterOption } from './CategoryMenu';

interface SortButtonProps {
  dateSortOptions: FilterOption[];
  className?: string;
  classNameButton?: string;
}

export const sortParam = 'sort';

export default function SortButton({
  dateSortOptions,
  className,
  classNameButton,
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
    <div ref={dropdownRef} className={className}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`${classNameButton} 
                    group relative grid place-items-center
                    border border-stroke-primary bg-panel-background
                    transition-colors
                    hover:border-orange-gradient-start
                    focus:outline-none`}
      >
        <span
          className="text-sm font-semibold text-foreground
                    transition-colors group-hover:text-orange-gradient-end
                    md:text-base whitespace-nowrap"
        >
          {currentOption.name}
        </span>

        <div
          className={`absolute right-3 top-1/2
                      -translate-y-1/2
                      transition-transform duration-300
                      ${isOpen ? 'rotate-180' : 'group-hover:translate-y-1'}`}
        >
          <Image src={arrowIcon} alt="" width={18} height={22} />
        </div>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full z-40 mt-2
                        flex w-full flex-col overflow-hidden
                        rounded-xl md:rounded-2xl
                        border border-stroke-primary
                        bg-panel-background p-1 md:p-1.5
                        shadow-xl backdrop-blur-md"
        >
          {dateSortOptions.map((dateSortOption) => (
            <button
              key={dateSortOption.slug}
              type="button"
              onClick={() => handleSelect(dateSortOption)}
              className={`flex h-9 w-full items-center
                          rounded-lg px-3 text-left
                          text-sm font-semibold whitespace-nowrap
                          transition-colors
                          hover:bg-orange-gradient-start/10
                          hover:text-orange-gradient-end
                          md:h-10 md:rounded-xl
                          lg:h-11 lg:text-base
                          ${
                            currentOption.slug === dateSortOption.slug
                              ? 'text-orange-gradient-end'
                              : 'text-foreground'
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