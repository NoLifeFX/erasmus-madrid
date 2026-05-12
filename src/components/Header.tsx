"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/articles?cat=logement", label: "Logement" },
  { href: "/articles?cat=banque", label: "Banque" },
  { href: "/articles?cat=sim", label: "SIM" },
  { href: "/articles?cat=assurance", label: "Assurance" },
  { href: "/articles?cat=bons-plans", label: "Bons plans" },
  { href: "/articles?cat=quartiers", label: "Quartiers" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="text-2xl" aria-hidden="true">
              🇪🇸
            </span>
            <span className="font-bold text-base sm:text-lg text-ink">
              Erasmus<span className="text-brand"> Madrid</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-5" aria-label="Navigation principale">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-600 hover:text-brand transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/quartiers"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-gray-600 hover:text-brand transition-colors"
            >
              Carte 🗺️
            </Link>
            <Link
              href="/quiz"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-gray-600 hover:text-brand transition-colors"
            >
              Quiz 🎯
            </Link>
            <Link
              href="/articles"
              className="hidden sm:inline-flex items-center bg-brand text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-brand-dark transition-colors"
            >
              Tous les guides
            </Link>
            <button
              className="lg:hidden p-2 text-ink"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={menuOpen}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav className="lg:hidden pb-4 border-t border-gray-100 pt-3" aria-label="Menu mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2.5 text-gray-700 hover:text-brand font-medium text-sm"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/quartiers"
              className="block py-2.5 text-gray-700 hover:text-brand font-medium text-sm"
              onClick={() => setMenuOpen(false)}
            >
              Carte 🗺️
            </Link>
            <Link
              href="/quiz"
              className="block py-2.5 text-gray-700 hover:text-brand font-medium text-sm"
              onClick={() => setMenuOpen(false)}
            >
              Quiz 🎯
            </Link>
            <Link
              href="/articles"
              className="block mt-3 bg-brand text-white text-center px-4 py-2.5 rounded-lg text-sm font-semibold"
              onClick={() => setMenuOpen(false)}
            >
              Tous les guides
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
