import BarraNav from "@/components/layout/header/BarraNavegador";
import TituloPagina from "@/components/layout/header/TituloPagina";
import MainCSS from "@/components/pages/home/css/main/CSSMain";
import MainContainerCss from "@/components/pages/home/css/main/MainContainerCSS";
import SelectorCSS from "@/components/pages/home/css/main/SelectorCSS";

export default function CSSPage() {
  return (
    <>
      <header>
        <TituloPagina titulo="Documentación de CSS"></TituloPagina>
        <BarraNav />
      </header>
      <main>
        <MainCSS />
        <h1>Estilos en CSS</h1>
      </main>
      <footer></footer>
    </>
  );
}
