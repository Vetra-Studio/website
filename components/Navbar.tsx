import Link from 'next/link'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Servizi', href: '/#servizi' },
  { label: 'Portfolio', href: '/#portfolio' },
  { label: 'Chi siamo', href: '/#chi-siamo' },
];

interface NavClassNameProps {
  className?: string;
  linkClassName?: string;
}

export default function Navbar({ className, linkClassName }: NavClassNameProps) {
  return (
    <nav>
      <ul className={`${className}`}>
        {navItems.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className={`${linkClassName}`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}