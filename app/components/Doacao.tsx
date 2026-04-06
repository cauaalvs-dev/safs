export default function Doacao() {
  return (
    <section id="doacao" className="py-24"
      style={{ background: "linear-gradient(135deg, #1a2e35 0%, #2a8a86 100%)" }}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <span className="inline-block bg-white/20 text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
          Apoie nossa causa
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
          Faça sua <span className="text-[#7fdbd8]">Doação</span>
        </h2>
        <p className="text-white/80 text-lg max-w-2xl mx-auto mb-12">
          Sua contribuição transforma vidas no bairro Dom José. Cada doação é um passo a mais
          na construção de um futuro melhor para crianças, adolescentes e famílias de Sobral.
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* PIX */}
          <div className="bg-white rounded-3xl p-8">
            <div className="text-4xl mb-3">💳</div>
            <h3 className="font-black text-[#1a2e35] text-xl mb-4">PIX</h3>
            <div className="bg-[#e8f7f7] rounded-xl p-4 text-left space-y-2">
              <div>
                <span className="text-xs font-bold text-[#555f63] uppercase tracking-wide">Banco</span>
                <p className="font-bold text-[#1a2e35]">Caixa Econômica Federal</p>
              </div>
              <div>
                <span className="text-xs font-bold text-[#555f63] uppercase tracking-wide">Agência / Op / Conta</span>
                <p className="font-bold text-[#1a2e35]">0554 / Op: 1388 / 720019831-6</p>
              </div>
              <div>
                <span className="text-xs font-bold text-[#555f63] uppercase tracking-wide">Instituição</span>
                <p className="font-bold text-[#1a2e35] text-sm">Sociedade de Apoio à Família Sobralense</p>
              </div>
            </div>
          </div>

          {/* QR Code */}
          <div className="bg-white rounded-3xl p-8 flex flex-col items-center justify-center">
            <div className="text-4xl mb-3">📱</div>
            <h3 className="font-black text-[#1a2e35] text-xl mb-2">QR Code PIX</h3>
            <p className="text-[#555f63] text-sm mb-4">Entre em contato para receber o QR Code de doação:</p>
            <a
              href="mailto:safs3388@gmail.com"
              className="bg-[#3aaea9] text-white font-bold px-6 py-3 rounded-full text-sm hover:bg-[#2a8a86] transition-colors"
            >
              safs3388@gmail.com
            </a>
          </div>
        </div>

        <p className="text-white/60 text-sm mt-8">
          Todas as doações são revertidas integralmente para os projetos sociais da SAFS.
        </p>
      </div>
    </section>
  );
}
