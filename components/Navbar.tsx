const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Servizi', href: '#servizi' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Chi siamo', href: '#chi-siamo' },
];

export default function Navbar() {
  return (
    <nav>
      <ul className="flex space-x-8">
        {navItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="transition-colors hover:cursor-pointer hover:underline hover:decoration-orange-500 hover:underline-offset-4"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}