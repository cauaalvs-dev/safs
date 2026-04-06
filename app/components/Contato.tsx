"use client";
import { useState } from "react";

const infos = [
  { titulo: "Endereço",  texto: "Bairro Dom José, Sobral – CE", link: null },
  { titulo: "Telefone",  texto: "(88) 3611-7380",               link: "tel:+558836117380" },
  { titulo: "E-mail",    texto: "safs3388@gmail.com",           link: "mailto:safs3388@gmail.com" },
  { titulo: "Instagram", texto: "@safs.dom.jose",               link: "https://www.instagram.com/safs.dom.jose/" },
];

// Sanitize: strip all chars that could break out of mailto: URI
function sanitize(value: string): string {
  return value.replace(/[<>"'`\\]/g, "").slice(0, 500);
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

export default function Contato() {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });
  const [erro, setErro] = useState("");
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErro("");

    // Client-side validation
    const nome = sanitize(form.nome.trim());
    const email = sanitize(form.email.trim());
    const mensagem = sanitize(form.mensagem.trim());

    if (!nome || nome.length < 2) { setErro("Informe seu nome."); return; }
    if (!isValidEmail(email)) { setErro("Informe um e-mail válido."); return; }
    if (!mensagem || mensagem.length < 10) { setErro("Mensagem muito curta. Mínimo 10 caracteres."); return; }

    // Build mailto — all values sanitized and encoded
    const subject = encodeURIComponent(`Contato via site – ${nome}`);
    const body = encodeURIComponent(`Nome: ${nome}\nE-mail: ${email}\n\nMensagem:\n${mensagem}`);

    // Use window.open instead of href assignment to avoid navigation attacks
    window.open(`mailto:safs3388@gmail.com?subject=${subject}&body=${body}`, "_self");
    setEnviado(true);
  }

  function handleChange(field: "nome" | "email" | "mensagem", value: string) {
    // Limit input length to prevent DoS via huge strings
    const maxLen = field === "mensagem" ? 1000 : 200;
    setForm((prev) => ({ ...prev, [field]: value.slice(0, maxLen) }));
  }

  const inputStyle: React.CSSProperties = {
    width: "100%", border: "2px solid #e5e7eb", borderRadius: 12,
    padding: "13px 16px", fontSize: 14, outline: "none",
    fontFamily: "Nunito, sans-serif", boxSizing: "border-box", transition: "border-color 0.2s",
    background: "white", color: "#1a2e35",
  };

  return (
    <section id="contato" aria-label="Contato" style={{ padding: "100px 0", background: "#f8fafc" }}>
      <div className="section-inner" style={{ maxWidth: 1152, margin: "0 auto", padding: "0 40px" }}>
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <span style={{ color: "#3aaea9", fontWeight: 800, fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase" }}>Fale conosco</span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 900, color: "#1a2e35", marginTop: 10 }}>Contato</h2>
        </div>

        <div className="contato-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "start" }}>
          {/* Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {infos.map((item) => (
              <div key={item.titulo} style={{ background: "white", borderRadius: 20, padding: "22px 28px", boxShadow: "0 2px 16px rgba(0,0,0,0.05)", display: "flex", alignItems: "center", gap: 20 }}>
                <div style={{ width: 4, height: 44, background: "#3aaea9", borderRadius: 4, flexShrink: 0 }} />
                <div>
                  <div style={{ fontWeight: 800, color: "#1a2e35", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 5 }}>{item.titulo}</div>
                  {item.link ? (
                    // All external links: noopener + noreferrer prevents tabnapping
                    <a href={item.link}
                      target={item.link.startsWith("http") ? "_blank" : undefined}
                      rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                      style={{ color: "#3aaea9", fontWeight: 700, textDecoration: "none", fontSize: 15 }}>
                      {item.texto}
                    </a>
                  ) : (
                    <span style={{ color: "#555f63", fontWeight: 600, fontSize: 15 }}>{item.texto}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Formulário */}
          <div style={{ background: "white", borderRadius: 24, padding: 44, boxShadow: "0 4px 28px rgba(0,0,0,0.07)" }}>
            <h3 style={{ fontWeight: 900, color: "#1a2e35", fontSize: "1.3rem", marginTop: 0, marginBottom: 32 }}>Envie uma mensagem</h3>

            {enviado ? (
              <div style={{ textAlign: "center", padding: "48px 0" }}>
                <div style={{ width: 64, height: 64, background: "#e8f7f7", borderRadius: "50%", margin: "0 auto 20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 13l4 4L19 7" stroke="#3aaea9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p style={{ fontWeight: 800, color: "#1a2e35", fontSize: 18, marginBottom: 8 }}>Mensagem preparada!</p>
                <p style={{ color: "#555f63", fontSize: 14 }}>Finalize o envio pelo seu aplicativo de e-mail.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: 22 }}>
                {erro && (
                  <div role="alert" style={{ background: "#fef2f2", border: "1px solid #fecaca", color: "#dc2626", borderRadius: 10, padding: "12px 16px", fontSize: 14, fontWeight: 600 }}>
                    {erro}
                  </div>
                )}
                <div>
                  <label htmlFor="nome" style={{ display: "block", fontWeight: 700, color: "#1a2e35", fontSize: 13, marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.06em" }}>Nome</label>
                  <input id="nome" type="text" required autoComplete="name" placeholder="Seu nome completo"
                    value={form.nome} onChange={e => handleChange("nome", e.target.value)}
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = "#3aaea9"}
                    onBlur={e => e.target.style.borderColor = "#e5e7eb"} />
                </div>
                <div>
                  <label htmlFor="email" style={{ display: "block", fontWeight: 700, color: "#1a2e35", fontSize: 13, marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.06em" }}>E-mail</label>
                  <input id="email" type="email" required autoComplete="email" placeholder="seu@email.com"
                    value={form.email} onChange={e => handleChange("email", e.target.value)}
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = "#3aaea9"}
                    onBlur={e => e.target.style.borderColor = "#e5e7eb"} />
                </div>
                <div>
                  <label htmlFor="mensagem" style={{ display: "block", fontWeight: 700, color: "#1a2e35", fontSize: 13, marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.06em" }}>Mensagem</label>
                  <textarea id="mensagem" rows={5} required placeholder="Como podemos ajudar?"
                    value={form.mensagem} onChange={e => handleChange("mensagem", e.target.value)}
                    style={{ ...inputStyle, resize: "none" }}
                    onFocus={e => e.target.style.borderColor = "#3aaea9"}
                    onBlur={e => e.target.style.borderColor = "#e5e7eb"} />
                  <div style={{ fontSize: 12, color: "#9ca3af", marginTop: 4, textAlign: "right" }}>{form.mensagem.length}/1000</div>
                </div>
                <button type="submit" style={{ background: "#3aaea9", color: "white", fontWeight: 800, padding: "16px", borderRadius: 14, border: "none", fontSize: 15, cursor: "pointer", fontFamily: "Nunito, sans-serif", letterSpacing: "0.02em", transition: "background 0.2s" }}>
                  Enviar Mensagem
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contato-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
