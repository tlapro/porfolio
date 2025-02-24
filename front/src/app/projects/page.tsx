
import ProjectCard from "@/components/projectCard/ProjectCard"
import { projects } from "@/helpers/projects"
import { useTranslations } from "next-intl"

export default function Project () {
    const t = useTranslations('ProjectsPage')
    return (
        <div>
        <div className="flex w-[90%] md:w-[80%] justify-center mx-auto">
            <h1 className="text-2xl">{t('title')}</h1>
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
    )
}