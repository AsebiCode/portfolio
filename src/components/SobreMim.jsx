import imagemSobreMim from '../assets/placeholder-sobremim.jpg'

const SobreMim = () => {
  return (
    <>
    <section className="flex flex-row items-center p-[6vh] min-h-screen bg-indigo-600">
        <section className='w-1/2 pl-8'>
          <h1 className="text-[8vh] mb-6 text-white font-extrabold" data-aos="fade-right" data-aos-delay="50">Sobre Mim</h1>

          <p className='mb-2 text-[3.5vh] font-bold text-gray-900'>Olá, me chamo Isa Souza!</p>

          <p className='text-[2.5vh]' data-aos="fade-right" data-aos-delay="100">Sou estudante de Ciência da Computação, cursei técnico de Desenvolvimento de Sistemas por três anos, onde construí uma base sólida em lógica de programação e desenvolvimento web. Desde então, venho me aprofundando na área de Front-End, utilizando ferramentas como React, Sass e Tailwind CSS para desenvolver interfaces modernas, responsivas e com foco na experiência do usuário.</p>
          <p className='text-[2.5vh] mt-4' data-aos="fade-right" data-aos-delay="100">Tenho familiaridade com tecnologias essenciais como HTML, CSS e JavaScript, além de trabalhar com controle de versões utilizando Git e GitHub, e gerenciadores de pacotes como NPM. Utilizo o Vite para agilizar a criação de projetos eficientes e leves. Tenho grande interesse por UX (User Experience), buscando sempre unir estética e funcionalidade, desenvolvendo interfaces que sejam não apenas visualmente atrativas, mas também acessíveis, intuitivas e agradáveis de navegar. Estou em constante aprendizado, explorando novas práticas e tecnologias para evoluir como desenvolvedora e entregar soluções que impactem positivamente o usuário.</p>
        </section>

        <section className='w-1/2 flex justify-center'>
          <img className='w-[50vh] rounded-2xl' data-aos="fade-left" data-aos-delay="150" src={imagemSobreMim} />
        </section>
    </section>
    </>
  )
}

export default SobreMim