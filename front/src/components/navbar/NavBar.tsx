import Link from "next/link";
import ThemeToggle from "../themeToggle/ThemeToggle";

export default function NavBar () {
    return (
        <div className="pb-1 shadow-md">
            <div className="flex items-center h-6 w-full p-4 ">
                <div className="flex items-center justify-between w-full">
                    <div className="text-xl font-semibold ml-4 mb-2">
                        <Link href={"/home"}>
                            Mi Portafolio
                        </Link>
                    </div>
                    <div className="flex gap-4 mr-4 mb-2">
                        <Link href={"/home"} className="hover:text-link-hover hover:shadow-sm rounded-lg  transition duration-300 p-2">Inicio</Link>
                        <Link href={"/aboutme"} className="hover:text-link-hover hover:shadow-sm rounded-lg  transition duration-300 p-2">Sobre Mi</Link>
                        <Link href={"/proyects"} className="hover:text-link-hover hover:shadow-sm rounded-lg  transition duration-300 p-2">Proyectos</Link>
                        <Link href={"/contact"} className="hover:text-link-hover hover:shadow-sm rounded-lg  transition duration-300 p-2">Contacto</Link>
                        <ThemeToggle />
                    </div>
                </div>

            </div>
        </div>
    )
}