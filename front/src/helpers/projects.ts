export interface IProject {
    id?: number,
    title: string,
    description: string,
    technologies: string[];
    repository: string;
    deployment?: string;
    videoLink?: string;
    image: string;
}
export const projects : IProject[]= [
    {
        // movies
        id: 1,
        title: "movieTitle",
        description: "movieDescription",
        technologies: ["HTML", "CSS", "Express", "Mongoose", "MongoDB"],
        repository: "https://github.com/tlapro/movies",
        deployment: "",
        videoLink: "",
        image: "/movies.png"
    },
    {
        // restaurant
        id: 2,
        title: "restaurantTitle",
        description: "restaurantDescription",
        technologies: ["React", "CSS", "Express", "MongoDB"],
        repository: "https://github.com/tlapro/reservations",
        deployment: "",
        videoLink: "",
        image: "/restaurant.png"
    },
    {
        // ecommerce
        id: 3,
        title: "ecommerceTitle",
        description: "ecommerceDescription",
        technologies: ["JavaScript", "TypeScript", "React", "Next.js"],
        repository: "https://github.com/tlapro/ecommerce",
        deployment: "",
        videoLink: "",
        image: "/ecommerce.png"
    },
    {
        // FitManager
        id: 4,
        title: "fitManagerTitle",
        description: "fitManagerDescription",
        technologies: ["React", "Next.js", "NestJS", "PostgreSQL", "TypeORM", "PostgreSQL"],
        repository: "https://github.com/tlapro/fitmanager",
        deployment: "https://fitmanager-henry.vercel.app/home",
        videoLink: "https://youtu.be/-I9kJ9Q_YWk",
        image: "/fitManager.png",
    },    
]