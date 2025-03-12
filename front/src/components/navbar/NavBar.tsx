"use client";
import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "../themeToggle/ThemeToggle";
import LanguageSwitcher from "../languageSwitcher/LanguageSwitcher";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import Configuration from "../configuration/Configuration";
import BgConfig from "../bgConfig/BgConfig";

export default function NavBar() {
  const t = useTranslations("NavBar");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const pathname = usePathname();
  return (
    <>
      <div className="flex bg-card-bg border-card-border border-b-2">
        <div className="flex h-20 bg-card-bg shadow-md items-center w-full pt-3 pb-1 px-4 justify-between">
          <div className="text-xl font-semibold mb-2">
            <Link href={"/home"}>{t("title")}</Link>
          </div>

          <div className="font-spectral text-lg hidden md:flex gap-4 mb-2">
            <Link
              href={"/home"}
              className="relative group hover:text-link-hover transition duration-300 p-2"
            >
              {t("home")}
              <span
                className={`absolute left-0 bottom-0 h-[2px] bg-link-hover transform transition-all duration-300
      ${
        pathname === "/home"
          ? "w-full"
          : "w-0 group-hover:w-full group-hover:origin-left origin-left"
      }`}
              ></span>
            </Link>

            <Link
              href={"/aboutme"}
              className="relative group hover:text-link-hover transition duration-300 p-2"
            >
              {t("aboutMe")}
              <span
                className={`absolute left-0 bottom-0 h-[2px] bg-link-hover transform transition-all duration-300
      ${
        pathname === "/aboutme"
          ? "w-full"
          : "w-0 group-hover:w-full group-hover:origin-left origin-left"
      }`}
              ></span>
            </Link>

            <Link
              href={"/projects"}
              className="relative group hover:text-link-hover transition duration-300 p-2"
            >
              {t("projects")}
              <span
                className={`absolute left-0 bottom-0 h-[2px] bg-link-hover transform transition-all duration-300
      ${
        pathname === "/projects"
          ? "w-full"
          : "w-0 group-hover:w-full group-hover:origin-left origin-left"
      }`}
              ></span>
            </Link>

            <Link
              href={"/contact"}
              className="relative group hover:text-link-hover transition duration-300 p-2"
            >
              {t("contact")}
              <span
                className={`absolute left-0 bottom-0 h-[2px] bg-link-hover transform transition-all duration-300
      ${
        pathname === "/contact"
          ? "w-full"
          : "w-0 group-hover:w-full group-hover:origin-left origin-left"
      }`}
              ></span>
            </Link>

            <Configuration />
          </div>

          <button onClick={toggleMenu} className="md:hidden text-2xl">
            <FiMenu />
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={closeMenu}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 w-[60%] h-full bg-card-bg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-[50%] relative">
          <button
            onClick={closeMenu}
            className="absolute top-5 right-5 text-3xl"
          >
            <FiX />
          </button>

          <nav className="font-spectral flex flex-col justify-start gap-6 text-2xl font-semibold mt-36">
            <Link
              href={"/home"}
              className="relative group hover:text-link-hover transition duration-300 p-2"
            >
              {t("home")}
              <span
                className={`absolute left-0 bottom-0 w-full h-[2px] bg-link-hover transform transition-all duration-300 
                ${
                  pathname === "/home"
                    ? "scale-y-100"
                    : "scale-y-0 group-hover:scale-y-100"
                }`}
              ></span>
            </Link>

            <Link
              href={"/aboutme"}
              onClick={closeMenu}
              className="relative group hover:text-link-hover transition duration-300 p-2"
            >
              {t("aboutMe")}
              <span
                className={`absolute left-0 bottom-0 w-full h-[2px] bg-link-hover transform transition-all duration-300 
                ${
                  pathname === "/aboutme"
                    ? "scale-y-100"
                    : "scale-y-0 group-hover:scale-y-100"
                }`}
              ></span>
            </Link>
            <Link
              href={"/projects"}
              onClick={closeMenu}
              className="relative group hover:text-link-hover transition duration-300 p-2"
            >
              {t("projects")}
              <span
                className={`absolute left-0 bottom-0 w-full h-[2px] bg-link-hover transform transition-all duration-300 
                ${
                  pathname === "/projects"
                    ? "scale-y-100"
                    : "scale-y-0 group-hover:scale-y-100"
                }`}
              ></span>
            </Link>
            <Link
              href={"/contact"}
              onClick={closeMenu}
              className="relative group hover:text-link-hover transition duration-300 p-2"
            >
              {t("contact")}
              <span
                className={`absolute left-0 bottom-0 w-full h-[2px] bg-link-hover transform transition-all duration-300 
                ${
                  pathname === "/contact"
                    ? "scale-y-100"
                    : "scale-y-0 group-hover:scale-y-100"
                }`}
              ></span>
            </Link>
            <div className="flex flex-col md:flex-row justify-center items-center gap-2">
              <ThemeToggle />
              <LanguageSwitcher />
              <BgConfig />
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
