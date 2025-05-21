import {
    IoHomeOutline,
    IoPersonOutline,
    IoSparklesOutline,
    IoHammerOutline,
    IoSendOutline
} from "react-icons/io5";


const Header = () => {
  return (
    <>
    <header className="fixed top-0 w-full h-18 p-[1.4em] bg-gray-900">
        <nav className="flex flex-row justify-end">
            <a href=""><IoHomeOutline className="mr-1"/>Início</a>
            <a href=""><IoPersonOutline className="mr-1"/>Sobre</a>
            <a href=""><IoSparklesOutline className="mr-1"/>Habilidades</a>
            <a href=""><IoHammerOutline className="mr-1"/>Projetos</a>
            <a href=""><IoSendOutline className="mr-1"/>Contato</a>
        </nav>
    </header>
    </>
  )
}

export default Header