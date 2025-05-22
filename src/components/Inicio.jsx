import { motion } from 'framer-motion'
import imagemInicio from '../assets/pfp.jpg'
import { ReactTyped } from 'react-typed';
import {
  IoLogoLinkedin,
  IoLogoGithub,
  IoMail
} from "react-icons/io5";

import styles from './Inicio.module.css'

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.3,
      duration: 0.6,
      ease: "easeOut"
    }
  })
}

const Inicio = () => {
  return (
  <>
  <section className="flex flex-col justify-center items-center min-h-screen pt-20 bg-indigo-500">
      <motion.img
      custom={0}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variants}
      className="mb-5 w-[30vh] object-cover rounded-[60%_40%_65%_35%/45%_60%_40%_55%]"
      src={imagemInicio}/>

      <motion.p
       custom={1}
       initial="hidden"
       whileInView="visible"
       viewport={{ once: true }}
       variants={variants}
       className="text-[3vh] font-bold text-slate-900">
        Olá, me chamo Isa Souza
      </motion.p>

      <motion.h1
        custom={2}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={variants}
        className="text-[6.5vh] text-white font-extrabold">

        <ReactTyped
         strings={["Dev Front-End", "UX Designer"]}
         typeSpeed={100}
         backSpeed={20}
         loop cursorChar="|"
         showCursor={true} />
      </motion.h1>

      <motion.p
        custom={3}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={variants}
        className="mt-5 text-base my-0 mx-[1.5vh] text-[2.3vh] text-center">
        Estudante de Ciência da Computação, Técnica em Desenvolvimento de Sistemas, utilizo React e Tailwind.
      </motion.p>

      <motion.section
        custom={4}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={variants}
        className={`${styles.links} flex flex-row justify-center gap-6 mt-6 w-1/2`}>
        <a href="https://www.linkedin.com/in/isabelly-souza-e-oliveira/" target="_blank"><IoLogoLinkedin /></a>
        <a href="https://github.com/AsebiCode" target="_blank"><IoLogoGithub /></a>
        <a href="mailto:isabellyseoliveira@gmail.com"><IoMail /></a>
      </motion.section>
    </section>
  </>
  )
}

export default Inicio