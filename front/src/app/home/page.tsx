import Image from "next/image";

export default function Home () {
  return (
    <div className="flex justify-center h-screen">
        <div className="flex w-[65%] gap-4">
            <div>
                <Image src={"/tomas.jpg"}
                alt="tomas" 
                width={200} 
                height={200} 
                className="rounded-lg"
                />
            </div>
            <div>
                <h1>Tomas Laprovitta</h1>
            </div>
        </div>

    </div>
  );
};