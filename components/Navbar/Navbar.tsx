import Link from 'next/link'

const navItems = [
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
  return (
    <nav>
      <ul className={`${className}`}>
        {navItems.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className={`${linkClassName}`}
              onClick={onClick}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}