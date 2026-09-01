'use client';

import { Category } from './category-bar';

interface CategoryDesktopMenuProps {
  categories: Category[];
  activeId: string;
  onSelectCategory: (id: string) => void;
}

export default function CategoryDesktopMenu({
  categories,
  activeId,
  onSelectCategory,
}: CategoryDesktopMenuProps) {
  return (
    <div className="hidden sm:flex w-full items-center justify-between gap-1.5 md:gap-2.5 lg:gap-3 py-1">
      {categories.map((cat) => {
        const isActive = cat.id === activeId;
        return (
          <button
            key={cat.id}
            type="button"
            onClick={() => onSelectCategory(cat.id)}
            className={`flex h-[46px] md:h-[50px] lg:h-[52px] flex-1 items-center justify-center rounded-[12px] md:rounded-[14px] px-2 md:px-3 lg:px-5 text-[13px] md:text-[15px] lg:text-[16px] font-semibold whitespace-nowrap transition-all duration-200 focus:outline-none ${
              isActive
                ? 'bg-gradient-to-r from-orange-gradient-start to-orange-gradient-end text-[#070a0f] shadow-md shadow-[#d77635]/20'
                : 'border border-stroke-primary bg-panel-background text-foreground hover:border-orange-btn-border-color'
            }`}
          >
            {cat.label}
          </button>
        );
      })}
    </div>
  );
}