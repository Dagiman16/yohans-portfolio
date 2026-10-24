"use client";
import { useState, useEffect } from "react";

const links = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Letters", href: "#recommendations" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="#hero" className="font-black text-xl text-[#1a1a1a] tracking-tight flex-shrink-0">
          Y<span className="text-[#F5C518]">.</span>Alebachew
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-medium text-gray-600 hover:text-[#1a1a1a] transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Download CV */}
        <a
          href="/cv/Yohans Alebachew Professional CV Resume A4.pdf"
          download
          className="hidden md:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-bold text-[#1a1a1a] bg-[#F5C518] hover:bg-[#E6B800] transition-colors"
        >
          ⬇ Download CV
        </a>

        {/* Mobile right side: Hamburger only */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#1a1a1a] text-white flex-shrink-0"
          >
            {open ? (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <line x1="2" y1="2" x2="16" y2="16" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                <line x1="16" y1="2" x2="2" y2="16" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
                <line x1="0" y1="2" x2="20" y2="2" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                <line x1="0" y1="8" x2="20" y2="8" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                <line x1="0" y1="14" x2="20" y2="14" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-3 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 px-4 rounded-xl text-gray-700 font-semibold text-sm hover:bg-[#F5C518]/10 hover:text-[#1a1a1a] transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/cv/Yohans Alebachew Professional CV Resume A4.pdf"
              download
              className="mt-2 py-3 text-center rounded-xl text-sm font-bold bg-[#F5C518] text-[#1a1a1a] hover:bg-[#E6B800] transition-colors"
            >
              ⬇ Download CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
