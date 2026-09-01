'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';

import arrowIcon from '@/public/down-arrow.svg';

export interface SortOption {
  id: string;
  label: string;
}

const DEFAULT_OPTIONS: SortOption[] = [
  { id: 'recent', label: 'Più recenti' },
  { id: 'expensive', label: 'Più costosi' },
  { id: 'cheapest', label: 'Meno costosi' },
  { id: 'complex', label: 'Più complessi' },
  { id: 'popular', label: 'Più popolari' },
];

interface RecentFilterProps {
  options?: SortOption[];
  defaultSelectedId?: string;
  onSelect?: (option: SortOption) => void;
}

export default function RecentFilter({
  options = DEFAULT_OPTIONS,
  defaultSelectedId = 'recent',
  onSelect,
}: RecentFilterProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentSortId = searchParams.get('sort') || defaultSelectedId;
  const selectedOption =
    options.find((opt) => opt.id === currentSortId) || options[0];

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
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option: SortOption) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('sort', option.id);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });

    setIsOpen(false);
    onSelect?.(option);
  };

  return (
    <div ref={dropdownRef} className="relative w-full sm:w-auto sm:shrink-0">
      {/* Pulsante Principale */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="group relative flex h-[46px] md:h-[50px] lg:h-[52px] w-full items-center justify-between gap-2.5 md:gap-3 rounded-[12px] md:rounded-[14px] border border-stroke-primary bg-panel-background px-3.5 md:px-4 lg:px-5 backdrop-blur-sm transition-all hover:border-orange-gradient-start focus:outline-none"
      >
        <span className="text-[13px] md:text-[15px] lg:text-[16px] font-semibold whitespace-nowrap text-foreground transition-colors group-hover:text-orange-gradient-end">
          {selectedOption.label}
        </span>

        {/* Icona Freccia */}
        <div
          className={`flex shrink-0 items-center justify-center transition-transform duration-300 ${
            isOpen ? 'rotate-180' : 'group-hover:translate-y-1'
          }`}
        >
          <Image
            src={arrowIcon}
            alt="Icona di ordinamento"
            width={18}
            height={22}
            className="h-[18px] w-[14px] md:h-[20px] md:w-[16px] lg:h-[22px] lg:w-[18px]"
          />
        </div>
      </button>

      {/* Menu a comparsa */}
      {isOpen && (
        <div className="absolute right-0 top-[52px] md:top-[56px] lg:top-[58px] z-50 flex w-full min-w-[180px] md:min-w-[200px] lg:min-w-[220px] flex-col overflow-hidden rounded-[12px] md:rounded-[14px] border border-stroke-primary bg-panel-background p-1 md:p-1.5 shadow-xl backdrop-blur-md">
          {options.map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => handleSelect(option)}
              className={`flex h-[38px] md:h-[40px] lg:h-[42px] w-full items-center rounded-[8px] md:rounded-[10px] px-3 text-left text-[13px] md:text-[14px] lg:text-[15px] font-semibold whitespace-nowrap transition-colors hover:bg-orange-gradient-start/10 hover:text-orange-gradient-end ${
                selectedOption.id === option.id
                  ? 'text-orange-gradient-end'
                  : 'text-foreground'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}