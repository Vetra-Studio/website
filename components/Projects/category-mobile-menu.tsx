'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import arrowIcon from '@/public/down-arrow.svg';
import { Category } from './category-bar';

interface CategoryMobileMenuProps {
  categories: Category[];
  activeId: string;
  onSelectCategory: (id: string) => void;
}

export default function CategoryMobileMenu({
  categories,
  activeId,
  onSelectCategory,
}: CategoryMobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedCategory =
    categories.find((cat) => cat.id === activeId) || categories[0];

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

  const handleSelect = (id: string) => {
    onSelectCategory(id);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative w-full sm:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="group relative flex h-[52px] w-full items-center justify-between gap-3 rounded-[14px] border border-stroke-primary bg-panel-background px-4 backdrop-blur-sm transition-all hover:border-orange-gradient-start focus:outline-none"
      >
        <span className="text-[16px] font-semibold text-foreground transition-colors group-hover:text-orange-gradient-end">
          {selectedCategory.label}
        </span>

        <div
          className={`flex items-center justify-center transition-transform duration-300 ${
            isOpen ? 'rotate-180' : 'group-hover:translate-y-1'
          }`}
        >
          <Image
            src={arrowIcon}
            alt="Seleziona categoria"
            width={18}
            height={22}
            className="h-[22px] w-[18px]"
          />
        </div>
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 top-[58px] z-50 flex flex-col overflow-hidden rounded-[14px] border border-stroke-primary bg-panel-background p-1.5 shadow-xl backdrop-blur-md">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => handleSelect(cat.id)}
              className={`flex h-[42px] w-full items-center rounded-[10px] px-3 text-left text-[15px] font-semibold transition-colors hover:bg-orange-gradient-start/10 hover:text-orange-gradient-end ${
                cat.id === activeId
                  ? 'text-orange-gradient-end'
                  : 'text-foreground'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}