interface HamburgerButtonProps {
  isOpen: boolean;
  className?: string;
  onClick: () => void;
}

export default function HamburgerButton({
  isOpen,
  className,
  onClick,
}: HamburgerButtonProps) {
  return (
    <button
      onClick={onClick}
      className="relative flex h-10 w-10 items-center justify-center md:hidden {className}"
      aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
      aria-expanded={isOpen}
    >
      <span
        className={`absolute h-0.5 w-6 bg-white transition-transform duration-300 ${
          isOpen ? "rotate-45" : "-translate-y-2"
        }`}
      />

      <span
        className={`absolute h-0.5 w-6 bg-white transition-opacity duration-300 ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      />

      <span
        className={`absolute h-0.5 w-6 bg-white transition-transform duration-300 ${
          isOpen ? "-rotate-45" : "translate-y-2"
        }`}
      />
    </button>
  );
}