import styles from './styles/Habilidades.module.css'
import IconesFrontEnd from './HabilidadesFrontEnd.jsx'
import IconesBackEnd from './HabilidadesBackEnd.jsx'

const Habilidades = () => {
  return (
    <>
    <section className="flex flex-col justify-center items-center min-h-screen pt-20 bg-indigo-500">
      <h1 className="text-[8vh] text-white font-extrabold mb-10">Habilidades</h1>

      <section className="grid grid-cols-3 justify-items-center gap-8 w-[90%] mb-10">
        <div className="col-span-1 text-white text-center">
          <h2 className="text-[4vh] font-bold mb-2">Front-End</h2>
          <div className='grid grid-cols-2'>
            <IconesFrontEnd />
          </div>
        </div>

        <div className="col-span-1 text-white text-center">
          <h2 className="text-[4vh] font-bold mb-2">Back-End</h2>
          <div className='grid grid-cols-2'>
            <IconesBackEnd />
          </div>
        </div>

        <div className="col-span-1 text-white">
          <h2 className="text-[4vh] font-bold mb-2 text-center">Outras</h2>
          {/* <IconesOutros /> */}
        </div>
      </section>
    </section>
    </>
  )
}

export default Habilidades