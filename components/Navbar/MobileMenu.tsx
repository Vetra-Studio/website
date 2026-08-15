interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({
  isOpen,
  onClose,
}: MobileMenuProps) {
  return (
    <div
        className={`
            fixed top-0 right-0 z-40
            overflow-hidden
            bg-background
            md:hidden
            transition-[width] duration-500 ease-in-out
            ${isOpen ? "w-full" : "w-0"}
        `}
    >
    
    <main className="flex h-screen flex-col text-3xl pt-24 p-8 space-y-8 text-center">

        <a href="#servizi" onClick={onClose}>
        Servizi
        </a>

        <a href="#progetti" onClick={onClose}>
        Progetti
        </a>

        <a href="#chi-siamo" onClick={onClose}>
        Chi siamo
        </a>

        <a href="#contatti" onClick={onClose}>
        Contatti
        </a>
    </main>

    </div>
  );
}