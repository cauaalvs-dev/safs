import Image from "next/image";

const projetos = [
  {
    id: "feliz-idade",
    logo: "/images/logo-feliz-idade.png",
    logoAlt: "Feliz Idade",
    cor: "#a855f7",
    corBg: "#faf5ff",
    titulo: "Projeto Feliz Idade",
    subtitulo: "Cuidado, respeito e qualidade de vida para quem já viveu tantas histórias.",
    descricao: `O Projeto Feliz Idade é uma das ações mais significativas da SAFS, voltado especialmente para o acolhimento e bem-estar dos idosos do bairro Dom José, em Sobral.
    
Por meio de uma parceria com o SESC Sobral, o projeto atende cerca de 50 idosos com uma programação diversificada que estimula o corpo, a mente e os vínculos sociais.`,
    atividades: [
      "Oficinas de artesanato e expressão manual",
      "Atividades físicas e recreativas adaptadas",
      "Momentos culturais: dança, música e passeios",
      "Rodas de conversa e escuta ativa",
      "Palestras sobre saúde e direitos da pessoa idosa",
    ],
    detalhe: "Ocorre todas as quartas-feiras",
  },
  {
    id: "ceara-sem-fome",
    logo: "/images/logo-ceara-sem-fome.png",
    logoAlt: "Ceará Sem Fome",
    cor: "#2563eb",
    corBg: "#eff6ff",
    titulo: "Ceará Sem Fome",
    subtitulo: "Uma rede solidária para garantir o direito básico à alimentação.",
    descricao: `A SAFS é uma das entidades mobilizadas no programa Ceará Sem Fome, iniciativa do Governo do Estado que tem como objetivo combater a fome e a insegurança alimentar.`,
    atividades: [
      "Recebimento e organização de alimentos da rede estadual",
      "Preparo de refeições com normas sanitárias e nutricionais",
      "Entregas humanizadas com cadastro dos beneficiários",
      "Garantia de alimentação diária para dezenas de famílias",
    ],
    detalhe: "Impacto: apoio emergencial a pessoas em risco social",
  },
  {
    id: "lixo-destino",
    logo: "/images/logo-lixo-destino.jpg",
    logoAlt: "Lixo com Destino",
    cor: "#16a34a",
    corBg: "#f0fdf4",
    titulo: "Lixo com Destino",
    subtitulo: "Cuidar do planeta começa com pequenas atitudes.",
    descricao: `O projeto Lixo com Destino é uma iniciativa de educação ambiental e responsabilidade coletiva que visa promover a destinação correta dos resíduos sólidos, incentivando a reciclagem.`,
    atividades: [
      "Ponto fixo para entrega de recicláveis na SAFS",
      "Palestras e oficinas educativas com apoio da gestão municipal",
      "Encaminhamento a cooperativas e empresas recicladoras",
      "Atividades lúdicas com crianças e adolescentes",
    ],
    detalhe: "Parceria com a gestão municipal de Sobral",
  },
  {
    id: "virando-jogo",
    logo: "/images/logo-virando-jogo.png",
    logoAlt: "Virando o Jogo",
    cor: "#dc2626",
    corBg: "#fef2f2",
    titulo: "Projeto Virando o Jogo",
    subtitulo: "Uma nova chance para nossa juventude reescrever sua história.",
    descricao: `Na SAFS, acreditamos no poder da transformação social através da educação, do cuidado e da oportunidade. Somos parceiros do Projeto Virando o Jogo, iniciativa do Governo do Estado voltada a jovens em situação de vulnerabilidade.`,
    atividades: [
      "Formação cidadã e oficinas comunitárias",
      "Cursos profissionalizantes gratuitos (parceria SENAC)",
      "Apoio psicossocial e escuta ativa",
      "Encaminhamento para retorno à escola (EJA, CEJA)",
      "Bolsa auxílio para participantes",
    ],
    detalhe: "Iniciativa do Governo do Estado do Ceará",
  },
];

export default function Projetos() {
  return (
    <section id="projetos" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#3aaea9] font-bold text-sm tracking-widest uppercase">Nossa atuação</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#1a2e35] mt-2">Projetos e Programas</h2>
          <p className="text-[#555f63] mt-4 max-w-2xl mx-auto">
            Conheça as iniciativas que transformam vidas no bairro Dom José há mais de quatro décadas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projetos.map((p, i) => (
            <div
              key={p.id}
              className="rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white"
            >
              {/* Card header */}
              <div className="px-8 pt-8 pb-6" style={{ backgroundColor: p.corBg }}>
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden bg-white shadow flex items-center justify-center flex-shrink-0">
                    <Image src={p.logo} alt={p.logoAlt} width={80} height={80} className="object-contain p-1" />
                  </div>
                  <div>
                    <h3 className="font-black text-xl text-[#1a2e35] leading-tight">{p.titulo}</h3>
                    <p className="text-sm mt-1 font-semibold" style={{ color: p.cor }}>{p.subtitulo}</p>
                  </div>
                </div>
              </div>

              {/* Card body */}
              <div className="px-8 py-6">
                <p className="text-[#555f63] text-sm leading-relaxed mb-5">{p.descricao}</p>

                <h4 className="font-black text-[#1a2e35] text-sm mb-3">Atividades:</h4>
                <ul className="space-y-2 mb-5">
                  {p.atividades.map((a) => (
                    <li key={a} className="flex items-start gap-2 text-sm text-[#555f63]">
                      <span className="mt-1 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: p.cor }}>
                        <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                          <path d="M1 3L3 5L7 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      {a}
                    </li>
                  ))}
                </ul>

                <div className="rounded-xl px-4 py-2.5 text-xs font-bold" style={{ backgroundColor: p.corBg, color: p.cor }}>
                  📍 {p.detalhe}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
