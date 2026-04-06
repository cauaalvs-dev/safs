import Image from "next/image";

const fotos = [
  { src: "/images/criancas-parque.png",    alt: "Crianças no parque com uniforme SAFS" },
  { src: "/images/criancas-piscina.png",   alt: "Crianças na piscina" },
  { src: "/images/criancas-quadra.png",    alt: "Jovens na quadra da SAFS" },
  { src: "/images/para-quem-atuamos2.png", alt: "Atividades com a comunidade" },
  { src: "/images/foto1.png",              alt: "Atividade da SAFS" },
  { src: "/images/foto2.png",              alt: "Comunidade Dom José" },
];

export default function Galeria() {
  return (
    <section id="galeria" style={{ padding: "100px 0", background: "white" }}>
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 40px" }}>
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <span style={{ color: "#3aaea9", fontWeight: 800, fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase" }}>Momentos</span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 900, color: "#1a2e35", marginTop: 10, marginBottom: 14 }}>Nossa Galeria</h2>
          <p style={{ color: "#555f63", maxWidth: 460, margin: "0 auto", lineHeight: 1.75, fontSize: 15 }}>
            Cada foto conta uma história de superação, alegria e comunidade.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }} className="galeria-grid">
          {fotos.map((f, i) => (
            <div key={i} className="foto-card" style={{ borderRadius: 18, overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.09)", position: "relative", height: 230 }}>
              <Image src={f.src} alt={f.alt} fill style={{ objectFit: "cover" }} />
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 52 }}>
          <a href="https://instagram.com/safs.dom.jose" target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: 12, background: "linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)", color: "white", fontWeight: 700, padding: "14px 32px", borderRadius: 999, textDecoration: "none", fontSize: 15 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            Siga no Instagram
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .galeria-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
