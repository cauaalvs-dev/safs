import Image from "next/image";

const navLinks = [
  { label: "Início",   href: "#inicio" },
  { label: "Sobre",    href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Galeria",  href: "#galeria" },
  { label: "Contato",  href: "#contato" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#1a2e35", color: "white", padding: "64px 0 32px" }}>
      <style>{`.footer-link { color: rgba(255,255,255,0.5); font-size:14px; text-decoration:none; transition:color 0.2s; display:block; } .footer-link:hover { color:#7fdbd8; }`}</style>
      <div className="section-inner" style={{ maxWidth: 1152, margin: "0 auto", padding: "0 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 56, marginBottom: 56 }} className="footer-grid">
          <div>
            <div style={{ position: "relative", width: 58, height: 68, marginBottom: 20 }}>
              <Image src="/images/logo-safs.png" alt="SAFS" fill style={{ objectFit: "contain" }} />
            </div>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, lineHeight: 1.8, maxWidth: 300 }}>
              Sociedade de Apoio à Família Sobralense. Transformando vidas no bairro Dom José, Sobral-CE, desde 1983.
            </p>
          </div>

          <div>
            <h4 style={{ fontWeight: 900, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 24, marginTop: 0, color: "rgba(255,255,255,0.9)" }}>Navegação</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {navLinks.map((l) => (
                <li key={l.href}><a href={l.href} className="footer-link">{l.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontWeight: 900, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 24, marginTop: 0, color: "rgba(255,255,255,0.9)" }}>Contato</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <span className="footer-link" style={{ cursor: "default" }}>Bairro Dom José, Sobral – CE</span>
              <a href="tel:+558836117380" className="footer-link">(88) 3611-7380</a>
              <a href="mailto:safs3388@gmail.com" className="footer-link">safs3388@gmail.com</a>
              <a href="https://www.instagram.com/safs.dom.jose/" target="_blank" rel="noopener noreferrer" className="footer-link">@safs.dom.jose</a>
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 28, textAlign: "center", color: "rgba(255,255,255,0.3)", fontSize: 13 }}>
          © {new Date().getFullYear()} SAFS – Sociedade de Apoio à Família Sobralense. Todos os direitos reservados.
        </div>
      </div>

      <style>{`@media (max-width: 768px) { .footer-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }`}</style>
    </footer>
  );
}
