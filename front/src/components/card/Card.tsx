"use client";
import Link from "next/link";
import { IconType } from "react-icons";

interface ITecnologies {
  id: number;
  name: string;
  description: string;
  url: string;
  icon: IconType;
}

export default function Card({ name, description, url, icon: IconComponent }: ITecnologies) {
  return (
    <div className="flex flex-col items-center justify-center relative w-[12rem] h-[12rem] bg-background border-2 border-card-border group rounded-lg shadow-lg transition-all duration-300 hover:scale-105">
      
      <IconComponent size={80} className="text-link-text transition-all duration-300" />
      <h3 className="text-lg font-bold mt-4">{name}</h3>
      <Link href={url} target="_blank">
        <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md p-4">
          <h3 className="text-xl font-bold">{name}</h3>
          <hr className="border border-link-text w-6/12 my-2"/>
          <p className="text-center text-xs italic">{description}</p> 
        </div>
      </Link>
    </div>
  );
}
