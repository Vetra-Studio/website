'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import arrowIcon from '@/public/down-arrow.svg';

interface CategoryOption {
  id: string;
  label: string;
}

interface CategoryMenuProps {
  categories: CategoryOption[];
  onSelectCategory?: (id: string) => void;
}

export default function CategoryMenu({
  categories,
  onSelectCategory,
}: CategoryMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  // 1. Legge la categoria attiva direttamente dall'URL (o imposta la prima di default)
  const activeId = searchParams.get('category') ?? categories[0]?.id;
  const activeCategory = categories.find((cat) => cat.id === activeId) ?? categories[0];

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

  // 2. Aggiorna i parametri dell'URL al click
  const handleSelect = (id: string) => {
    setIsOpen(false);

    const params = new URLSearchParams(searchParams.toString());
    params.set('category', id);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });

    onSelectCategory?.(id);
  };

  return (
    <div className="w-full">
      {/* Versione Mobile: dropdown */}
      <div ref={dropdownRef} className="relative w-full md:hidden">
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="group 
                     flex items-center justify-between gap-3
                     w-full py-2 px-4
                     rounded-xl border border-stroke-primary 
                     bg-panel-background backdrop-blur-sm transition-colors 
                     hover:border-orange-gradient-start focus:outline-none"
        >
          <span className="text-sm md:text-base font-semibold text-foreground 
                           transition-colors group-hover:text-orange-gradient-end">
            {activeCategory?.label}
          </span>
          <div
            className={`flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180' : 'group-hover:translate-y-1'
              }`}
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
                key={category.id}
                type="button"
                role="option"
                aria-selected={category.id === activeId}
                onClick={() => handleSelect(category.id)}
                className={`flex items-center
                            w-full p-2
                            rounded-xl text-left text-sm font-semibold 
                            transition-colors hover:bg-orange-gradient-start/10 hover:text-orange-gradient-end
                            ${category.id === activeId ? 'text-orange-gradient-end' : 'text-foreground'
                  }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Versione Desktop: barra pulsanti */}
      <div className="hidden md:flex 
                      w-full items-center justify-between 
                      gap-3">
        {categories.map((category) => {
          const isActive = category.id === activeId;
          return (
            <button
              key={category.id}
              type="button"
              aria-pressed={isActive}
              onClick={() => handleSelect(category.id)}
              className={`flex items-center justify-center
                          h-11 md:h-12 lg:h-14 flex-1 
                          rounded-xl md:rounded-2xl px-2 md:px-3 lg:px-5 
                          text-sm md:text-base font-semibold whitespace-nowrap 
                          transition-all duration-200 focus:outline-none ${isActive
                ? 'btn-gradient-orange text-[#070a0f] shadow-md shadow-[#d77635]/20'
                : 'border border-stroke-primary bg-panel-background text-foreground hover:border-orange-btn-border-color'
                }`}
            >
              {category.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}