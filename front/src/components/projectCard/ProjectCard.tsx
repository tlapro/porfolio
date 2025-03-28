import { IProject } from "@/helpers/projects";
import { useTranslations } from "next-intl";
import { Github, ArrowBigUpDash, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard(project: IProject) {
  const t = useTranslations("ProjectsPage");
  return (
    <div className="bg-card-bg border-card-border border-2 flex flex-col h-full group rounded-lg">
      <div className="w-full relative border-2 border-card-border">
        <Image
          src={project.image}
          alt="project-image"
          width={600} 
          height={400} 
          className="object-cover w-full h-[250px]" 
        />
      </div>
      <div className="p-6 flex flex-col flex-grow cursor-default min-h-[350px]">
        <h1 className="font-spectral text-xl text-center text-link-hover transition duration-400 ease">
          {t(project.title)}
        </h1>
        <hr className="m-4 border-1 border-input-border" />
        <div className="flex flex-col flex-grow text-md">
          <p className="text-justify flex-grow group">
            <span className="font-semibold">{t("description")}</span>
            {t(project.description)}
          </p>
          <p className="text-justify flex-grow">
            <span className="font-semibold">{t("technologies")}</span>
            {project.technologies.join(", ")}
          </p>
        </div>
        <hr className="mt-4 border-1 border-input-border" />
      </div>

      <div className="flex flex-col w-[80%] md:flex-row justify-center items-center mt-auto m-4 gap-2 mx-auto">
        <Link
          href={project.repository}
          target="_blank"
          className="w-full md:w-auto"
        >
          <button className="flex flex-1 justify-center items-center gap-2 p-4 text-sm border-button-border bg-button-bg text-button-text hover:bg-button-hover transition duration-300 ease rounded-lg w-full hover:scale-105">
            <Github /> {t("repository")}
          </button>
        </Link>
        {project.deployment && (
          <Link
            href={project.deployment}
            target="_blank"
            className="w-full md:w-auto"
          >
            <button className="flex flex-1 justify-center items-center gap-2 p-4 text-sm border-button-border bg-button-bg text-button-text hover:bg-button-hover transition duration-300 ease rounded-lg w-full hover:scale-105">
              <ArrowBigUpDash /> {t("deployment")}
            </button>
          </Link>
        )}
        {project.videoLink && (
          <Link
            href={project.videoLink}
            target="_blank"
            className="w-full md:w-auto"
          >
            <button className="flex flex-1 justify-center items-center gap-2 p-4 text-sm border-button-border bg-button-bg text-button-text hover:bg-button-hover transition duration-300 ease rounded-lg w-full hover:scale-105">
              <Youtube /> {t("video")}
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}
