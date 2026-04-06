"use client";
import { useState } from "react";

export default function Contato() {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Contato via site - ${form.nome}`);
    const body = encodeURIComponent(
      `Nome: ${form.nome}\nE-mail: ${form.email}\n\nMensagem:\n${form.mensagem}`
    );
    window.location.href = `mailto:safs3388@gmail.com?subject=${subject}&body=${body}`;
    setEnviado(true);
  }

  return (
    <section id="contato" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#3aaea9] font-bold text-sm tracking-widest uppercase">Fale conosco</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#1a2e35] mt-2">Contato</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Info cards */}
          <div className="space-y-6">
            {[
              { icon: "📍", titulo: "Endereço",  texto: "Bairro Dom José, Sobral – CE", link: null },
              { icon: "📞", titulo: "Telefone",  texto: "(88) 3611-7380",               link: "tel:+558836117380" },
              { icon: "✉️", titulo: "E-mail",    texto: "safs3388@gmail.com",           link: "mailto:safs3388@gmail.com" },
              { icon: "📸", titulo: "Instagram", texto: "@safs.dom.jose",               link: "https://instagram.com/safs.dom.jose" },
            ].map((item) => (
              <div key={item.titulo} className="bg-white rounded-2xl p-6 shadow-sm flex items-start gap-5">
                <div className="w-12 h-12 bg-[#e8f7f7] rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="font-black text-[#1a2e35] text-sm uppercase tracking-wide mb-1">{item.titulo}</div>
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer"
                      className="text-[#3aaea9] font-semibold hover:underline">
                      {item.texto}
                    </a>
                  ) : (
                    <p className="text-[#555f63] font-semibold">{item.texto}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Formulário */}
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <h3 className="font-black text-[#1a2e35] text-xl mb-6">Envie uma mensagem</h3>

            {enviado ? (
              <div className="text-center py-10">
                <div className="text-5xl mb-4">✅</div>
                <p className="font-bold text-[#1a2e35] text-lg">Seu cliente de e-mail foi aberto!</p>
                <p className="text-[#555f63] text-sm mt-2">Finalize o envio pelo seu e-mail.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-[#1a2e35] mb-1.5">Seu nome</label>
                  <input
                    type="text"
                    required
                    placeholder="Como podemos te chamar?"
                    value={form.nome}
                    onChange={(e) => setForm({ ...form, nome: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#3aaea9] focus:ring-2 focus:ring-[#3aaea9]/20 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#1a2e35] mb-1.5">E-mail</label>
                  <input
                    type="email"
                    required
                    placeholder="seu@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#3aaea9] focus:ring-2 focus:ring-[#3aaea9]/20 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#1a2e35] mb-1.5">Mensagem</label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Como podemos ajudar?"
                    value={form.mensagem}
                    onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#3aaea9] focus:ring-2 focus:ring-[#3aaea9]/20 transition resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#3aaea9] text-white font-bold py-3.5 rounded-xl hover:bg-[#2a8a86] transition-colors"
                >
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
