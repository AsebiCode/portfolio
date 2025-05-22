import './App.css'
import { useEffect } from 'react'
import Lenis from 'lenis';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/Header'
import Inicio from './components/Inicio';
import SobreMim from './components/SobreMim';
import Habilidades from './components/Habilidades';

function App() {
  useEffect(() => {
    // Scroll Suave
    const lenis = new Lenis()
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    // Aparecimento dos elementos conforme scroll
    AOS.init({
      duration: 800,
      once: true
    });
  }, []);

  return (
    <>
    <Header />
    <Inicio />
    <SobreMim />
    <Habilidades />
    </>
  )
}

export default App
