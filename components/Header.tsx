"use client";

import { useEffect, useState } from "react";
import Navbar from "./Navbar/Navbar";
import HamburgerButton from "./Navbar/HamburgerButton";
import MobileMenu from "./Navbar/MobileMenu";

import Link from "next/link";

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  let lastScroll = 0;

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;

      if (current > lastScroll && current > 75) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScroll = current;
    };

    window.addEventListener("scroll", onScroll);
    
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <header className={`bg-background sticky
          flex items-center justify-between px-12 border-b border-gray-700 top-0 py-4.25
          transition-transform duration-300 ease-in-out 
          ${hidden ? "-translate-y-full" : "translate-y-0"}
          `}>

      <Link href="/">
        <h1 className="text-3xl font-bold">Vetra Studio</h1>
      </Link>

      <Navbar className="hidden text-lg md:flex space-x-16"
              linkClassName="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full hover:after:origin-left
              after:origin-right after:scale-x-0 after:bg-orange-500 after:transition-transform after:duration-400 hover:after:scale-x-100
              "/>

      <Link href="/">
        <button className="hidden md:block bg-gradient-to-tr from-orange-300 to-orange-400 text-black font-bold py-2 px-4 rounded-lg">
          Contattaci
        </button>
      </Link>

      <HamburgerButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} className="z-50"/>
        
      <MobileMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </header>
  );
}