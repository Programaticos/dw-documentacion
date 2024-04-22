import Head from "next/head";
import { Inter } from "next/font/google";
import BarraNav from "@/components/layout/header/BarraNavegador";
import Contador from "@/components/layout/footer/contador";
import TituloPagina from "@/components/layout/header/TituloPagina";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <TituloPagina titulo="Documentación completa desarrollo de interfaces"></TituloPagina>
        <BarraNav/>
        <TituloPagina></TituloPagina>
      </header>
      <main>
        
        <hr />
      </main>
      <footer>
      <Contador/>
      </footer>
    </>
  );
}
