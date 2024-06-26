import Head from "next/head";
import { Inter } from "next/font/google";
import BarraNav from "@/components/layout/header/BarraNavegador";

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
      <BarraNav/>
      </header>
      <main>
        <h1>Listas</h1>
        <ul>
            <h3>Lista desordenada</h3>
            <li>Esto</li>
            <li>es</li>
            <li>una lista</li>
            <li>desordenada</li>
        </ul>
        <ol>
            <h3>Lista ordenada</h3>
            <li>Esto</li>
            <li>es</li>
            <li>una lista</li>
            <li>ordenada</li>
        </ol>
      </main>
      <footer></footer>
    </>
  );
}
