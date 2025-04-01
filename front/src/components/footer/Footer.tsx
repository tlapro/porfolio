import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function Footer () {
    return (
        <div className="h-10 mt-10 flex justify-center items-start mb-10">
            <div className="flex gap-4">
            <Link href={"https://www.linkedin.com/in/tomaslaprovitta/"}
            target="_blank"
            rel="noopener noreferrer"
            >
            <FaLinkedin size={45}
            className="hover:text-link-hover transition duration-300 ease"/>
            </Link>
            <Link href={"https://www.github.com/tlapro"}
            target="_blank"
            rel="noopener noreferrer"
            >
            <FaGithub size={45} 
            className="hover:text-link-hover transition duration-300 ease"/>
            </Link>
            <Link href={"mailto:tlaprovitta@gmail.com"}>
            <MdOutlineEmail 
            size={45}
            className="hover:text-link-hover transition duration-300 ease"/>
            </Link>
            </div>

        </div>
    )
}