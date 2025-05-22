import {
    IoLogoHtml5,
    IoLogoCss3,
    IoLogoJavascript,
    IoLogoSass,
    IoLogoReact
} from "react-icons/io5";

import styles from './HabilidadesFrontEnd.module.css'

const HabilidadesFrontEnd = () => {
  return (
    <>
    <div className={`${styles.caixa} ${styles.html} bg-white`}> 
        <IoLogoHtml5 className={`${styles.icon} text-[6vh] text-indigo-500`}/>
        <p>HTML</p>
    </div>
    <div className={`${styles.caixa} ${styles.css} bg-white`}>
        <IoLogoCss3 className={`${styles.icon} text-[6vh] text-indigo-500`}/>
        <p>CSS</p>
    </div>
    <div className={`${styles.caixa} ${styles.html} bg-white`}>
        <IoLogoJavascript className={`${styles.icon} text-[6vh] text-indigo-500`}/>
        <p>JavaScript</p>
    </div>
    <div className={`${styles.caixa} ${styles.html} bg-white`}>
        <IoLogoSass className={`${styles.icon} text-[6vh] text-indigo-500`}/>
        <p>SASS</p>
    </div>
    <div className={`${styles.caixa} ${styles.html} bg-white`}>
        <IoLogoReact className={`${styles.icon} text-[6vh] text-indigo-500`}/> 
        <p>React</p>
    </div>
    </>
  )
}

export default HabilidadesFrontEnd