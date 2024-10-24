import Footer from "@/components/footer/page";
import Header from "@/components/header/page";
import AreaDeAtuacao from "./AreaDeAtuacao/page";
import Ajuda from "./ajuda/page";
import "./globals.css";
import Home from "./home/page";
import Sobre from "./sobre/page";

// Importamos dois icons: npm install @heroicons/react / npm install react-icons/  npm install @headlessui/react

export default function App() {
  return (
    <>
      <Header />
      <Home />
      <Ajuda />
      <Sobre />
      <AreaDeAtuacao />
      <Footer />

    </>
  );
}
