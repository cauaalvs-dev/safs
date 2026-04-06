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
    <footer style={{ background: "#1a2e35", color: "white", padding: "56px 0 32px" }}>
      <style>{`
        .footer-link { color: rgba(255,255,255,0.55); font-size:14px; text-decoration:none; transition: color 0.2s; }
        .footer-link:hover { color: #7fdbd8; }
      `}</style>
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 48, marginBottom: 48 }}>
          <div>
            <div style={{ position: "relative", width: 64, height: 74, marginBottom: 16 }}>
              <Image src="/images/logo-viver.png" alt="SAFS Viver+" fill style={{ objectFit: "contain" }} />
            </div>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 14, lineHeight: 1.7, margin: 0 }}>
              Sociedade de Apoio à Família Sobralense. Transformando vidas no bairro Dom José desde 1983.
            </p>
          </div>

          <div>
            <h4 style={{ fontWeight: 900, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 20, marginTop: 0 }}>Navegação</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {navLinks.map((l) => (
                <li key={l.href}><a href={l.href} className="footer-link">{l.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontWeight: 900, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 20, marginTop: 0 }}>Contato</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <span style={{ color: "rgba(255,255,255,0.55)", fontSize: 14 }}>📍 Bairro Dom José, Sobral – CE</span>
              <a href="tel:+558836117380" className="footer-link">📞 (88) 3611-7380</a>
              <a href="mailto:safs3388@gmail.com" className="footer-link">✉️ safs3388@gmail.com</a>
              <a href="https://instagram.com/safs.dom.jose" target="_blank" rel="noopener noreferrer" className="footer-link">📸 @safs.dom.jose</a>
            </div>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 24, textAlign: "center", color: "rgba(255,255,255,0.35)", fontSize: 13 }}>
          © {new Date().getFullYear()} SAFS – Sociedade de Apoio à Família Sobralense. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
