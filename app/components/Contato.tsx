"use client";
import { useState } from "react";

const infos = [
  { icon: "📍", titulo: "Endereço",  texto: "Bairro Dom José, Sobral – CE", link: null },
  { icon: "📞", titulo: "Telefone",  texto: "(88) 3611-7380",               link: "tel:+558836117380" },
  { icon: "✉️", titulo: "E-mail",    texto: "safs3388@gmail.com",           link: "mailto:safs3388@gmail.com" },
  { icon: "📸", titulo: "Instagram", texto: "@safs.dom.jose",               link: "https://instagram.com/safs.dom.jose" },
];

export default function Contato() {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Contato via site - ${form.nome}`);
    const body = encodeURIComponent(`Nome: ${form.nome}\nE-mail: ${form.email}\n\nMensagem:\n${form.mensagem}`);
    window.location.href = `mailto:safs3388@gmail.com?subject=${subject}&body=${body}`;
    setEnviado(true);
  }

  return (
    <section id="contato" style={{ padding: "96px 0", background: "#f8fafc" }}>
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span style={{ color: "#3aaea9", fontWeight: 700, fontSize: 13, letterSpacing: "0.15em", textTransform: "uppercase" }}>Fale conosco</span>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, color: "#1a2e35", margin: "8px 0 0" }}>Contato</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 48, alignItems: "start" }}>
          {/* Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {infos.map((item) => (
              <div key={item.titulo} style={{ background: "white", borderRadius: 20, padding: 24, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", display: "flex", alignItems: "center", gap: 20 }}>
                <div style={{ width: 48, height: 48, background: "#e8f7f7", borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontWeight: 900, color: "#1a2e35", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4 }}>{item.titulo}</div>
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer"
                      style={{ color: "#3aaea9", fontWeight: 600, textDecoration: "none", fontSize: 15 }}>
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
          <div style={{ background: "white", borderRadius: 24, padding: 40, boxShadow: "0 4px 24px rgba(0,0,0,0.07)" }}>
            <h3 style={{ fontWeight: 900, color: "#1a2e35", fontSize: "1.25rem", marginTop: 0, marginBottom: 28 }}>Envie uma mensagem</h3>

            {enviado ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                <p style={{ fontWeight: 700, color: "#1a2e35", fontSize: 18, marginBottom: 8 }}>Mensagem preparada!</p>
                <p style={{ color: "#555f63", fontSize: 14 }}>Finalize o envio pelo seu aplicativo de e-mail.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {[
                  { label: "Seu nome", type: "text", key: "nome", placeholder: "Como podemos te chamar?" },
                  { label: "E-mail",   type: "email", key: "email", placeholder: "seu@email.com" },
                ].map((field) => (
                  <div key={field.key}>
                    <label style={{ display: "block", fontWeight: 700, color: "#1a2e35", fontSize: 14, marginBottom: 8 }}>{field.label}</label>
                    <input type={field.type} required placeholder={field.placeholder}
                      value={form[field.key as "nome" | "email"]}
                      onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                      style={{ width: "100%", border: "2px solid #e5e7eb", borderRadius: 12, padding: "12px 16px", fontSize: 14, outline: "none", boxSizing: "border-box", fontFamily: "inherit", transition: "border-color 0.2s" }}
                      onFocus={e => e.target.style.borderColor = "#3aaea9"}
                      onBlur={e => e.target.style.borderColor = "#e5e7eb"}
                    />
                  </div>
                ))}
                <div>
                  <label style={{ display: "block", fontWeight: 700, color: "#1a2e35", fontSize: 14, marginBottom: 8 }}>Mensagem</label>
                  <textarea rows={5} required placeholder="Como podemos ajudar?"
                    value={form.mensagem}
                    onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                    style={{ width: "100%", border: "2px solid #e5e7eb", borderRadius: 12, padding: "12px 16px", fontSize: 14, outline: "none", boxSizing: "border-box", resize: "none", fontFamily: "inherit", transition: "border-color 0.2s" }}
                    onFocus={e => e.target.style.borderColor = "#3aaea9"}
                    onBlur={e => e.target.style.borderColor = "#e5e7eb"}
                  />
                </div>
                <button type="submit" style={{ background: "#3aaea9", color: "white", fontWeight: 700, padding: "16px", borderRadius: 14, border: "none", fontSize: 15, cursor: "pointer", fontFamily: "inherit", transition: "background 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#2a8a86")}
                  onMouseLeave={e => (e.currentTarget.style.background = "#3aaea9")}>
                  Enviar mensagem
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
