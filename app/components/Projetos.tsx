import Image from "next/image";

const projetos = [
  {
    logo: "/images/logo-feliz-idade.png", logoAlt: "Feliz Idade",
    cor: "#a855f7", corBg: "#faf5ff",
    titulo: "Projeto Feliz Idade",
    subtitulo: "Cuidado, respeito e qualidade de vida para quem já viveu tantas histórias.",
    descricao: "O Projeto Feliz Idade é uma das ações mais significativas da SAFS, voltado para o acolhimento e bem-estar dos idosos do bairro Dom José. Em parceria com o SESC Sobral, atende cerca de 50 idosos com programação diversificada.",
    atividades: ["Oficinas de artesanato e expressão manual","Atividades físicas e recreativas adaptadas","Momentos culturais: dança, música e passeios","Rodas de conversa e escuta ativa","Palestras sobre saúde e direitos da pessoa idosa"],
    detalhe: "Ocorre todas as quartas-feiras",
  },
  {
    logo: "/images/logo-ceara-sem-fome.png", logoAlt: "Ceará Sem Fome",
    cor: "#2563eb", corBg: "#eff6ff",
    titulo: "Ceará Sem Fome",
    subtitulo: "Uma rede solidária para garantir o direito básico à alimentação.",
    descricao: "A SAFS é uma das entidades mobilizadas no programa Ceará Sem Fome, iniciativa do Governo do Estado para combater a fome e a insegurança alimentar no bairro Dom José.",
    atividades: ["Recebimento e organização de alimentos da rede estadual","Preparo de refeições com normas sanitárias e nutricionais","Entregas humanizadas com cadastro dos beneficiários","Garantia de alimentação diária para dezenas de famílias"],
    detalhe: "Apoio emergencial a pessoas em risco social",
  },
  {
    logo: "/images/logo-lixo-destino.jpg", logoAlt: "Lixo com Destino",
    cor: "#16a34a", corBg: "#f0fdf4",
    titulo: "Lixo com Destino",
    subtitulo: "Cuidar do planeta começa com pequenas atitudes.",
    descricao: "O projeto Lixo com Destino é uma iniciativa de educação ambiental que promove a destinação correta dos resíduos sólidos, incentivando a reciclagem e a preservação do meio ambiente.",
    atividades: ["Ponto fixo para entrega de recicláveis na SAFS","Palestras e oficinas educativas com apoio municipal","Encaminhamento a cooperativas e empresas recicladoras","Atividades lúdicas com crianças e adolescentes"],
    detalhe: "Parceria com a gestão municipal de Sobral",
  },
  {
    logo: "/images/logo-virando-jogo.png", logoAlt: "Virando o Jogo",
    cor: "#dc2626", corBg: "#fef2f2",
    titulo: "Projeto Virando o Jogo",
    subtitulo: "Uma nova chance para nossa juventude reescrever sua história.",
    descricao: "A SAFS é parceira do Projeto Virando o Jogo, iniciativa do Governo do Estado voltada a jovens em situação de vulnerabilidade, oferecendo educação, apoio e oportunidades reais.",
    atividades: ["Formação cidadã e oficinas comunitárias","Cursos profissionalizantes gratuitos (parceria SENAC)","Apoio psicossocial e escuta ativa","Encaminhamento para retorno à escola (EJA, CEJA)"],
    detalhe: "Iniciativa do Governo do Estado do Ceará",
  },
];

export default function Projetos() {
  return (
    <section id="projetos" style={{ padding: "100px 0", background: "#f8fafc" }}>
      <div className="section-inner" style={{ maxWidth: 1152, margin: "0 auto", padding: "0 40px" }}>
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <span style={{ color: "#3aaea9", fontWeight: 800, fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase" }}>Nossa atuação</span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 900, color: "#1a2e35", marginTop: 10, marginBottom: 14 }}>Projetos e Programas</h2>
          <p style={{ color: "#555f63", maxWidth: 540, margin: "0 auto", lineHeight: 1.75, fontSize: 15 }}>
            Iniciativas que transformam vidas no bairro Dom José há mais de quatro décadas.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 28 }} className="projetos-grid">
          {projetos.map((p) => (
            <div key={p.titulo} className="card-projeto">
              {/* Header do card */}
              <div style={{ padding: "28px 32px 24px", background: p.corBg }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 18 }}>
                  <div style={{ width: 68, height: 68, borderRadius: 16, background: "white", boxShadow: "0 2px 10px rgba(0,0,0,0.08)", flexShrink: 0, position: "relative", overflow: "hidden" }}>
                    <Image src={p.logo} alt={p.logoAlt} fill style={{ objectFit: "contain", padding: 8 }} />
                  </div>
                  <div>
                    <h3 style={{ fontWeight: 900, fontSize: "1.05rem", color: "#1a2e35", marginBottom: 6, lineHeight: 1.3 }}>{p.titulo}</h3>
                    <p style={{ fontSize: 13, fontWeight: 700, color: p.cor, lineHeight: 1.4 }}>{p.subtitulo}</p>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div style={{ padding: "24px 32px 32px" }}>
                <p style={{ color: "#555f63", fontSize: 14, lineHeight: 1.8, marginBottom: 20 }}>{p.descricao}</p>
                <p style={{ fontWeight: 800, fontSize: 11, color: "#1a2e35", marginBottom: 14, textTransform: "uppercase", letterSpacing: "0.1em" }}>Atividades</p>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
                  {p.atividades.map((a) => (
                    <li key={a} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "#555f63" }}>
                      <span style={{ width: 18, height: 18, borderRadius: "50%", background: p.cor, flexShrink: 0, marginTop: 2, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <svg width="8" height="6" viewBox="0 0 8 6" fill="none"><path d="M1 3L3 5L7 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </span>
                      {a}
                    </li>
                  ))}
                </ul>
                <div style={{ background: p.corBg, borderRadius: 10, padding: "10px 16px", fontSize: 13, fontWeight: 700, color: p.cor }}>
                  {p.detalhe}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .projetos-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
