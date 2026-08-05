"use client";

import { useEffect, useState } from "react";
import Navbar from "./Navbar";

export default function Header() {
  const [hidden, setHidden] = useState(false);
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
    console.log("scroll event listener added");
    console.log("lastScroll:", lastScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <header className={`bg-background sticky
          flex items-center justify-between px-12 border-b border-gray-700 top-0 h-[75px]
          transition-transform duration-300 ease-in-out 
          ${hidden ? "-translate-y-full" : "translate-y-0"}
          `}>
      <h1 className="text-3xl font-bold">Vetra Studio</h1>
      <Navbar className="flex space-x-8" />
      <button className="bg-gradient-to-tr from-orange-300 to-orange-400 text-black font-bold py-4 px-8 rounded-lg text-lg">
        Contattaci
      </button>
    </header>
  );
}