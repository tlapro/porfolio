import Card from "@/components/card/Card";
import { tecnologies } from "@/helpers/tecnologies";
import Image from "next/image";

export default function Home () {
  return (
    <div className="flex flex-col items-center justify-center">
        <div className="flex w-[90%] gap-4 shadow-lg rounded-lg p-4 bg-card-bg h-fit border-2 border-card-border">
            <div className="w-4/12">
                <Image src={"/tomas.jpg"}
                alt="tomas" 
                width={250} 
                height={250} 
                className="rounded-lg"
                />
            </div>
            <div>
                <h1 className="text-4xl font-semibold">Tomás Laprovitta<span className="text-sm text-link-hover"> & Full Stack Developer</span></h1>
                <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut qui ullam quam itaque adipisci optio similique, soluta, sint vitae consectetur quasi, accusamus blanditiis? Corporis mollitia tempore reprehenderit aliquam molestiae quos?</p>
            </div>
        </div>
        
        <div className="flex w-[90%] flex-col mt-10 gap-4 shadow-lg rounded-lg p-4 bg-card-bg h-fit border-2 border-card-border">
        <h1 className="text-xl font-semibold text-center">Tecnologías</h1>
        <div className="grid grid-cols-6 gap-2 mx-auto justify-between items-center">
          {tecnologies.map((t) => (
            <Card
            key={t.id}
            id={t.id}
            name={t.name}
            description={t.description}
            image={t.image}
            url={t.url}
            />
          ))}
          </div>
        </div>

    </div>
  );
};