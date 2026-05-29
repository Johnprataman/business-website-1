"use client";
import { useState } from "react";

const links = [
  { href: "#menu", label: "Menu" },
  { href: "#bakes", label: "Daily Bakes" },
  { href: "#order", label: "Pre-Order" },
  { href: "#events", label: "Events" },
  { href: "#find-us", label: "Find Us" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-cream border-b border-espresso/10 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between">
        <a href="#home" className="font-handwritten text-2xl text-espresso font-bold tracking-tight">
          about coffee co.
        </a>

        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-roast hover:text-espresso transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#booking"
            className="bg-espresso text-cream px-5 py-2 rounded-full text-sm font-medium hover:bg-roast transition-colors"
          >
            Book a Table
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-espresso"
          aria-label="Toggle menu"
        >
          {open ? (
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-cream border-t border-espresso/10 px-5 py-4 space-y-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-roast font-medium py-2.5 border-b border-espresso/5"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#booking"
            onClick={() => setOpen(false)}
            className="block bg-espresso text-cream text-center py-3 rounded-full font-medium mt-3"
          >
            Book a Table
          </a>
        </div>
      )}
    </nav>
  );
}
