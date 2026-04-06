"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

// Static data — no user input, no XSS surface here
const links = [
  { href: "#inicio",   label: "Início" },
  { href: "#sobre",    label: "Sobre" },
  { href: "#projetos", label: "Projetos" },
  { href: "#galeria",  label: "Galeria" },
  { href: "#contato",  label: "Contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true }); // passive for perf
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const textColor = scrolled ? "#1a2e35" : "white";

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      backgroundColor: scrolled ? "white" : "transparent",
      boxShadow: scrolled ? "0 2px 24px rgba(0,0,0,0.09)" : "none",
      transition: "all 0.3s",
    }}>
      <div style={{
        maxWidth: 1152, margin: "0 auto",
        padding: scrolled ? "10px 40px" : "18px 40px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        transition: "padding 0.3s",
      }}>

        {/* Logo — maior e com animação suave */}
        <a href="#inicio" style={{ display: "flex", alignItems: "center", textDecoration: "none", flexShrink: 0 }}>
          <div style={{
            position: "relative",
            width: scrolled ? 64 : 80,
            height: scrolled ? 74 : 92,
            transition: "width 0.3s, height 0.3s",
            filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.15))",
          }}>
            <Image src="/images/logo-viver.png" alt="SAFS Viver+" fill style={{ objectFit: "contain" }} priority />
          </div>
        </a>

        {/* Desktop — lg breakpoint para não duplicar com hamburger */}
        <ul style={{ gap: 36, listStyle: "none", alignItems: "center", margin: 0, padding: 0 }}
          className="hidden lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="nav-a" style={{ color: textColor }}>{l.label}</a>
            </li>
          ))}
          <li>
            <a href="#doacao" style={{
              background: "#e02020", color: "white", fontWeight: 800,
              padding: "11px 26px", borderRadius: 999, textDecoration: "none",
              fontSize: 14, whiteSpace: "nowrap", letterSpacing: "0.01em",
              boxShadow: "0 4px 14px rgba(224,32,32,0.35)",
              transition: "background 0.2s, box-shadow 0.2s",
            }}>
              Faça uma Doação
            </a>
          </li>
        </ul>

        {/* Hamburger — só aparece abaixo de lg */}
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          style={{ background: "none", border: "none", cursor: "pointer", padding: 8, flexDirection: "column", gap: 5 }}
          className="flex lg:hidden"
        >
          {[0, 1, 2].map((i) => (
            <span key={i} style={{ display: "block", width: 24, height: 2, background: textColor, borderRadius: 2, transition: "background 0.2s" }} />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: "white", borderTop: "1px solid #f0f0f0", padding: "8px 28px 24px" }}
          role="menu">
          {links.map((l) => (
            <a key={l.href} href={l.href} role="menuitem"
              onClick={() => setOpen(false)}
              style={{ display: "block", padding: "14px 0", fontWeight: 700, color: "#1a2e35", textDecoration: "none", borderBottom: "1px solid #f5f5f5", fontSize: 15 }}>
              {l.label}
            </a>
          ))}
          <a href="#doacao" role="menuitem" onClick={() => setOpen(false)}
            style={{ display: "block", marginTop: 18, textAlign: "center", background: "#e02020", color: "white", fontWeight: 800, padding: "14px", borderRadius: 999, textDecoration: "none", fontSize: 15 }}>
            Faça uma Doação
          </a>
        </div>
      )}
    </nav>
  );
}
