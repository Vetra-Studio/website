const hamburgerButtonLines = {
  generalClassName: 'absolute h-0.5 w-6 bg-foreground transition-transform duration-300',
  lines: [
    { isOpened: 'rotate-45', isClosed: '-translate-y-2' },
    { isOpened: 'opacity-0', isClosed: 'opacity-100' },
    { isOpened: '-rotate-45', isClosed: 'translate-y-2' },
  ],
};

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
      className={`relative flex h-10 w-10 items-center justify-center md:hidden ${className}`}
      aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
      aria-expanded={isOpen}
    >
      {hamburgerButtonLines.lines.map((line, index) => (
        <span
          key={index}
          className={`${hamburgerButtonLines.generalClassName} ${
            isOpen ? line.isOpened : line.isClosed
          }`}
        />
      ))}
    </button>
  );
}