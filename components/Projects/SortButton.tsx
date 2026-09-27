'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import arrowIcon from '@/public/down-arrow.svg';
import { FilterOption } from './CategoryMenu';

interface SortButtonProps {
  dateSortOptions: FilterOption[];
  className?: string;
  spanClassName?: string;
}

export const sortParam = 'sort';

export default function SortButton({
  dateSortOptions,
  className,
  spanClassName
}: SortButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const currentSlug =
    searchParams.get(sortParam) ?? dateSortOptions[0]?.slug;

  const currentOption =
    dateSortOptions.find((option) => option.slug === currentSlug) ??
    dateSortOptions[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelect = (option: FilterOption) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set(sortParam, option.slug);

    router.push(`${pathname}?${params.toString()}`);
    setIsOpen(false);
  };

  return (
    <div
      ref={dropdownRef}
      className={`group relative ${className ?? ''}`}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <span className={spanClassName}>
        {currentOption.name}
      </span>

      <Image
        src={arrowIcon}
        alt=""
        width={18}
        height={22}
        className={`absolute right-3 top-1/2 -translate-y-1/2
                    transition-transform duration-300
                    ${isOpen ? 'rotate-180' : ''}`}
      />

      {isOpen && (
        <div
          role="listbox"
          onClick={(event) => event.stopPropagation()}
          className="absolute left-0 right-0 top-full z-40 mt-2
                    flex flex-col overflow-hidden
                    rounded-xl border border-stroke-primary
                    bg-panel-background p-1
                    shadow-xl backdrop-blur-md
                    md:rounded-2xl md:p-1.5"
        >
          {dateSortOptions.map((option) => {
            const isActive = option.slug === currentOption.slug;

            return (
              <button
                key={option.slug}
                type="button"
                role="option"
                aria-selected={isActive}
                onClick={() => handleSelect(option)}
                className={`flex h-9 w-full items-center
                            rounded-lg px-3
                            text-left text-sm font-semibold whitespace-nowrap
                            transition-colors
                            hover:bg-orange-gradient-start/10
                            hover:text-orange-gradient-end
                            md:h-10 md:rounded-xl
                            lg:h-11 lg:text-base
                            ${
                              isActive
                                ? 'text-orange-gradient-end'
                                : 'text-foreground'
                            }`}
              >
                {option.name}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}