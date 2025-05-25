import {
    SiHtml5,
    SiCss3,
    SiSass,
    SiTailwindcss,
    SiJavascript,
    SiReact
} from "react-icons/si";

import styles from './styles/HabilidadesFrontEnd.module.css'

const HabilidadesFrontEnd = () => {
  return (
    <>
    <div className={`${styles.caixa} ${styles.html} bg-white`}> 
        <SiHtml5 className={`${styles.icon} text-[6vh] text-indigo-500`}/>
        <p>HTML</p>
    </div>
    <div className={`${styles.caixa} ${styles.css} bg-white`}>
        <SiCss3 className={`${styles.icon} text-[6vh] text-indigo-500`}/>
        <p>CSS</p>
    </div>
    <div className={`${styles.caixa} ${styles.sass} bg-white`}>
        <SiSass className={`${styles.icon} text-[6vh] text-indigo-500`}/>
        <p>SASS</p>
    </div>
    <div className={`${styles.caixa} ${styles.tailwind} bg-white`}>
        <SiTailwindcss className={`${styles.icon} text-[6vh] text-indigo-500`}/>
        <p>Tailwind</p>
    </div>
    <div className={`${styles.caixa} ${styles.js} bg-white`}>
        <SiJavascript className={`${styles.icon} text-[6vh] text-indigo-500`}/>
        <p>JavaScript</p>
    </div>
    <div className={`${styles.caixa} ${styles.react} bg-white`}>
        <SiReact className={`${styles.icon} text-[6vh] text-indigo-500`}/> 
        <p>React</p>
    </div>
    </>
  )
}

export default HabilidadesFrontEnd