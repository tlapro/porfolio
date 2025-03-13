"use client";
import TechnologySection from "@/components/technologySection/TechnologySection";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");
 
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
        <div className="mt-6 w-[85%] md:mt-0 md:ml-10 text-center md:text-left">
          <h1 className="text-5xl font-bold">{t("name")}</h1>
          <h2 className="text-xl text-link-hover">&& {t("subtitle")}</h2>
          <hr className="m-4 border-1 border-input-border" />
          <p className="text-lg text-foreground text-justify mt-4 max-w-md">
            {t("description")}
          </p>
          <hr className="m-4 border-1 border-input-border" />
        </div>
      </div>
      <div className="flex w-[90%] md:w-[80%] flex-col gap-4 rounded-lg p-4 h-fit">
        <hr className="w-[90%] md:w-1/2 m-4 border-1 border-input-border mx-auto" />
        <h1 className="text-2xl font-semibold text-center">
          {t("technologies")}
        </h1>
        <hr className="w-[90%] md:w-1/2 m-4 border-1 border-input-border mx-auto" />
        
          <div className="text-center">
           
            <div className="w-[90%] flex-col justify-center mx-auto">
              <TechnologySection
                title={t("ProgrammingLanguages")}
                type="language"
              />
              <TechnologySection
                title={t("FrameworksAndLibraries")}
                type="framework"
              />
              <TechnologySection title={t("Databases")} type="database" />
              <TechnologySection
                title={t("RuntimeEnvironments")}
                type="runtime"
              />
            </div>
        </div>
      </div>
    </div>
  );
}
