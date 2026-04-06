import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #1a2e35 0%, #2a8a86 60%, #3aaea9 100%)" }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px),
                            radial-gradient(circle at 80% 20%, white 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Big decorative circle */}
      <div className="absolute -right-32 -top-32 w-[600px] h-[600px] rounded-full bg-white/5 border border-white/10" />
      <div className="absolute -right-16 top-16 w-[400px] h-[400px] rounded-full bg-white/5 border border-white/10" />

      <div className="relative max-w-6xl mx-auto px-4 pt-24 pb-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Text side */}
        <div className="text-white animate-fade-up">
          <span className="inline-block bg-white/20 text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
            Desde 18 de Janeiro de 1983 • Sobral-CE
          </span>

          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6">
            Transformando<br />
            <span className="text-[#7fdbd8]">vidas</span> e<br />
            construindo futuros
          </h1>

          <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-md">
            A SAFS – Sociedade de Apoio à Família Sobralense atua há mais de 42 anos
            no bairro Dom José, levando educação, bem-estar e cidadania a crianças,
            adolescentes e famílias da comunidade.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projetos"
              className="bg-white text-[#2a8a86] font-bold px-7 py-3.5 rounded-full hover:bg-[#e8f7f7] transition-colors shadow-lg"
            >
              Conheça nossos projetos
            </a>
            <a
              href="#doacao"
              className="bg-[#e02020] text-white font-bold px-7 py-3.5 rounded-full hover:bg-red-700 transition-colors shadow-lg"
            >
              Faça uma Doação
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-12 pt-8 border-t border-white/20">
            {[
              { num: "42+", label: "Anos de história" },
              { num: "4",   label: "Projetos ativos" },
              { num: "50+", label: "Idosos atendidos" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-black text-[#7fdbd8]">{s.num}</div>
                <div className="text-white/70 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Image side */}
        <div className="relative flex justify-center animate-fade-in delay-300">
          {/* Teal circle behind */}
          <div className="absolute w-80 h-80 md:w-96 md:h-96 rounded-full bg-white/10 border-2 border-white/20" />
          <div className="relative z-10 w-72 h-72  rounded-full overflow-hidden border-4 border-white/30 shadow-2xl"
            style={{ width: "320px", height: "320px" }}>
            <Image
              src="/images/familia.png"
              alt="Família atendida pela SAFS"
              fill
              className="object-cover"
            />
          </div>
          {/* Floating badge */}
          <div className="absolute bottom-4 -left-4 bg-white rounded-2xl px-4 py-3 shadow-xl animate-fade-up delay-500">
            <div className="flex items-center gap-3">
              <Image src="/images/logo-viver.png" alt="Viver+" width={40} height={46} className="object-contain" />
              <div>
                <div className="font-black text-[#1a2e35] text-sm">Projeto Viver+</div>
                <div className="text-[#3aaea9] text-xs font-semibold">SAFS Dom José</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80L1440 80L1440 30C1200 70 960 0 720 20C480 40 240 10 0 30L0 80Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
