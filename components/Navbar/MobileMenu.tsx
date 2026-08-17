"use client";

import Navbar from "./Navbar";

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
            transition-[width] ease-in-out
            ${isOpen ? "w-full" : "w-0"}
            ${isAnimating ? "border-l border-gray-700" : "border-0"}
        `}
        style={{
          transitionDuration: `${animationDuration}ms`,
        }}
    >
    
    <main className="flex h-screen flex-col text-3xl pt-24 p-8 space-y-20 text-center whitespace-nowrap overflow-hidden text-ellipsis">

      <Navbar className="flex flex-col space-y-20 text-3xl" onClick={onClose}/>

      <Link href="/contattaci" className="md:hidden block">
        <button className="bg-gradient-to-tr from-orange-300 to-orange-400 text-black font-bold py-2 px-4 rounded-lg">
          Contattaci
        </button>
      </Link>
    </main>

    </div>
  );
}