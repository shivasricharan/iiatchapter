"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#schedule", label: "Schedule" },
  { href: "#pricing", label: "Pricing" },
  { href: "/register", label: "Register", cta: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(13, 13, 13, 0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(201, 162, 39, 0.1)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
            style={{ border: "1px solid rgba(201, 162, 39, 0.5)", background: "rgba(201, 162, 39, 0.1)" }}
          >
            <span className="text-xs font-bold" style={{ color: "#c9a227" }}>IIA</span>
          </div>
          <div className="hidden sm:block">
            <p className="text-xs font-semibold leading-tight" style={{ color: "#c9a227" }}>
              IIA Telangana Chapter
            </p>
            <p className="text-xs leading-tight" style={{ color: "rgba(245, 245, 240, 0.5)" }}>
              Telangana Architects Festival
            </p>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.cta ? (
              <Link key={link.href} href={link.href}>
                <button className="btn-gold px-5 py-2 rounded-full text-sm font-bold">
                  {link.label}
                </button>
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-yellow-400"
                style={{ color: "rgba(245, 245, 240, 0.7)" }}
              >
                {link.label}
              </a>
            )
          )}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ color: "#c9a227" }}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 space-y-4"
          style={{ background: "rgba(13, 13, 13, 0.98)", borderTop: "1px solid rgba(201, 162, 39, 0.1)" }}
        >
          {navLinks.map((link) =>
            link.cta ? (
              <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
                <button className="btn-gold w-full py-3 rounded-xl text-sm font-bold mt-2">
                  {link.label}
                </button>
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="block text-sm font-medium py-2"
                style={{ color: "rgba(245, 245, 240, 0.7)" }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            )
          )}
        </div>
      )}
    </nav>
  );
}
