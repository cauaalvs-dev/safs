import Image from "next/image";

const valores = ["Respeito", "Transparência", "Ética", "Responsabilidade"];

export default function Sobre() {
  return (
    <section id="sobre" aria-label="Sobre a SAFS" style={{ padding: "100px 0", background: "white" }}>
      <div className="section-inner" style={{ maxWidth: 1152, margin: "0 auto", padding: "0 40px" }}>

        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <span style={{ color: "#3aaea9", fontWeight: 800, fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase" }}>Quem somos</span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 900, color: "#1a2e35", marginTop: 10 }}>Sobre a SAFS</h2>
        </div>

        <div className="sobre-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center", marginBottom: 80 }}>

          {/* Imagem sem badge sobreposto */}
          <div style={{ position: "relative" }}>
            <div style={{ borderRadius: 24, overflow: "hidden", boxShadow: "0 24px 64px rgba(0,0,0,0.1)" }}>
              <Image src="/images/sobre.png" alt="Atividades da SAFS no bairro Dom José" width={680} height={460} style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
            {/* Badge fora da imagem, não sobreposto */}
            <div style={{
              marginTop: 20, display: "inline-flex", alignItems: "center", gap: 16,
              background: "linear-gradient(135deg, #2a8a86, #3aaea9)",
              borderRadius: 16, padding: "16px 28px",
              boxShadow: "0 8px 28px rgba(58,174,169,0.35)",
            }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 28, fontWeight: 900, color: "white", fontFamily: "Montserrat, sans-serif", lineHeight: 1 }}>1983</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.8)", marginTop: 3 }}>Ano de fundação</div>
              </div>
              <div style={{ width: 1, height: 40, background: "rgba(255,255,255,0.3)" }} />
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 28, fontWeight: 900, color: "white", fontFamily: "Montserrat, sans-serif", lineHeight: 1 }}>42+</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.8)", marginTop: 3 }}>Anos de história</div>
              </div>
            </div>
          </div>

          {/* Texto */}
          <div>
            <h3 style={{ fontSize: "1.55rem", fontWeight: 900, color: "#1a2e35", marginBottom: 20, lineHeight: 1.35 }}>
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
                <div key={v} style={{ display: "flex", alignItems: "center", gap: 12, background: "#e8f7f7", borderRadius: 12, padding: "14px 18px" }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#3aaea9", flexShrink: 0 }} />
                  <span style={{ fontWeight: 700, color: "#1a2e35", fontSize: 14 }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Para quem atuamos */}
        <div style={{ borderRadius: 24, overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.07)", marginBottom: 80 }}>
          <Image src="/images/para-quem-atuamos.png" alt="Público atendido pela SAFS: crianças, adolescentes, jovens e idosos do bairro Dom José" width={1152} height={400} style={{ width: "100%", height: "auto", display: "block" }} />
        </div>

        {/* Áreas de atuação */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <span style={{ color: "#3aaea9", fontWeight: 800, fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase" }}>O que fazemos</span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 900, color: "#1a2e35", marginTop: 10 }}>Áreas de Atuação</h2>
        </div>
        <div style={{ borderRadius: 24, overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.07)" }}>
          <Image src="/images/areas-atuacao.png" alt="Áreas de atuação da SAFS: educação, esporte, cultura e bem-estar comunitário" width={1152} height={500} style={{ width: "100%", height: "auto", display: "block" }} />
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .sobre-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
