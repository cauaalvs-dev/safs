import Image from "next/image";

const navLinks = [
  { label: "Início",   href: "#inicio" },
  { label: "Sobre",    href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Galeria",  href: "#galeria" },
  { label: "Contato",  href: "#contato" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a2e35] text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Image src="/images/logo-viver.png" alt="SAFS Viver+" width={70} height={80} className="object-contain mb-4" />
            <p className="text-white/60 text-sm leading-relaxed">
              Sociedade de Apoio à Família Sobralense. Transformando vidas no bairro Dom José desde 1983.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-black text-sm uppercase tracking-wider mb-4">Navegação</h4>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-white/60 text-sm hover:text-[#7fdbd8] transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-black text-sm uppercase tracking-wider mb-4">Contato</h4>
            <div className="space-y-2 text-sm text-white/60">
              <p>📍 Bairro Dom José, Sobral – CE</p>
              <a href="tel:+558836117380" className="block hover:text-[#7fdbd8] transition-colors">
                📞 (88) 3611-7380
              </a>
              <a href="mailto:safs3388@gmail.com" className="block hover:text-[#7fdbd8] transition-colors">
                ✉️ safs3388@gmail.com
              </a>
              <a href="https://instagram.com/safs.dom.jose" target="_blank" rel="noopener noreferrer"
                className="block hover:text-[#7fdbd8] transition-colors">
                📸 @safs.dom.jose
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-white/40 text-xs">
          © {new Date().getFullYear()} SAFS – Sociedade de Apoio à Família Sobralense. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
