import EncabezadoFooter from "@/components/pages/home/html/encabezado/footer/EncabezadoFooter";
import EncabezadoHeader from "@/components/pages/home/html/encabezado/header/EncabezadoHeader";
import EncabezadoMain from "@/components/pages/home/html/encabezado/main/EncabezadoMain";

export default function Home() {
  return (
    <>
      
      <header>
      <EncabezadoHeader/>
      </header>
      <main>
        <EncabezadoMain/>
      </main>
      <footer>
        <EncabezadoFooter/>
      </footer>
    </>
  );
}
