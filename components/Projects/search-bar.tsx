'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';

export default function SearchBar() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const paramKey = 'q';
    const [value, setValue] = useState(searchParams.get(paramKey) ?? '');

    useEffect(() => {
        const timeout = setTimeout(() => {
            const params = new URLSearchParams(searchParams.toString());
            if (value) {
                params.set(paramKey, value);
            } else {
                params.delete(paramKey);
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
            className="w-full
                       rounded-xl border border-stroke-primary 
                       mb-4 py-2 px-4
                       bg-panel-background backdrop-blur-sm transition-colors 
                       text-sm lg:text-base font-semibold text-foreground placeholder:text-foreground/50 
                       focus:border-orange-gradient-start focus:outline-none "
        />
    );
}