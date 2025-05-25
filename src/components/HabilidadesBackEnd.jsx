import {
    SiPython,
    SiMysql,
    SiPhp
} from "react-icons/si";
import {
  FaJava
} from 'react-icons/fa6'

import styles from './styles/HabilidadesBackEnd.module.css'

const HabilidadesBackEnd = () => {
  return (
    <>
    <div className={`${styles.caixa} ${styles.py} bg-white`}> 
        <SiPython className={`${styles.icon} text-[6vh] text-indigo-500`}/>
        <p>Python</p>
    </div>
    <div className={`${styles.caixa} ${styles.mysql} bg-white`}> 
        <SiMysql className={`${styles.icon} text-[6vh] text-indigo-500`}/>
        <p>MySQL</p>
    </div>
    <div className={`${styles.caixa} ${styles.java} bg-white`}> 
        <FaJava className={`${styles.icon} text-[6vh] text-indigo-500`}/>
        <p>Java</p>
    </div>
    <div className={`${styles.caixa} ${styles.php} bg-white`}> 
        <SiPhp className={`${styles.icon} text-[6vh] text-indigo-500`}/>
        <p>PHP</p>
    </div>
    </>
  )
}

export default HabilidadesBackEnd