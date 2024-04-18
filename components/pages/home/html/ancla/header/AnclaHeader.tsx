import BarraNav from "@/components/layout/header/cabeza";
import Head from "next/head";

export default function AnclaHeader(){
    return(
      <div>
        <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <BarraNav/>
      </div>
    )
}