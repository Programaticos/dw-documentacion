import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Saludo from "@/components/layout/main/saludos";
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
        <h1>Tablas</h1>
        <p>Las tablas en HTML se escriben con la etiqueta &lt;table&gt;. Dentro de la tabla hay varios
            elementos.
        </p>
        <h2>thead</h2>
        <p>
            Se utiliza para definir la primera fila, donde vienen los nombres de los campos. Su etiqueta es &lt;thead&gt;
        </p>
        <h2>th</h2>
        <p>
            
        </p>
        <h4>Ejemplo</h4>
        <table border={5}>
            <thead>
                <tr>
                    <th scope="col">Person</th>
                    <th scope="col">Age</th>
                    <th scope="col">Weight in kg</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Dani</th>
                    <td>24</td>
                    <td>67</td>
                </tr>
                <tr>
                    <th>Antonio</th>
                    <td>12</td>
                    <td>45</td>
                </tr>
                <tr>
                    <th>Marta</th>
                    <td>34</td>
                    <td>82</td>
                </tr>
            </tbody>
        </table>
        <p>Así es como está escrita la tabla:</p>
        <p><pre>
<br/>&lt;table border="5"&gt;
<br/>&lt;thead&gt;<br/>
<br/>&lt;tr&gt;<br/>
<br/>  &lt;th scope="col"&gt;Person&lt;/th&gt;<br/>
<br/>  &lt;th scope="col"&gt;Age&lt;/th&gt;<br/>
<br/>  &lt;th scope="col"&gt;Weight in kg&lt;/th&gt;<br/>
<br/>&lt;/tr&gt;<br/>
<br/>&lt;/thead&gt;<br/>
<br/>&lt;tbody&gt;<br/>
<br/>    &lt;tr&gt;<br/>
<br/>  &lt;th&gt;Dani&lt;/th&gt;<br/>
<br/>  &lt;td&gt;24&lt;/td&gt;<br/>
<br/>  &lt;td&gt;67&lt;/td&gt;<br/>
<br/>&lt;/tr&gt;<br/>
<br/>&lt;tr&gt;<br/>
<br/>  &lt;th&gt;Antonio&lt;/th&gt;<br/>
<br/>  &lt;td&gt;12&lt;/td&gt;<br/>
<br/>  &lt;td&gt;45&lt;/td&gt;<br/>
<br/>&lt;/tr&gt;<br/>
<br/>&lt;tr&gt;<br/>
<br/>  &lt;th&gt;Marta&lt;/th&gt;<br/>
<br/>  &lt;td&gt;34&lt;/td&gt;<br/>
<br/>  &lt;td&gt;82&lt;/td&gt;<br/>
<br/>&lt;/tr&gt;<br/>
<br/>&lt;/tbody&gt;<br/>
<br/>&lt;/table&gt;<br/>

</pre>
</p>
        <p><a href="/html">Anterior</a></p>        
        <p><a href="/..">Home</a></p>
      </main>
      <footer>
        
      </footer>
    </>
  );
}