"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about",    label: "About" },
  { href: "#guests",   label: "Guests" },
  { href: "#schedule", label: "Schedule" },
  { href: "#pricing",  label: "Pricing" },
  { href: "#pay-qr",   label: "Pay via QR" },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const navStyle: React.CSSProperties = {
    position:       "fixed",
    top:            0,
    left:           0,
    right:          0,
    zIndex:         100,
    transition:     "background 0.3s, border-color 0.3s",
    background:     scrolled ? "rgba(15,32,96,0.96)" : "transparent",
    backdropFilter: scrolled ? "blur(14px)"        : "none",
    borderBottom:   scrolled ? "1px solid rgba(201,162,39,0.12)" : "1px solid transparent",
  };

  return (
    <nav style={navStyle}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.75rem", height: 72, display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        {/* Brand */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.875rem", textDecoration: "none" }}>
          <Image
            src="/iia-tc-seal.png"
            alt="The IIA Telangana Chapter"
            width={52} height={52}
            style={{ width: 50, height: 50, objectFit: "contain", filter: "drop-shadow(0 0 6px rgba(201,162,39,0.3))" }}
          />
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.25 }}>
            <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "#c9a227", letterSpacing: "0.03em" }}>
              The IIA Telangana Chapter
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <div style={{ display: "flex", alignItems: "center", gap: "2.25rem" }} className="hide-mobile">
          {links.map(l => (
            <a key={l.href} href={l.href} style={{ fontSize: "0.875rem", fontWeight: 500, color: "rgba(240,237,230,0.65)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#c9a227")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(240,237,230,0.65)")}
            >
              {l.label}
            </a>
          ))}
          <Link href="/register">
            <button className="btn-primary" style={{ padding: "0.6rem 1.4rem", fontSize: "0.83rem" }}>
              Register
            </button>
          </Link>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.45, paddingLeft: "0.75rem", borderLeft: "1px solid rgba(201,162,39,0.25)" }}>
            <span style={{ fontSize: "0.65rem", color: "rgba(240,237,230,0.4)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.1rem" }}>Contact</span>
            <a href="tel:+919550345867" style={{ fontSize: "0.75rem", color: "#c9a227", textDecoration: "none", fontWeight: 600, lineHeight: 1.4 }}>95503 45867</a>
            <a href="tel:+919849015811" style={{ fontSize: "0.75rem", color: "#c9a227", textDecoration: "none", fontWeight: 600, lineHeight: 1.4 }}>98490 15811</a>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          className="show-mobile"
          onClick={() => setMenuOpen(v => !v)}
          style={{ background: "none", border: "none", cursor: "pointer", color: "#c9a227", padding: "0.5rem" }}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div style={{
          borderTop: "1px solid rgba(201,162,39,0.12)",
          background: "rgba(15,32,96,0.99)",
          backdropFilter: "blur(16px)",
          padding: "1.25rem 1.75rem 1.75rem",
          display: "flex", flexDirection: "column", gap: "0.25rem"
        }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
              style={{ padding: "0.875rem 0", fontSize: "1rem", fontWeight: 500, color: "rgba(240,237,230,0.7)", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
            >
              {l.label}
            </a>
          ))}
          <Link href="/register" onClick={() => setMenuOpen(false)} style={{ marginTop: "1rem" }}>
            <button className="btn-primary" style={{ width: "100%", justifyContent: "center", fontSize: "0.95rem" }}>
              Register Now
            </button>
          </Link>
          <div style={{ marginTop: "0.75rem", paddingTop: "0.75rem", borderTop: "1px solid rgba(201,162,39,0.15)" }}>
            <p style={{ fontSize: "0.65rem", color: "rgba(240,237,230,0.4)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.4rem" }}>Contact</p>
            <a href="tel:+919550345867" style={{ display: "block", fontSize: "0.9rem", color: "#c9a227", textDecoration: "none", fontWeight: 600, marginBottom: "0.2rem" }}>+91 95503 45867</a>
            <a href="tel:+919849015811" style={{ display: "block", fontSize: "0.9rem", color: "#c9a227", textDecoration: "none", fontWeight: 600 }}>+91 98490 15811</a>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 767px) {
          .hide-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 768px) {
          .hide-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
