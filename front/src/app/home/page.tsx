"use client";
import TechnologySection from "@/components/technologySection/TechnologySection";
import { MdOutlineKeyboardDoubleArrowRight, MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");
  const [index, setIndex] = useState(1);
  const [direction, setDirection] = useState(1);
  const [isMouseOver, setIsMouseOver] = useState(false);

  useEffect(() => {

    let interval: number;

    if (!isMouseOver) {
      interval = window.setInterval(() => {
        setDirection(1);
        setIndex((prevIndex) => (prevIndex === 4 ? 1 : prevIndex + 1));
      }, 4000);
    }
    
    return () => clearInterval(interval);
  }, [isMouseOver]);

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
      x: dir === 1 ? -50 : 50,
      transition: { duration: 0.3 },
    }),
  };

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <Image
          src="/tomas.jpg"
          alt="profilephoto"
          width={300}
          height={300}
          className="w-60 h-60 object-cover rounded-full shadow-xl border-6 bg-gray-700 border-gray-700"
        />
        <div className="mt-6 w-[90%] md:mt-0 md:ml-10 text-center md:text-left">
          <h1 className="text-5xl font-bold">{t("name")}</h1>
          <h2 className="text-xl text-link-hover">&& {t("subtitle")}</h2>
          <hr className="m-4 border-1 border-input-border" />
          <p className="text-lg text-foreground text-justify mt-4 max-w-md">{t("description")}</p>
          <hr className="m-4 border-1 border-input-border" />
         
        </div>
      </div>
      <div className="flex w-[90%] md:w-[80%] flex-col gap-4 rounded-lg p-4 h-fit">
      <hr className="w-1/2 m-4 border-1 border-input-border mx-auto" />
        <h1 className="text-2xl font-semibold text-center">{t("technologies")}</h1>
        <hr className="w-1/2 m-4 border-1 border-input-border mx-auto" />
        <div className="grid grid-cols-[1fr_4fr_1fr] md:grid-cols-[1fr_6fr_1fr] w-full justify-center items-center">
          <div className="text-center mt-10">
            <button
              onClick={handleChangeCardBack}
              className="hover:text-link-hover transition-all duration-200 hover:scale-110 md:pl-0 pl-4"
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
            onMouseEnter={() => setIsMouseOver(true)}
            onMouseLeave={() => setIsMouseOver(false)}
          >
            {index === 1 && <TechnologySection title={t("ProgrammingLanguages")} type="language" />}
            {index === 2 && <TechnologySection title={t("FrameworksAndLibraries")} type="framework" />}
            {index === 3 && <TechnologySection title={t("Databases")} type="database" />}
            {index === 4 && <TechnologySection title={t("RuntimeEnvironments")} type="runtime" />}
          </motion.div>

          <div className="text-center mt-10">
            <button
              onClick={handleChangeCard}
              className="hover:text-link-hover transition-all duration-200 hover:scale-110 md:pr-0 pr-4"
            >
              <MdOutlineKeyboardDoubleArrowRight size={30} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
