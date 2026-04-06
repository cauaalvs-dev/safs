export default function Doacao() {
  return (
    <section id="doacao" style={{ padding: "100px 0", background: "linear-gradient(135deg, #1a2e35 0%, #2a8a86 100%)" }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 40px", textAlign: "center" }}>
        <span style={{ display: "inline-block", background: "rgba(255,255,255,0.15)", color: "white", fontSize: 11, fontWeight: 800, letterSpacing: "0.18em", textTransform: "uppercase", padding: "7px 18px", borderRadius: 999, marginBottom: 24 }}>
          Apoie nossa causa
        </span>
        <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 900, color: "white", marginBottom: 18 }}>
          Faça sua <span style={{ color: "#7fdbd8" }}>Doação</span>
        </h2>
        <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 17, maxWidth: 520, margin: "0 auto 60px", lineHeight: 1.8 }}>
          Sua contribuição transforma vidas no bairro Dom José. Cada doação é um passo
          a mais na construção de um futuro melhor para toda a comunidade.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="doacao-grid">
          {/* PIX */}
          <div style={{ background: "white", borderRadius: 24, padding: 36 }}>
            <h3 style={{ fontWeight: 900, color: "#1a2e35", fontSize: "1.2rem", marginBottom: 24, marginTop: 0 }}>PIX / Transferência</h3>
            <div style={{ background: "#e8f7f7", borderRadius: 16, padding: 24, textAlign: "left", display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { label: "Banco",      value: "Caixa Econômica Federal" },
                { label: "Agência",    value: "0554" },
                { label: "Operação",   value: "1388" },
                { label: "Conta",      value: "720019831-6" },
                { label: "Instituição",value: "Sociedade de Apoio à Família Sobralense" },
              ].map((item) => (
                <div key={item.label} style={{ borderBottom: "1px solid rgba(58,174,169,0.15)", paddingBottom: 12 }}>
                  <div style={{ fontSize: 11, fontWeight: 800, color: "#3aaea9", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4 }}>{item.label}</div>
                  <div style={{ fontWeight: 700, color: "#1a2e35", fontSize: 15 }}>{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Contato */}
          <div style={{ background: "white", borderRadius: 24, padding: 36, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 20 }}>
            <h3 style={{ fontWeight: 900, color: "#1a2e35", fontSize: "1.2rem", margin: 0 }}>Entre em Contato</h3>
            <p style={{ color: "#555f63", fontSize: 14, lineHeight: 1.7, textAlign: "center", margin: 0 }}>
              Receba o QR Code PIX ou tire dúvidas sobre como contribuir com a SAFS.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, width: "100%" }}>
              <a href="mailto:safs3388@gmail.com" style={{ background: "#3aaea9", color: "white", fontWeight: 700, padding: "14px 24px", borderRadius: 12, textDecoration: "none", fontSize: 14, textAlign: "center" }}>
                safs3388@gmail.com
              </a>
              <a href="tel:+558836117380" style={{ background: "#e8f7f7", color: "#2a8a86", fontWeight: 700, padding: "14px 24px", borderRadius: 12, textDecoration: "none", fontSize: 14, textAlign: "center" }}>
                (88) 3611-7380
              </a>
            </div>
          </div>
        </div>

        <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, marginTop: 40 }}>
          Todas as doações são revertidas integralmente para os projetos sociais da SAFS.
        </p>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .doacao-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
