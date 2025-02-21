"use client";
import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "../themeToggle/ThemeToggle";
import LanguageSwitcher from "../languageSwitcher/LanguageSwitcher";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <div className="flex bg-card-bg border-card-border border-b-2">
        <div className="flex h-18 bg-card-bg shadow-md items-center w-full pt-3 pb-1 px-4 justify-between">
          <div className="text-xl font-semibold mb-2">
            <Link href={"/home"}>Mi Portafolio</Link>
          </div>

          <div className="hidden md:flex gap-4 mb-2">
            <Link href={"/home"} className="hover:text-link-hover transition duration-300 p-2">Inicio</Link>
            <Link href={"/aboutme"} className="hover:text-link-hover transition duration-300 p-2">Sobre Mi</Link>
            <Link href={"/proyects"} className="hover:text-link-hover transition duration-300 p-2">Proyectos</Link>
            <Link href={"/contact"} className="hover:text-link-hover transition duration-300 p-2">Contacto</Link>
            <LanguageSwitcher />
            <ThemeToggle />
          </div>

          <button onClick={toggleMenu} className="md:hidden text-2xl">
            <FiMenu />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300" onClick={closeMenu}></div>
      )}

      <div className={`fixed top-0 right-0 w-[60%] h-full bg-card-bg z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex flex-col items-center justify-center h-[50%] relative">
          <button onClick={closeMenu} className="absolute top-5 right-5 text-3xl">
            <FiX />
          </button>

          <nav className="flex flex-col justify-start gap-6 text-2xl font-semibold">
            <Link href={"/home"} onClick={closeMenu} className="hover:text-link-hover transition duration-300">Inicio</Link>
            <Link href={"/aboutme"} onClick={closeMenu} className="hover:text-link-hover transition duration-300">Sobre Mi</Link>
            <Link href={"/proyects"} onClick={closeMenu} className="hover:text-link-hover transition duration-300">Proyectos</Link>
            <Link href={"/contact"} onClick={closeMenu} className="hover:text-link-hover transition duration-300">Contacto</Link>
            <div className="text-center">      
            <LanguageSwitcher />
                <ThemeToggle />
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
