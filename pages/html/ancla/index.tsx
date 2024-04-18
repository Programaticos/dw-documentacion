import AnclaMain from "@/components/pages/home/html/ancla/main/AnclaMain";
import AnclaHeader from "@/components/pages/home/html/ancla/header/AnclaHeader";
import AnclaFooter from "@/components/pages/home/html/ancla/footer/AnclaFooter";


export default function Home() {
  return (
    <>
      
      <header>
        <AnclaHeader/>
      </header>
      <main>
        <AnclaMain/>
      </main>
      <footer>
        <AnclaFooter/>
      </footer>
    </>
  );
}