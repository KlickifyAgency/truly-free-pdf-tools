"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { href: "/compress-pdf", label: "Compress" },
  { href: "/merge-pdf", label: "Merge" },
  { href: "/split-pdf", label: "Split" },
  { href: "/pdf-to-word", label: "PDF to Word" },
  { href: "/remove-pdf-password", label: "Unlock" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header style={{
      background: "#ffffff",
      boxShadow: "0px 1px 0px rgba(74,85,104,0.10)",
      position: "sticky",
      top: 0,
      zIndex: 50,
    }}>
      <style>{`
        .nav-desktop { display: flex; }
        .nav-hamburger { display: none; }
        .nav-mobile-menu { display: none; }
        @media (max-width: 640px) {
          .nav-desktop { display: none; }
          .nav-hamburger { display: flex; }
          .nav-mobile-menu { display: block; }
        }
      `}</style>

      <div style={{
        maxWidth: 900,
        margin: "0 auto",
        padding: "0 24px",
        height: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
          <Image
            src="/logo.png"
            alt="TrulyFree PDF Tools"
            width={180}
            height={48}
            style={{ objectFit: "contain" }}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="nav-desktop" style={{ alignItems: "center", gap: 4 }}>
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                color: "#4a5568",
                fontSize: 13,
                fontWeight: 500,
                textDecoration: "none",
                padding: "6px 10px",
                borderRadius: 6,
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Hamburger button */}
        <button
          className="nav-hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 8,
            display: "none",
            flexDirection: "column",
            gap: 5,
          }}
        >
          <span style={{ display: "block", width: 22, height: 2, background: "#4a5568", borderRadius: 2, transition: "all 0.2s", transform: open ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
          <span style={{ display: "block", width: 22, height: 2, background: "#4a5568", borderRadius: 2, opacity: open ? 0 : 1, transition: "all 0.2s" }} />
          <span style={{ display: "block", width: 22, height: 2, background: "#4a5568", borderRadius: 2, transition: "all 0.2s", transform: open ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="nav-mobile-menu" style={{
          background: "#ffffff",
          borderTop: "1px solid rgba(74,85,104,0.10)",
          padding: "8px 0 16px",
        }}>
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                color: "#4a5568",
                fontSize: 15,
                fontWeight: 500,
                textDecoration: "none",
                padding: "12px 24px",
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
