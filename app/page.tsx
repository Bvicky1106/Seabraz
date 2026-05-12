import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CookiePopup from "./components/CookiePopup";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Contact />
        <CookiePopup />
      </main>
      <Footer />
    </>
  );
}
