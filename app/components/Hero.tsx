import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1a2e35 0%, #2a8a86 55%, #3aaea9 100%)",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Círculos decorativos */}
      <div style={{ position: "absolute", right: -120, top: -120, width: 560, height: 560, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.08)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", right: 0, top: 60, width: 360, height: 360, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.06)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "120px 40px 80px", width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}
        className="hero-grid">
        
        {/* Texto */}
        <div className="anim-fade-up">
          <span style={{
            display: "inline-block", background: "rgba(255,255,255,0.15)",
            color: "white", fontSize: 11, fontWeight: 800, letterSpacing: "0.18em",
            textTransform: "uppercase", padding: "7px 18px", borderRadius: 999, marginBottom: 28
          }}>
            Desde 18 de Janeiro de 1983 — Sobral, CE
          </span>

          <h1 style={{ color: "white", fontSize: "clamp(2.4rem, 5vw, 3.6rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: 24 }}>
            Transformando<br />
            <span style={{ color: "#7fdbd8" }}>vidas</span> e<br />
            construindo futuros
          </h1>

          <p style={{ color: "rgba(255,255,255,0.78)", fontSize: 17, lineHeight: 1.8, marginBottom: 40, maxWidth: 460 }}>
            A SAFS atua há mais de 42 anos no bairro Dom José, levando educação,
            bem-estar e cidadania a crianças, adolescentes e famílias da comunidade.
          </p>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href="#projetos" className="btn-white">Conheça nossos projetos</a>
            <a href="#doacao" className="btn-red">Faça uma Doação</a>
          </div>

          {/* Stats */}
          <div style={{ display: "flex", gap: 48, marginTop: 56, paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.18)" }}>
            {[
              { num: "42+", label: "Anos de história" },
              { num: "4",   label: "Projetos ativos" },
              { num: "50+", label: "Idosos atendidos" },
            ].map((s) => (
              <div key={s.label}>
                <div style={{ fontSize: "2rem", fontWeight: 900, color: "#7fdbd8", fontFamily: "Montserrat, sans-serif" }}>{s.num}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", marginTop: 4, fontWeight: 600 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Imagem */}
        <div className="anim-fade-in delay-300" style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
          <div style={{ position: "absolute", width: 340, height: 340, borderRadius: "50%", background: "rgba(255,255,255,0.08)", border: "2px solid rgba(255,255,255,0.15)" }} />
          <div style={{ position: "relative", width: 300, height: 300, borderRadius: "50%", overflow: "hidden", border: "5px solid rgba(255,255,255,0.25)", boxShadow: "0 32px 80px rgba(0,0,0,0.25)" }}>
            <Image src="/images/familia.png" alt="Família atendida pela SAFS" fill style={{ objectFit: "cover" }} />
          </div>

          {/* Badge */}
          <div className="anim-fade-in delay-500" style={{
            position: "absolute", bottom: 10, left: "5%",
            background: "white", borderRadius: 20, padding: "14px 20px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.18)", display: "flex", alignItems: "center", gap: 14
          }}>
            <div style={{ position: "relative", width: 40, height: 46, flexShrink: 0 }}>
              <Image src="/images/logo-viver.png" alt="Viver+" fill style={{ objectFit: "contain" }} />
            </div>
            <div>
              <div style={{ fontWeight: 800, color: "#1a2e35", fontSize: 14, fontFamily: "Montserrat, sans-serif" }}>Projeto Viver+</div>
              <div style={{ fontWeight: 600, color: "#3aaea9", fontSize: 12 }}>SAFS Dom José</div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
        <svg viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%" }}>
          <path d="M0 64L1440 64L1440 20C1200 60 960 0 720 16C480 32 240 6 0 20L0 64Z" fill="white"/>
        </svg>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; padding: 100px 24px 60px !important; }
          .hero-grid > div:last-child { display: none; }
        }
      `}</style>
    </section>
  );
}
