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
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      transition: "all 0.3s",
      backgroundColor: scrolled ? "white" : "transparent",
      boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.1)" : "none",
      padding: scrolled ? "10px 0" : "18px 0",
    }}>
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <a href="#inicio" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <div style={{ position: "relative", width: 52, height: 60 }}>
            <Image src="/images/logo-viver.png" alt="SAFS" fill style={{ objectFit: "contain" }} />
          </div>
        </a>

        {/* Desktop links */}
        <ul style={{ display: "flex", gap: 32, listStyle: "none", margin: 0, padding: 0, alignItems: "center" }}
          className="hidden md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} style={{
                fontWeight: 700, fontSize: 14, textDecoration: "none",
                color: scrolled ? "#1a2e35" : "white",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#3aaea9")}
              onMouseLeave={e => (e.currentTarget.style.color = scrolled ? "#1a2e35" : "white")}>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#doacao" style={{
              background: "#e02020", color: "white", fontWeight: 700,
              padding: "10px 22px", borderRadius: 999, textDecoration: "none",
              fontSize: 14, transition: "background 0.2s",
            }}>
              Faça uma Doação
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} style={{ background: "none", border: "none", cursor: "pointer", padding: 8, display: "flex", flexDirection: "column", gap: 5 }} className="md:hidden">
          {[0,1,2].map(i => <span key={i} style={{ display: "block", width: 24, height: 2, background: scrolled ? "#1a2e35" : "white", borderRadius: 2 }} />)}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: "white", padding: "8px 24px 16px", borderTop: "1px solid #eee" }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{ display: "block", padding: "12px 0", fontWeight: 700, color: "#1a2e35", textDecoration: "none", borderBottom: "1px solid #f0f0f0" }}>
              {l.label}
            </a>
          ))}
          <a href="#doacao" onClick={() => setOpen(false)}
            style={{ display: "block", marginTop: 12, textAlign: "center", background: "#e02020", color: "white", fontWeight: 700, padding: "12px", borderRadius: 999, textDecoration: "none" }}>
            Faça uma Doação
          </a>
        </div>
      )}
    </nav>
  );
}
