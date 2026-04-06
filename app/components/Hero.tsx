import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #1a2e35 0%, #2a8a86 60%, #3aaea9 100%)" }}
    >
      {/* Decorative circles */}
      <div className="absolute -right-32 -top-32 w-[500px] h-[500px] rounded-full bg-white/5 border border-white/10 pointer-events-none" />
      <div className="absolute -right-16 top-20 w-[320px] h-[320px] rounded-full bg-white/5 border border-white/10 pointer-events-none" />

      <div className="relative w-full max-w-6xl mx-auto px-6 pt-28 pb-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="text-white animate-fade-up">
          <span className="inline-block bg-white/20 text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
            Desde 18 de Janeiro de 1983 • Sobral-CE
          </span>

          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6">
            Transformando<br />
            <span style={{ color: "#7fdbd8" }}>vidas</span> e<br />
            construindo futuros
          </h1>

          <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8 max-w-md">
            A SAFS atua há mais de 42 anos no bairro Dom José, levando educação,
            bem-estar e cidadania a crianças, adolescentes e famílias da comunidade.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#projetos"
              className="bg-white text-[#2a8a86] font-bold px-7 py-3.5 rounded-full hover:bg-[#e8f7f7] transition-colors shadow-lg">
              Conheça nossos projetos
            </a>
            <a href="#doacao"
              className="bg-[#e02020] text-white font-bold px-7 py-3.5 rounded-full hover:bg-red-700 transition-colors shadow-lg">
              Faça uma Doação
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-12 pt-8 border-t border-white/20">
            {[
              { num: "42+", label: "Anos de história" },
              { num: "4",   label: "Projetos ativos" },
              { num: "50+", label: "Idosos atendidos" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-black" style={{ color: "#7fdbd8" }}>{s.num}</div>
                <div className="text-white/70 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="relative flex justify-center items-center animate-fade-in delay-300">
          <div className="absolute w-80 h-80 rounded-full bg-white/10 border-2 border-white/20" />
          <div className="relative rounded-full overflow-hidden border-4 border-white/30 shadow-2xl"
            style={{ width: 320, height: 320 }}>
            <Image src="/images/familia.png" alt="Família" fill className="object-cover" />
          </div>
          {/* Badge */}
          <div className="absolute bottom-2 -left-2 bg-white rounded-2xl px-4 py-3 shadow-xl animate-fade-in delay-500">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10">
                <Image src="/images/logo-viver.png" alt="Viver+" fill className="object-contain" />
              </div>
              <div>
                <div className="font-black text-[#1a2e35] text-sm">Projeto Viver+</div>
                <div className="text-xs font-semibold" style={{ color: "#3aaea9" }}>SAFS Dom José</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 70" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block" }}>
          <path d="M0 70L1440 70L1440 25C1200 65 960 0 720 18C480 36 240 8 0 25L0 70Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
