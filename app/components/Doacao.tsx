export default function Doacao() {
  return (
    <section id="doacao" style={{ padding: "96px 0", background: "linear-gradient(135deg, #1a2e35 0%, #2a8a86 100%)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
        <span style={{ display: "inline-block", background: "rgba(255,255,255,0.2)", color: "white", fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", padding: "6px 16px", borderRadius: 999, marginBottom: 24 }}>
          Apoie nossa causa
        </span>
        <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, color: "white", margin: "0 0 16px" }}>
          Faça sua <span style={{ color: "#7fdbd8" }}>Doação</span>
        </h2>
        <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 18, maxWidth: 560, margin: "0 auto 56px", lineHeight: 1.7 }}>
          Sua contribuição transforma vidas no bairro Dom José. Cada doação é um passo
          a mais na construção de um futuro melhor.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24, maxWidth: 680, margin: "0 auto" }}>
          {/* PIX */}
          <div style={{ background: "white", borderRadius: 24, padding: 32 }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>💳</div>
            <h3 style={{ fontWeight: 900, color: "#1a2e35", fontSize: "1.2rem", marginTop: 0, marginBottom: 20 }}>PIX / Transferência</h3>
            <div style={{ background: "#e8f7f7", borderRadius: 16, padding: 20, textAlign: "left", display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { label: "Banco", value: "Caixa Econômica Federal" },
                { label: "Agência", value: "0554" },
                { label: "Operação", value: "1388" },
                { label: "Conta", value: "720019831-6" },
              ].map((item) => (
                <div key={item.label}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#555f63", textTransform: "uppercase", letterSpacing: "0.08em" }}>{item.label}</div>
                  <div style={{ fontWeight: 700, color: "#1a2e35", fontSize: 15, marginTop: 2 }}>{item.value}</div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #c8ede9", paddingTop: 14 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#555f63", textTransform: "uppercase", letterSpacing: "0.08em" }}>Instituição</div>
                <div style={{ fontWeight: 700, color: "#1a2e35", fontSize: 13, marginTop: 2 }}>Sociedade de Apoio à Família Sobralense</div>
              </div>
            </div>
          </div>

          {/* Contato para QR */}
          <div style={{ background: "white", borderRadius: 24, padding: 32, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>📱</div>
            <h3 style={{ fontWeight: 900, color: "#1a2e35", fontSize: "1.2rem", marginTop: 0, marginBottom: 12 }}>QR Code PIX</h3>
            <p style={{ color: "#555f63", fontSize: 14, marginBottom: 24, lineHeight: 1.6, textAlign: "center" }}>
              Entre em contato para receber o QR Code de doação diretamente:
            </p>
            <a href="mailto:safs3388@gmail.com"
              style={{ background: "#3aaea9", color: "white", fontWeight: 700, padding: "12px 24px", borderRadius: 999, textDecoration: "none", fontSize: 14 }}>
              safs3388@gmail.com
            </a>
          </div>
        </div>

        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, marginTop: 40 }}>
          Todas as doações são revertidas integralmente para os projetos sociais da SAFS.
        </p>
      </div>
    </section>
  );
}
