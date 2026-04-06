import Image from "next/image";

const valores = [
  { icon: "🤝", label: "Respeito" },
  { icon: "🔍", label: "Transparência" },
  { icon: "⚖️", label: "Ética" },
  { icon: "💡", label: "Responsabilidade" },
];

export default function Sobre() {
  return (
    <section id="sobre" style={{ padding: "96px 0", background: "white" }}>
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span style={{ color: "#3aaea9", fontWeight: 700, fontSize: 13, letterSpacing: "0.15em", textTransform: "uppercase" }}>Quem somos</span>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, color: "#1a2e35", margin: "8px 0 0" }}>Sobre a SAFS</h2>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 64, alignItems: "center", marginBottom: 64 }}>
          {/* Image */}
          <div style={{ position: "relative" }}>
            <div style={{ borderRadius: 24, overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.12)" }}>
              <Image src="/images/sobre.png" alt="Sobre a SAFS" width={700} height={480} style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
            <div style={{
              position: "absolute", bottom: -20, right: -20,
              background: "#3aaea9", color: "white", borderRadius: 16,
              padding: "16px 24px", boxShadow: "0 8px 24px rgba(58,174,169,0.4)"
            }}>
              <div style={{ fontSize: 28, fontWeight: 900 }}>1983</div>
              <div style={{ fontSize: 12, fontWeight: 600, opacity: 0.9 }}>Fundação</div>
            </div>
          </div>

          {/* Text */}
          <div>
            <h3 style={{ fontSize: "1.5rem", fontWeight: 900, color: "#1a2e35", marginTop: 0, marginBottom: 16 }}>
              Uma organização sem fins lucrativos com 42 anos de história
            </h3>
            <p style={{ color: "#555f63", lineHeight: 1.8, marginBottom: 16 }}>
              A SAFS é comprometida com a promoção humana, pautada pelo respeito, ética,
              transparência e responsabilidade. Oferecemos formação humana e profissional,
              buscando melhorar a qualidade de vida da comunidade.
            </p>
            <p style={{ color: "#555f63", lineHeight: 1.8, marginBottom: 32 }}>
              <strong style={{ color: "#1a2e35" }}>Fundada em 18/01/1983</strong>, atuamos com dedicação contínua no
              desenvolvimento de ações sociais voltadas a crianças, adolescentes e famílias
              do bairro Dom José, em Sobral-CE.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {valores.map((v) => (
                <div key={v.label} style={{
                  display: "flex", alignItems: "center", gap: 12,
                  background: "#e8f7f7", borderRadius: 12, padding: "12px 16px"
                }}>
                  <span style={{ fontSize: 20 }}>{v.icon}</span>
                  <span style={{ fontWeight: 700, color: "#1a2e35", fontSize: 14 }}>{v.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Para quem atuamos */}
        <div style={{ borderRadius: 24, overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.08)", marginBottom: 64 }}>
          <Image src="/images/para-quem-atuamos.png" alt="Para quem atuamos" width={1152} height={400} style={{ width: "100%", height: "auto", display: "block" }} />
        </div>

        {/* Áreas de atuação */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <span style={{ color: "#3aaea9", fontWeight: 700, fontSize: 13, letterSpacing: "0.15em", textTransform: "uppercase" }}>O que fazemos</span>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, color: "#1a2e35", margin: "8px 0 0" }}>Áreas de Atuação</h2>
        </div>
        <div style={{ borderRadius: 24, overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}>
          <Image src="/images/areas-atuacao.png" alt="Áreas de atuação" width={1152} height={500} style={{ width: "100%", height: "auto", display: "block" }} />
        </div>
      </div>
    </section>
  );
}
