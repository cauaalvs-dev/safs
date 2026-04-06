import Image from "next/image";

const fotos = [
  { src: "/images/criancas-parque.png",    alt: "Crianças no parque com uniforme SAFS", tall: true },
  { src: "/images/criancas-piscina.png",   alt: "Crianças na piscina" },
  { src: "/images/criancas-quadra.png",    alt: "Jovens na quadra da SAFS" },
  { src: "/images/para-quem-atuamos2.png", alt: "Crianças e famílias atendidas" },
  { src: "/images/foto1.png",              alt: "Atividade da SAFS" },
  { src: "/images/foto2.png",              alt: "Comunidade Dom José" },
];

export default function Galeria() {
  return (
    <section id="galeria" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#3aaea9] font-bold text-sm tracking-widest uppercase">Momentos</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#1a2e35] mt-2">Nossa Galeria</h2>
          <p className="text-[#555f63] mt-4 max-w-xl mx-auto">
            Cada foto conta uma história de superação, alegria e comunidade.
          </p>
        </div>

        {/* Grid simples e confiável */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {fotos.map((f, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:scale-[1.02] relative"
              style={{ height: "240px" }}
            >
              <Image
                src={f.src}
                alt={f.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://instagram.com/safs.dom.jose"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:opacity-90 transition-opacity"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            @safs.dom.jose
          </a>
        </div>
      </div>
    </section>
  );
}
