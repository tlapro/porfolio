/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState } from "react";
import emailjs from "emailjs-com";
import { Toaster, toast } from "sonner";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { CircleX } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('ContactPage')
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Debes completar todos los campos para enviar el correo.");
      return;
    }

    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      toast.success("Correo enviado con éxito! ✅");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error al enviar el correo:", error);
      toast.error("Hubo un error al enviar el correo ❌");
    }
  };

  return (
    <div className="flex flex-col items-center bg-background mt-20">
      <Toaster
        position="top-right"
        toastOptions={{ style: { marginTop: "80px" } }}
      />

      <div className="flex flex-col w-[90%] md:w-[40%] items-center justify-center border-card-border bg-card-bg p-6 gap-6 rounded-lg">
        <h2 className="flex text-xl font-bold m-4 text-center justify-center gap-2 items-center">
          {t('title')}
        </h2>
        <hr className="w-full mb-4 border-1 border-input-border" />
        <div className="flex flex-col md:flex-row gap-4">
         <div className="absolute top-[10px] left-[250px] opacity-50 z-10">
                <Image
                  src="/1.png"
                  alt="Decorative Image 1"
                  width={150}
                  height={150}
                  className="transform rotate-[25deg] hover:scale-105 transition-all duration-300"
                />
              </div>
              <div className="absolute left-[-120px] top-[200px] md:left-[80%] opacity-50 z-0">
                <Image
                  src="/2.png"
                  alt="Decorative Image 2"
                  width={200}
                  height={200}
                  className="transform rotate-[-25deg] hover:scale-110 transition-all duration-300"
                />
              </div>
              <div className="absolute top-[500px] left-[50%] opacity-50 z-10">
                <Image
                  src="/3.png"
                  alt="Decorative Image 1"
                  width={150}
                  height={150}
                  className="transform rotate-[-5deg] hover:scale-105 transition-all duration-300"
                />
              </div>
          <div className="flex w-full">
            <Link
              href={"https://www.linkedin.com/in/tlaprovitta/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-[100%] flex items-center justify-center p-4 gap-2 text-xl text-semibold bg-button-bg hover:bg-button-hover transition duration-500 ease rounded-lg text-button-text">
                <FaLinkedin size={40} />
                LinkedIn
              </button>
            </Link>
          </div>
          <div>
            <Link
              href={"https://www.github.com/tlapro"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-[100%] flex items-center justify-center p-4 gap-2 text-xl text-semibold bg-button-bg hover:bg-button-hover transition duration-500 ease rounded-lg text-button-text">
                <FaGithub size={40} />
                Github
              </button>
            </Link>
          </div>
        </div>
        <div className="md:w-[40%]">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={
              isOpen
                ? "w-[100%] flex items-center justify-center p-4 gap-2 text-xl text-semibold bg-button-hover transition duration-500 ease rounded-lg"
                : "w-[100%] flex items-center justify-center p-4 gap-2 text-xl text-semibold bg-button-bg hover:bg-button-hover transition duration-500 ease rounded-lg text-button-text"
            }
          >
            <Mail size={35} />
            {t('titleModal')}
          </button>
        </div>
        <hr className="w-full m-4 border-1 border-input-border" />
      </div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
          <form
            onSubmit={handleSubmit}
            className="relative bg-card-bg border-card-border border-2 text-card-text p-6 rounded-lg shadow-lg w-[90%] sm:w-[60%] md:w-[40%] lg:w-[30%] animate-fadeIn"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold flex items-center gap-2 mb-6 cursor-pointer">
                <Mail />
                {t('titleModal')}
              </h2>
              
              <button
                className="text-gray-400 hover:text-button-hover transition mb-6"
                onClick={() => setIsOpen(false)}
              >
                <CircleX size={28} />
              </button>
            </div>
            <hr className="mb-4 border-1 border-input-border" />
            <input
              type="text"
              name="name"
              placeholder={t('inputName')}
              value={form.name}
              onChange={handleChange}
              className="bg-input-bg text-input-text w-full p-2 mb-3 border rounded"
            />
            <input
              type="email"
              name="email"
              placeholder={t('inputEmail')}
              value={form.email}
              onChange={handleChange}
              className="bg-input-bg text-input-text w-full p-2 mb-3 border rounded"
            />
            <textarea
              name="message"
              placeholder={t('inputMessage')}
              value={form.message}
              onChange={handleChange}
              className="min-h-40 bg-input-bg text-input-text w-full p-2 mb-3 border rounded"
            />
            <button
              type="submit"
              className="w-full bg-button-bg text-button-text p-2 rounded hover:bg-button-hover transition duration-700 ease"
            >
              {t('buttonModal')}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
