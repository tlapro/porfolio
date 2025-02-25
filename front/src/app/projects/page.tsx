import ProjectCard from "@/components/projectCard/ProjectCard";
import { projects } from "@/helpers/projects";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Project() {
  const t = useTranslations('ProjectsPage');

  return (
    <div className="relative">
      <div className="w-full h-[500px] flex justify-center items-center relative mb-10">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/5.png"
            alt="Isometric Image"
            width={300}
            height={300}
            className="opacity-100 absolute top-[50px] left-[60%] transform rotate-[5deg] transition-all duration-300 hover:scale-110"
          />
        </div>
        <div className="relative text-center text-foreground z-10">
          <h1 className="text-5xl font-bold">{t('title')}</h1>
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-between w-[90%] md:w-[80%] mx-auto mt-10">
        {projects
          .sort((a, b) => (b.id ?? 0) - (a.id ?? 0))
          .map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              repository={project.repository}
              deployment={project.deployment}
              videoLink={project.videoLink}
              image={project.image}
            />
          ))}
      </div>
    </div>
  );
}
