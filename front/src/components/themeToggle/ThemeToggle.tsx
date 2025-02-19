"use client";
import { useEffect, useState } from "react";
import { MdLightMode, MdOutlineNightlightRound } from "react-icons/md";
export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState<boolean | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
     
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDarkMode(prefersDark);
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const newMode = darkMode === null ? true : !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newMode);
  };

  if (darkMode === null) return null; 

  return (
    <button onClick={toggleTheme} className="p-2 text-foreground rounded hover:text-link-hover">
      {darkMode ? <MdLightMode size={20}/> : <MdOutlineNightlightRound size={20}/>}
    </button> 
  );
}
