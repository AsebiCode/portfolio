'use client'

import { useEffect } from 'react'
import './App.css'
import Lenis from 'lenis';
import Header from './components/Header'
import MuitosP from './components/MuitosP';
import Inicio from './components/Inicio';

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
    <MuitosP />
    </>
  )
}

export default App
