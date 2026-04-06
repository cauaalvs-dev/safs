"use client";
import { useState } from "react";

const infos = [
  { titulo: "Endereço",  texto: "Bairro Dom José, Sobral – CE", link: null },
  { titulo: "Telefone",  texto: "(88) 3611-7380",               link: "tel:+558836117380" },
  { titulo: "E-mail",    texto: "safs3388@gmail.com",           link: "mailto:safs3388@gmail.com" },
  { titulo: "Instagram", texto: "@safs.dom.jose",               link: "https://instagram.com/safs.dom.jose" },
];

export default function Contato() {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Contato via site – ${form.nome}`);
    const body = encodeURIComponent(`Nome: ${form.nome}\nE-mail: ${form.email}\n\nMensagem:\n${form.mensagem}`);
    window.location.href = `mailto:safs3388@gmail.com?subject=${subject}&body=${body}`;
    setEnviado(true);
  }

  const inputStyle = {
    width: "100%", border: "2px solid #e5e7eb", borderRadius: 12,
    padding: "13px 16px", fontSize: 14, outline: "none",
    fontFamily: "Nunito, sans-serif", boxSizing: "border-box" as const, transition: "border-color 0.2s",
  };

  return (
    <section id="contato" style={{ padding: "100px 0", background: "#f8fafc" }}>
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 40px" }}>
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <span style={{ color: "#3aaea9", fontWeight: 800, fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase" }}>Fale conosco</span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 900, color: "#1a2e35", marginTop: 10 }}>Contato</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "start" }} className="contato-grid">
          {/* Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {infos.map((item) => (
              <div key={item.titulo} style={{ background: "white", borderRadius: 20, padding: "22px 28px", boxShadow: "0 2px 16px rgba(0,0,0,0.05)", display: "flex", alignItems: "center", gap: 20 }}>
                <div style={{ width: 4, height: 40, background: "#3aaea9", borderRadius: 4, flexShrink: 0 }} />
                <div>
                  <div style={{ fontWeight: 800, color: "#1a2e35", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 5 }}>{item.titulo}</div>
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer"
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

          {/* Form */}
          <div style={{ background: "white", borderRadius: 24, padding: 44, boxShadow: "0 4px 28px rgba(0,0,0,0.07)" }}>
            <h3 style={{ fontWeight: 900, color: "#1a2e35", fontSize: "1.3rem", marginTop: 0, marginBottom: 32 }}>Envie uma mensagem</h3>

            {enviado ? (
              <div style={{ textAlign: "center", padding: "48px 0" }}>
                <div style={{ width: 64, height: 64, background: "#e8f7f7", borderRadius: "50%", margin: "0 auto 20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#3aaea9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <p style={{ fontWeight: 800, color: "#1a2e35", fontSize: 18, marginBottom: 8 }}>Mensagem preparada!</p>
                <p style={{ color: "#555f63", fontSize: 14 }}>Finalize o envio pelo seu aplicativo de e-mail.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 22 }}>
                <div>
                  <label style={{ display: "block", fontWeight: 700, color: "#1a2e35", fontSize: 13, marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.06em" }}>Nome</label>
                  <input type="text" required placeholder="Seu nome completo" value={form.nome}
                    onChange={e => setForm({ ...form, nome: e.target.value })} style={inputStyle}
                    onFocus={e => e.target.style.borderColor = "#3aaea9"}
                    onBlur={e => e.target.style.borderColor = "#e5e7eb"} />
                </div>
                <div>
                  <label style={{ display: "block", fontWeight: 700, color: "#1a2e35", fontSize: 13, marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.06em" }}>E-mail</label>
                  <input type="email" required placeholder="seu@email.com" value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })} style={inputStyle}
                    onFocus={e => e.target.style.borderColor = "#3aaea9"}
                    onBlur={e => e.target.style.borderColor = "#e5e7eb"} />
                </div>
                <div>
                  <label style={{ display: "block", fontWeight: 700, color: "#1a2e35", fontSize: 13, marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.06em" }}>Mensagem</label>
                  <textarea rows={5} required placeholder="Como podemos ajudar?" value={form.mensagem}
                    onChange={e => setForm({ ...form, mensagem: e.target.value })}
                    style={{ ...inputStyle, resize: "none" }}
                    onFocus={e => e.target.style.borderColor = "#3aaea9"}
                    onBlur={e => e.target.style.borderColor = "#e5e7eb"} />
                </div>
                <button type="submit" style={{ background: "#3aaea9", color: "white", fontWeight: 800, padding: "16px", borderRadius: 14, border: "none", fontSize: 15, cursor: "pointer", fontFamily: "Nunito, sans-serif", letterSpacing: "0.02em" }}>
                  Enviar Mensagem
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contato-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
