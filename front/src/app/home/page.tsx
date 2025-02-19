"use client";
import TechnologySection from "@/components/technologySection/TechnologySection";
import { MdOutlineKeyboardDoubleArrowRight, MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [index, setIndex] = useState(1);
  const [direction, setDirection] = useState(1);

  const handleChangeCard = () => {
    setDirection(1);
    setIndex((prevIndex) => (prevIndex === 4 ? 1 : prevIndex + 1));
  };

  const handleChangeCardBack = () => {
    setDirection(-1);
    setIndex((prevIndex) => (prevIndex === 1 ? 4 : prevIndex - 1));
  };

  const variants = {
    hidden: (dir: number) => ({
    opacity: 0,
    x: dir === 1 ? 50 : -50,
    }),
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }, 
    exit: (dir: number) => ({
      opacity: 0,
      x: dir === 1 ? 50 : -50, 
      transition: { duration: 0.3 } 
    }),
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col md:flex-row w-[90%] gap-4 shadow-lg rounded-lg p-4 bg-card-bg h-fit border-2 border-card-border">
        <div className="flex justify-center md:w-4/12">
          <Image
            src={"/tomas.jpg"}
            alt="tomas"
            width={250}
            height={250}
            className="rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-4xl font-semibold">
            Tomás Laprovitta<span className="text-sm text-link-hover"> && Full Stack Developer</span>
          </h1>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut qui ullam quam itaque adipisci optio similique, soluta, sint vitae consectetur quasi, accusamus blanditiis? Corporis mollitia tempore reprehenderit aliquam molestiae quos?
          </p>
        </div>
      </div>

      <div className="flex w-[90%] flex-col mt-10 gap-4 shadow-lg rounded-lg p-4 bg-card-bg h-fit border-2 border-card-border">
        <h1 className="text-xl font-semibold text-center">Tecnologías</h1>
        <div className="grid grid-cols-[1fr_5fr_1fr] w-full justify-between items-center">
          <div className="text-center mt-10">
            <button 
            onClick={handleChangeCardBack}
            className="hover:text-link-hover transition-all duration-200 hover:scale-110"
            >
              <MdOutlineKeyboardDoubleArrowLeft size={30} />
            </button>
          </div>

          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full"
          >
            {index === 1 && <TechnologySection title="Lenguajes de Programación" type="language" />}
            {index === 2 && <TechnologySection title="Frameworks y Librerías" type="framework" />}
            {index === 3 && <TechnologySection title="Bases de Datos" type="database" />}
            {index === 4 && <TechnologySection title="Entorno de Ejecución" type="runtime" />}
          </motion.div>

          <div className="text-center mt-10">
            <button 
            onClick={handleChangeCard}
            className="hover:text-link-hover transition-all duration-200 hover:scale-110"
            >
              <MdOutlineKeyboardDoubleArrowRight size={30} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
