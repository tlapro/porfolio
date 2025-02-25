"use client";
import { phrases } from "@/helpers/phrases";
import { useEffect } from "react";

export default function BackgroundText() {
  useEffect(() => {
    const createRandomText = () => {

      const colors = ["text-red-500", "text-green-500", "text-blue-500", "text-yellow-400", "text-purple-400", "text-pink-400"];
      const count = Math.floor(Math.random() * 2) + 2; 

      for (let j = 0; j < count; j++) {
        const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];

        const span = document.createElement("span");
        span.className = `absolute text-xs md:text-sm lg:text-base font-mono opacity-0 transition-opacity duration-500 whitespace-nowrap ${randomColor}`;
        span.style.maxWidth = "40vw"; 
        span.style.overflow = "hidden";
        
        span.style.left = `${Math.random() * 90}vw`; 
        span.style.top = `${Math.random() * 90}vh`;

        span.style.pointerEvents = "none";

        document.getElementById("background-container")?.appendChild(span);

        let i = 0;
        const typingInterval = setInterval(() => {
          span.innerText = randomPhrase.substring(0, i + 1);
          i++;
          if (i === randomPhrase.length) clearInterval(typingInterval);
        }, 130);

        setTimeout(() => {
          span.style.opacity = "0.3";
        }, 100);

        setTimeout(() => {
          span.style.opacity = "0";
          setTimeout(() => {
            span.remove();
          }, 400);
        }, 4000);
      }
    };

    const interval = setInterval(createRandomText, 1000);
    return () => clearInterval(interval);
  }, []);

  return <div id="background-container" className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden" />;
}
