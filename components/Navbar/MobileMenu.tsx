"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({
  isOpen,
  onClose,
}: MobileMenuProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const animationDuration = 1500; // Duration of the animation in milliseconds
  useEffect(() => {
    setIsAnimating(true);

    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, animationDuration);

    return () => clearTimeout(timer);
  }, [isOpen]);
  return (
    <div
        className={`
            fixed top-0 right-0 z-40
            overflow-hidden
            bg-background
            md:hidden
            transition-[width] duration-${animationDuration} ease-in-out
            ${isOpen ? "w-full" : "w-0"}
            ${isAnimating ? "border-l border-gray-700" : "border-0"}
        `}
    >
    
    <main className="flex h-screen flex-col text-3xl pt-24 p-8 space-y-20 text-center whitespace-nowrap overflow-hidden text-ellipsis">

      <a href="#servizi" onClick={onClose}>
      Servizi
      </a>

      <a href="#progetti" onClick={onClose}>
      Progetti
      </a>

      <a href="#chi-siamo" onClick={onClose}>
      Chi siamo
      </a>

      <Link href="/" className="md:hidden block">
        <button className="bg-gradient-to-tr from-orange-300 to-orange-400 text-black font-bold py-2 px-4 rounded-lg">
          Contattaci
        </button>
      </Link>
    </main>

    </div>
  );
}