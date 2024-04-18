import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Saludo from "@/components/layout/main/saludos";

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
      <Saludo/>
      </header>
      <main>
      <h1>DOCUMENTACIÓN PROFESIONAL HTML</h1>
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