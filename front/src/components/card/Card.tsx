import { ITecnologies } from "@/interfaces/ITecnologies";
import Image from "next/image";
import Link from "next/link";

export default function Card(tecnologies : ITecnologies) {
    return (
            <div className="flex justify-center items-center relative w-[12rem] h-[12rem] bg-tecnologies-bg group rounded-lg">


                <Image 
                src={tecnologies.image} 
                alt="image" 
                height={100} 
                width={100} 
                />
                <Link href={tecnologies.url}>
                <div className="absolute inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
                <h3 className="text-xl font-bold pb-2 text-link-hover">{tecnologies.name}</h3>
                    <hr className="border-1 pb-3 border-gray-100 w-6/12"/>
                <p className="text-xs pl-4 pr-4 italic text-justify mx-auto">{tecnologies.description}</p>
                </div>
                </Link>
            </div>
    )
}