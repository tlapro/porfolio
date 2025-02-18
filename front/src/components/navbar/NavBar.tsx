import Link from "next/link";
import ThemeToggle from "../themeToggle/ThemeToggle";

export default function NavBar () {
    return (
        <div className="flex bg-card-bg border-card-border border-b-2">
            <div className="flex h-18 bg-card-bg shadow-md items-center w-full pt-3 pb-1">
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