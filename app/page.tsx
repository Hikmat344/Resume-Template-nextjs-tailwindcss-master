import About from "@/Components/About";
import { Herosec } from "@/Components/Herosec";
import Portfolio from "@/Components/Portfolio";
import Skills from "@/Components/Skills";
import Contact from "@/Components/Contact";



export default function Home() {
  return (
    <>
    <Herosec />
    <About /> 
     <Portfolio />
     <Skills/>
     <Contact/>
     
    </>
  );
}