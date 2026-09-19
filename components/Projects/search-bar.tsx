'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';

interface SearchBarProps {
    paramKey?: string;
    placeholder?: string;
}

export default function SearchBar({
    paramKey = 'q',
    placeholder = 'Cerca...',
}: SearchBarProps) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [value, setValue] = useState(searchParams.get(paramKey) ?? '');

    useEffect(() => {
        const params = new URLSearchParams(searchParams.toString());
        if (value) {
            params.set(paramKey, value);
        } else {
            params.delete(paramKey);
        }
        router.replace(`${pathname}?${params.toString()}`, { scroll: false });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return (
        <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={placeholder}
            className="h-6 lg:h-7 w-full 
                       sm:flex-1 
                       rounded-xl md:rounded-2xl border border-stroke-primary 
                       mb-4 md:mb-5 lg:mb-6
                       px-3 md:px-4 lg:px-5 
                       bg-panel-background backdrop-blur-sm transition-colors 
                       text-sm md:text-base font-semibold text-foreground placeholder:text-foreground/50 
                       focus:border-orange-gradient-start focus:outline-none "
        />
    );
}