import imagemInicio from '../assets/pfp.jpg'
import styles from './Inicio.module.css'

const Inicio = () => {
  return (
    <>
    <section className="flex flex-col justify-center items-center min-h-[100vh] pt-18 bg-indigo-500">
      <img className='mb-5 rounded-full w-[220px]' src={imagemInicio} />

      <p className='text-[1.3em] font-bold text-slate-900'>Olá, me chamo Isa Souza</p>
      <h1 className='mt-2 text-5xl text-white font-extrabold'>Dev Front-End</h1>
    </section>
    </>
  )
}

export default Inicio