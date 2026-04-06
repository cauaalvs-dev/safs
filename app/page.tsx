import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Projetos from "./components/Projetos";
import Galeria from "./components/Galeria";
import Doacao from "./components/Doacao";
import Contato from "./components/Contato";
import Footer from "./components/Footer";
import SkipLink from "./components/SkipLink";

export default function Home() {
  return (
    <>
      <SkipLink />
      <Navbar />
      <main id="conteudo-principal">
        <Hero />
        <Sobre />
        <Projetos />
        <Galeria />
        <Doacao />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
