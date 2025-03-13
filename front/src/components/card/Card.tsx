"use client";
import Link from "next/link";
import { IconType } from "react-icons";
import { FiExternalLink } from "react-icons/fi";
interface ITecnologies {
  id: number;
  name: string;
  description: string;
  url: string;
  icon: IconType;
}

export default function Card({ name, url, icon: IconComponent }: ITecnologies) {
  return (
    <div className="flex flex-col items-center justify-center relative w-[12rem] h-[12rem] bg-background border-2 border-card-border group rounded-lg shadow-lg transition-all duration-300 hover:scale-105">
      
      <IconComponent size={90} className="text-link-text transition-all duration-300" />
      <Link href={url} target="_blank">
        <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md p-4">
          <FiExternalLink size={20}/>
          <p className="text-lg ml-1">
             {name}
            </p>
        </div>
      </Link>
    </div>
  );
}
