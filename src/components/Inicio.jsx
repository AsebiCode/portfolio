import imagemInicio from '../assets/pfp.jpg'
import { ReactTyped } from 'react-typed';

const Inicio = () => {
  return (
    <>
    <section className="flex flex-col justify-center items-center min-h-[100vh] pt-18 bg-indigo-500">
      <img className='mb-5 rounded-full w-[220px]' src={imagemInicio} />

      <p className='text-[1.4em] font-bold text-slate-900'>Olá, me chamo Isa Souza</p>
      <h1 className="mt-2 text-5xl text-white font-extrabold">
      {" "}
      <ReactTyped
        strings={["Dev Front-End", "UX Designer"]}
        typeSpeed={100}
        backSpeed={20}
        loop
        cursorChar="|"
        showCursor={true}
      />
    </h1>

    <p className='mt-5 text-lg w-2/5 text-center'>Estudande de Ciência da Computação, Técnica de Desenvolvimento de Sistemas, utilizo React e Tailwind.</p>


    </section>
    </>
  )
}

export default Inicio