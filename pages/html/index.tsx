import Head from "next/head";
import { Inter } from "next/font/google";
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
      <TituloPagina titulo="Documentación de HTML"></TituloPagina>
      
      </header>
      <main>
        <div>
          <a href="/html/encabezados">Encabezados  &lt;h1&gt; &lt;h2&gt;</a>
        </div>
        <div>
          <a href="/html/parrafo" title="Página dedicada a los párrafos de HTML">Párrafos  &lt;p&gt;</a>
        </div>
        <div>
          <a href="/html/listas">Listas  &lt;ol&gt; &lt;ul&gt;</a>
        </div>
        <div>
          <a href="/html/ancla">Anclas  &lt;a&gt; &lt;a/&gt;</a>
        </div>
        <div>
          <a href="/html/tabla">Tablas &lt;table&gt;</a>
        </div>
        <div>
          <a href="/html/form">Formulario</a>
        </div>
        <div>
            <br /><br />
            <button><a href="./">Botón Menú</a></button>
        </div>
      </main>
      <footer></footer>
    </>
  );
}
