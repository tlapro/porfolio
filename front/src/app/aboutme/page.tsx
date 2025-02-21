import { TrendingUp, Target, Code, Lightbulb, Users } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function AboutMe() {
  const t = useTranslations("AboutMePage");

  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="flex flex-col w-[95%] md:w-[80%] gap-6 shadow-lg rounded-lg p-6 bg-card-bg border-2 border-card-border cursor-default">
        <h1 className="text-2xl font-bold text-center text-primary">
          {t("aboutMe")}
        </h1>
        <div className="flex justify-center items-center">
          <Image
            src="/tomas.jpg"
            alt="profilephoto"
            width={300}
            height={300}
            className="w-48 h-48 object-cover rounded-full shadow-lg border-2 border-card-border"
          />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6 group">
          <TrendingUp size={50} className="text-primary group-hover:text-link-hover transition-all duration-300 group-hover:scale-125" />
          <p className="text-sm md:text-md text-justify text-secondary hover:font-semibold">
            {t("aboutMeDescription1")}
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6 group">
          <Target size={50} className="text-primary group-hover:text-link-hover transition-all duration-300 group-hover:scale-125" />
          <p className="text-sm md:text-md text-justify text-secondary hover:font-semibold">
            {t("aboutMeDescription2")}
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6 group">
          <Code size={50} className="text-primary group-hover:text-link-hover transition-all duration-300 group-hover:scale-125" />
          <p className="text-sm md:text-md text-justify text-secondary hover:font-semibold">
            {t("aboutMeDescription3")}<span className="text-link-hover">{t("aboutMeTecnologies")}</span>{t("aboutMeDescription4")}
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6 group">
          <Lightbulb size={50} className="text-primary group-hover:text-link-hover transition-all duration-300 group-hover:scale-125" />
          <p className="text-sm md:text-md text-justify text-secondary hover:font-semibold">
            {t("aboutMeDescription5")}
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6 group">
          <Users size={50} className="text-primary group-hover:text-link-hover transition-all duration-300 group-hover:scale-125" />
          <p className="text-sm md:text-md text-justify text-secondary hover:font-semibold hover">
            {t("aboutMeDescription6")}
          </p>
        </div>
      </div>
    </div>
  );
}
