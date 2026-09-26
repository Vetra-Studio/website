'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';

export const searchParam = 'q';

export default function SearchBar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Legge il valore del parametro
  const [value, setValue] = useState(searchParams.get(searchParam) ?? '');

  // Aggiunta parametro nell'url dopo 300ms
  useEffect(() => {
    const timeout = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(searchParam, value);
      } else {
        params.delete(searchParam);
      }
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }, 300);

    return () => clearTimeout(timeout);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Cerca..."
      className="mb-4 w-full
                rounded-xl border border-stroke-primary
                bg-panel-background px-4 py-2
                text-sm font-semibold text-foreground
                placeholder:text-foreground/50
                backdrop-blur-sm transition-colors
                focus:border-orange-gradient-start focus:outline-none
                lg:text-base"
    />
  );
}