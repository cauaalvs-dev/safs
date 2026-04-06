import Image from "next/image";

const valores = [
  { label: "Respeito" },
  { label: "Transparência" },
  { label: "Ética" },
  { label: "Responsabilidade" },
];

export default function Sobre() {
  return (
    <section id="sobre" style={{ padding: "100px 0", background: "white" }}>
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 40px" }}>

        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <span style={{ color: "#3aaea9", fontWeight: 800, fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase" }}>Quem somos</span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 900, color: "#1a2e35", marginTop: 10 }}>Sobre a SAFS</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center", marginBottom: 80 }} className="sobre-grid">
          <div style={{ position: "relative" }}>
            <div style={{ borderRadius: 24, overflow: "hidden", boxShadow: "0 24px 64px rgba(0,0,0,0.1)" }}>
              <Image src="/images/sobre.png" alt="Sobre a SAFS" width={680} height={460} style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
            <div style={{
              position: "absolute", bottom: -24, right: -24,
              background: "#3aaea9", color: "white", borderRadius: 18,
              padding: "18px 28px", boxShadow: "0 8px 28px rgba(58,174,169,0.45)"
            }}>
              <div style={{ fontSize: 26, fontWeight: 900, fontFamily: "Montserrat, sans-serif" }}>1983</div>
              <div style={{ fontSize: 12, fontWeight: 700, opacity: 0.85, marginTop: 2 }}>Ano de fundação</div>
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: "1.55rem", fontWeight: 900, color: "#1a2e35", marginBottom: 18, lineHeight: 1.35 }}>
              Uma organização sem fins lucrativos com 42 anos de história
            </h3>
            <p style={{ color: "#555f63", lineHeight: 1.85, marginBottom: 18, fontSize: 15 }}>
              A SAFS é comprometida com a promoção humana, pautada pelo respeito, ética,
              transparência e responsabilidade. Oferecemos formação humana e profissional,
              buscando melhorar a qualidade de vida da comunidade.
            </p>
            <p style={{ color: "#555f63", lineHeight: 1.85, marginBottom: 36, fontSize: 15 }}>
              <strong style={{ color: "#1a2e35" }}>Fundada em 18/01/1983</strong>, atuamos com dedicação contínua
              no desenvolvimento de ações sociais voltadas a crianças, adolescentes e famílias
              do bairro Dom José, em Sobral-CE.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {valores.map((v) => (
                <div key={v.label} style={{ display: "flex", alignItems: "center", gap: 12, background: "#e8f7f7", borderRadius: 12, padding: "13px 18px" }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#3aaea9", flexShrink: 0 }} />
                  <span style={{ fontWeight: 700, color: "#1a2e35", fontSize: 14 }}>{v.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Para quem atuamos */}
        <div style={{ borderRadius: 24, overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.07)", marginBottom: 80 }}>
          <Image src="/images/para-quem-atuamos.png" alt="Para quem atuamos" width={1152} height={400} style={{ width: "100%", height: "auto", display: "block" }} />
        </div>

        {/* Áreas de atuação */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <span style={{ color: "#3aaea9", fontWeight: 800, fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase" }}>O que fazemos</span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 900, color: "#1a2e35", marginTop: 10 }}>Áreas de Atuação</h2>
        </div>
        <div style={{ borderRadius: 24, overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.07)" }}>
          <Image src="/images/areas-atuacao.png" alt="Áreas de atuação" width={1152} height={500} style={{ width: "100%", height: "auto", display: "block" }} />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .sobre-grid { grid-template-columns: 1fr !important; gap: 60px !important; }
        }
      `}</style>
    </section>
  );
}
