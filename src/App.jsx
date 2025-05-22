import './App.css'
import { useEffect } from 'react'
import Lenis from 'lenis';

import Header from './components/Header'
import Inicio from './components/Inicio';
import SobreMim from './components/SobreMim';

function App() {
  // Scroll Suave
  useEffect(() => {
    const lenis = new Lenis()
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, []);

  return (
    <>
    <Header />
    <Inicio />
    <SobreMim />
    </>
  )
}

export default App
