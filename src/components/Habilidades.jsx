import styles from './Habilidades.module.css'
import IconesFrontEnd from './HabilidadesFrontEnd.jsx'

const Habilidades = () => {
  return (
    <>
    <section className="flex flex-col justify-center items-center min-h-screen pt-20 bg-indigo-500">
        <h1 className="text-[6.5vh] text-white font-extrabold">Habilidades</h1>
        <section className={`${styles.habilidades} flex flex-row justify-around items-center w-[90%]`}>
            <h2>Front-End</h2>
            <IconesFrontEnd/>
        </section>
        <section className={`${styles.habilidades} bg-gray-900 w-[90%]`}>
            <h2>Back-End</h2>
        </section>
    </section>
    </>
  )
}

export default Habilidades