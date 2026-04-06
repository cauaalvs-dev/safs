import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      aria-label="Seção inicial"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1a2e35 0%, #2a8a86 55%, #3aaea9 100%)",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div aria-hidden="true" style={{ position: "absolute", right: -120, top: -120, width: 580, height: 580, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.08)", pointerEvents: "none" }} />
      <div aria-hidden="true" style={{ position: "absolute", right: 20, top: 80, width: 380, height: 380, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.05)", pointerEvents: "none" }} />

      <div className="hero-grid" style={{
        maxWidth: 1152, margin: "0 auto",
        padding: "130px 40px 90px",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 80,
        alignItems: "center",
      }}>
        {/* Texto */}
        <div className="anim-fade-up">
          <span style={{
            display: "inline-block", background: "rgba(255,255,255,0.15)",
            color: "white", fontSize: 11, fontWeight: 800, letterSpacing: "0.2em",
            textTransform: "uppercase", padding: "8px 20px", borderRadius: 999, marginBottom: 28,
            border: "1px solid rgba(255,255,255,0.2)",
          }}>
            Desde 18 de Janeiro de 1983 — Sobral, CE
          </span>

          <h1 style={{ color: "white", fontSize: "clamp(2.2rem, 5vw, 3.6rem)", fontWeight: 900, lineHeight: 1.12, marginBottom: 24, letterSpacing: "-0.01em" }}>
            Transformando<br />
            <span style={{ color: "#7fdbd8" }}>vidas</span> e<br />
            construindo futuros
          </h1>

          <p style={{ color: "rgba(255,255,255,0.78)", fontSize: "clamp(15px, 2vw, 17px)", lineHeight: 1.85, marginBottom: 36, maxWidth: 460 }}>
            A SAFS atua há mais de 42 anos no bairro Dom José, levando educação,
            bem-estar e cidadania a crianças, adolescentes e famílias da comunidade.
          </p>

          <div className="hero-btns" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a href="#projetos" className="btn-white">Conheça nossos projetos</a>
            <a href="#doacao" className="btn-red">Faça uma Doação</a>
          </div>

          {/* Stats */}
          <div className="hero-stats" style={{ display: "flex", gap: 0, marginTop: 48, paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.15)" }}>
            {[
              { num: "42+", label: "Anos de história" },
              { num: "4",   label: "Projetos ativos" },
              { num: "50+", label: "Idosos atendidos" },
            ].map((s, i) => (
              <div key={s.label} style={{
                flex: 1,
                paddingRight: i < 2 ? 20 : 0,
                paddingLeft: i > 0 ? 20 : 0,
                borderRight: i < 2 ? "1px solid rgba(255,255,255,0.15)" : "none",
              }}>
                <div style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 900, color: "#7fdbd8", fontFamily: "Montserrat, sans-serif", lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", marginTop: 6, fontWeight: 600 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Imagem — escondida no mobile via CSS */}
        <div className="anim-fade-in delay-300" style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
          <div aria-hidden="true" style={{ position: "absolute", width: 360, height: 360, borderRadius: "50%", background: "rgba(255,255,255,0.06)", border: "2px solid rgba(255,255,255,0.12)" }} />
          <div style={{ position: "relative", width: 310, height: 310, borderRadius: "50%", overflow: "hidden", border: "5px solid rgba(255,255,255,0.22)", boxShadow: "0 32px 80px rgba(0,0,0,0.3)" }}>
            <Image src="/images/familia.png" alt="Família atendida pela SAFS" fill style={{ objectFit: "cover" }} priority />
          </div>
          <div className="anim-fade-in delay-500" style={{
            position: "absolute", bottom: 16, left: "0%",
            background: "white", borderRadius: 18, padding: "12px 18px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.2)", display: "flex", alignItems: "center", gap: 12,
          }}>
            <div style={{ position: "relative", width: 36, height: 36, flexShrink: 0 }}>
              <Image src="/images/logo-safs-novo.png" alt="" aria-hidden="true" fill style={{ objectFit: "contain" }} />
            </div>
            <div>
              <div style={{ fontWeight: 900, color: "#1a2e35", fontSize: 13, fontFamily: "Montserrat, sans-serif" }}>Projeto Viver+</div>
              <div style={{ fontWeight: 600, color: "#3aaea9", fontSize: 11, marginTop: 1 }}>SAFS Dom José</div>
            </div>
          </div>
        </div>
      </div>

      <div aria-hidden="true" style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
        <svg viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%" }}>
          <path d="M0 64L1440 64L1440 20C1200 60 960 0 720 16C480 32 240 6 0 20L0 64Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
