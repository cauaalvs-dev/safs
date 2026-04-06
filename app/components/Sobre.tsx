import Image from "next/image";

export default function Sobre() {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#3aaea9] font-bold text-sm tracking-widest uppercase">Quem somos</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#1a2e35] mt-2">Sobre a SAFS</h2>
        </div>

        {/* About grid */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          {/* Images */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <Image src="/images/sobre.png" alt="Sobre a SAFS" width={700} height={480} className="w-full h-auto object-cover" />
            </div>
            {/* Badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#3aaea9] text-white rounded-2xl px-6 py-4 shadow-xl">
              <div className="text-3xl font-black">1983</div>
              <div className="text-xs font-semibold opacity-90">Fundação</div>
            </div>
          </div>

          {/* Text */}
          <div>
            <h3 className="text-2xl font-black text-[#1a2e35] mb-4">
              Uma organização sem fins lucrativos com 42 anos de história
            </h3>
            <p className="text-[#555f63] leading-relaxed mb-4">
              A SAFS é comprometida com a promoção humana, pautada pelo respeito, ética,
              transparência e responsabilidade. Oferecemos formação humana e profissional,
              buscando melhorar a qualidade de vida da comunidade.
            </p>
            <p className="text-[#555f63] leading-relaxed mb-8">
              <strong className="text-[#1a2e35]">Fundada em 18/01/1983</strong>, atuamos com dedicação contínua no
              desenvolvimento de ações sociais voltadas a crianças, adolescentes e famílias do
              bairro Dom José, em Sobral-CE.
            </p>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "🤝", label: "Respeito" },
                { icon: "🔍", label: "Transparência" },
                { icon: "⚖️", label: "Ética" },
                { icon: "💡", label: "Responsabilidade" },
              ].map((v) => (
                <div key={v.label} className="flex items-center gap-3 bg-[#e8f7f7] rounded-xl px-4 py-3">
                  <span className="text-xl">{v.icon}</span>
                  <span className="font-bold text-[#1a2e35] text-sm">{v.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Para quem atuamos */}
        <div className="rounded-3xl overflow-hidden shadow-lg">
          <Image
            src="/images/para-quem-atuamos.png"
            alt="Para quem atuamos"
            width={1200}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Áreas de atuação */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <span className="text-[#3aaea9] font-bold text-sm tracking-widest uppercase">O que fazemos</span>
            <h2 className="text-4xl font-black text-[#1a2e35] mt-2">Áreas de Atuação</h2>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/images/areas-atuacao.png"
              alt="Áreas de atuação da SAFS"
              width={1200}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
