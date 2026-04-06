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
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
    }`}>
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2">
          <Image src="/images/logo-viver.png" alt="SAFS Viver+" width={60} height={70} className="object-contain" />
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`font-semibold text-sm tracking-wide transition-colors hover:text-[#3aaea9] ${
                  scrolled ? "text-[#1a2e35]" : "text-white"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#doacao"
              className="bg-[#e02020] text-white px-5 py-2 rounded-full font-bold text-sm hover:bg-red-700 transition-colors"
            >
              Faça uma Doação
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 transition-all ${scrolled ? "bg-[#1a2e35]" : "bg-white"}`} />
          <span className={`block w-6 h-0.5 transition-all ${scrolled ? "bg-[#1a2e35]" : "bg-white"}`} />
          <span className={`block w-6 h-0.5 transition-all ${scrolled ? "bg-[#1a2e35]" : "bg-white"}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg px-4 pb-4 pt-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 font-semibold text-[#1a2e35] border-b border-gray-100 hover:text-[#3aaea9]"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#doacao"
            onClick={() => setOpen(false)}
            className="block mt-3 text-center bg-[#e02020] text-white px-5 py-2 rounded-full font-bold"
          >
            Faça uma Doação
          </a>
        </div>
      )}
    </nav>
  );
}
