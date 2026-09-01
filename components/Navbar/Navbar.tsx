'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Servizi', href: '/servizi' },
  { label: 'Progetti', href: '/progetti' },
  { label: 'Chi siamo', href: '/chi-siamo' },
];

interface NavClassNameProps {
  className?: string;
  linkClassName?: string;
  onClick?: () => void;
}

export default function Navbar({ className, linkClassName, onClick }: NavClassNameProps) {
  const pathname = usePathname();

  return (
    <nav>
      <ul className={className}>
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <li key={item.label}>
              <Link
                href={item.href}
                onClick={onClick}
                className={`relative inline-block py-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-orange-gradient-start after:transition-transform after:duration-300 ${
                  isActive
                    ? 'after:scale-x-100 after:origin-left font-semibold text-foreground'
                    : 'after:scale-x-0 after:origin-right hover:after:origin-left hover:after:scale-x-100 text-light-gray-text hover:text-foreground'
                } ${linkClassName || ''}`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}