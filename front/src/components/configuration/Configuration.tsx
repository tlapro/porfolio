"use client";
import { useEffect, useRef, useState } from "react";
import { IoMdSettings } from "react-icons/io";
import ThemeToggle from "../themeToggle/ThemeToggle";
import LanguageSwitcher from "../languageSwitcher/LanguageSwitcher";
import BgConfig from "../bgConfig/BgConfig";

export default function Configuration() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex justify-center items-center mt-2">
      <div className="relative" ref={menuRef}>
        <button onClick={() => setIsOpen(!isOpen)}>
          <IoMdSettings
            size={22}
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180 text-link-text" : ""
            }`}
          />
        </button>

        {isOpen && (
          <div className="absolute text-sm right-0 mt-6 w-48 bg-card-bg shadow-md rounded-lg z-50">
            <ul>
              <li className="p-3 cursor-pointer">
                <LanguageSwitcher />
              </li>
              <li className="p-3 cursor-pointer">
                <ThemeToggle />
              </li>
              <li className="p-3 cursor-pointer">
                <BgConfig />
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
