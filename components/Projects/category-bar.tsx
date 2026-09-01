'use client';

import React, { useState } from 'react';
import CategoryMobileMenu from './category-mobile-menu';
import CategoryDesktopMenu from './category-desktop-menu';

export interface Category {
  id: string;
  label: string;
}

export const INITIAL_CATEGORIES: Category[] = [
  { id: 'all', label: 'Tutti i progetti' },
  { id: 'corporate', label: 'Siti aziendali' },
  { id: 'ecommerce', label: 'E-Commerce' },
  { id: 'landing', label: 'Landing page' },
  { id: 'blog', label: 'Blog & Megazine' },
  { id: 'app', label: 'Web App' },
];

interface CategoryBarProps {
  categories?: Category[];
  activeId?: string;
  onSelectCategory?: (id: string) => void;
}

export const CategoryBar: React.FC<CategoryBarProps> = ({
  categories = INITIAL_CATEGORIES,
  activeId: externalActiveId,
  onSelectCategory,
}) => {
  const [internalActiveId, setInternalActiveId] = useState<string>('all');
  const activeId = externalActiveId ?? internalActiveId;

  const handleSelect = (id: string) => {
    setInternalActiveId(id);
    onSelectCategory?.(id);
  };

  return (
    <div className="w-full">
      <CategoryMobileMenu
        categories={categories}
        activeId={activeId}
        onSelectCategory={handleSelect}
      />
      <CategoryDesktopMenu
        categories={categories}
        activeId={activeId}
        onSelectCategory={handleSelect}
      />
    </div>
  );
};