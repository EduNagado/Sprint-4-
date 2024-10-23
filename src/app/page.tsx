import Footer from "@/components/footer/page";
import "./globals.css";
import Header from "@/components/header/page";
import Sobre from "./sobre/page";
import Home from "./home/page";
import Ajuda from "./ajuda/page";
import AreaDeAtuacao from "./AreaDeAtuacao/page";

// Importamos dois icons: npm install @heroicons/react / npm install react-icons/  npm install @headlessui/react

export default function App() {
  return (
    <>
      <Header/>
      <Home />
      <Ajuda/>
      <Sobre />
      <AreaDeAtuacao/>
      <Footer/>
      
    </>
  );
}
