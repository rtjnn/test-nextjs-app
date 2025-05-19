"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 5);

      const sections = ["home", "about", "services", "portfolio", "contact"];
      let closestSection = "home";
      let minDistance = Infinity;

      for (let id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const distance = Math.abs(rect.top);
          const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

          if (isVisible && distance < minDistance) {
            minDistance = distance;
            closestSection = id;
          }
        }
      }

      setActiveSection(closestSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (section: string) =>
    `relative block py-2 px-3 rounded-sm md:p-0 transition-colors duration-300 ${
      activeSection === section
        ? "text-purple-600 dark:text-purple-500 font-semibold"
        : "text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500"
    }`;

  return (
    <nav
      className={`fixed w-full z-10 top-0 left-0 transition-all duration-300 bg-[#131022] ${
        isScrolled ? "shadow-lg opacity-100" : "opacity-95"
      }`}
    >
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        {/* Logo */}
        <div className="flex items-center space-x-6">
          <Image
            src="/logo_transparent.png"
            alt="Logo"
            className="w-8 h-8 rounded-full object-cover bg-black"
            width={32}
            height={32}
          />
          <Link
            href="#"
            className="text-2xl font-semibold text-white whitespace-nowrap"
          >
            Khifrandev
          </Link>
        </div>

        {/* Hamburger button mobile */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {/* Simple hamburger icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Menu Desktop */}
        <div className="hidden md:flex">
          <ul className="flex space-x-7 font-medium text-white">
            {["home", "about", "services", "portfolio", "contact"].map(
              (section) => (
                <li key={section}>
                  <Link href={`#${section}`} className={linkClass(section)}>
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="md:hidden bg-[#131022]">
          <ul className="flex flex-col space-y-3 p-4 font-medium text-white">
            {["home", "about", "services", "portfolio", "contact"].map(
              (section) => (
                <li key={section}>
                  <Link
                    href={`#${section}`}
                    className={linkClass(section)}
                    onClick={() => setMenuOpen(false)} // Tutup menu saat klik
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
