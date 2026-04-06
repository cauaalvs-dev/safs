"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

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
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const bg = scrolled ? "white" : "transparent";
  const shadow = scrolled ? "0 2px 24px rgba(0,0,0,0.09)" : "none";
  const py = scrolled ? "12px" : "20px";
  const textColor = scrolled ? "#1a2e35" : "white";

  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, backgroundColor: bg, boxShadow: shadow, transition: "all 0.3s" }}>
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: `${py} 40px`, display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        <a href="#inicio" style={{ display: "flex", alignItems: "center", textDecoration: "none", flexShrink: 0 }}>
          <div style={{ position: "relative", width: 48, height: 56 }}>
            <Image src="/images/logo-viver.png" alt="SAFS" fill style={{ objectFit: "contain" }} />
          </div>
        </a>

        {/* Desktop */}
        <ul style={{ display: "flex", gap: 36, listStyle: "none", alignItems: "center" }} className="hidden md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="nav-a" style={{ color: textColor }}>{l.label}</a>
            </li>
          ))}
          <li>
            <a href="#doacao" style={{
              background: "#e02020", color: "white", fontWeight: 700, padding: "10px 24px",
              borderRadius: 999, textDecoration: "none", fontSize: 14, whiteSpace: "nowrap"
            }}>
              Faça uma Doação
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button onClick={() => setOpen(!open)} style={{ background: "none", border: "none", cursor: "pointer", padding: 8, display: "flex", flexDirection: "column", gap: 5 }} className="flex md:hidden">
          {[0,1,2].map(i => (
            <span key={i} style={{ display: "block", width: 22, height: 2, background: textColor, borderRadius: 2, transition: "background 0.2s" }} />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: "white", borderTop: "1px solid #f0f0f0", padding: "8px 24px 20px" }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{ display: "block", padding: "13px 0", fontWeight: 700, color: "#1a2e35", textDecoration: "none", borderBottom: "1px solid #f5f5f5", fontSize: 15 }}>
              {l.label}
            </a>
          ))}
          <a href="#doacao" onClick={() => setOpen(false)}
            style={{ display: "block", marginTop: 16, textAlign: "center", background: "#e02020", color: "white", fontWeight: 700, padding: "13px", borderRadius: 999, textDecoration: "none", fontSize: 15 }}>
            Faça uma Doação
          </a>
        </div>
      )}
    </nav>
  );
}
