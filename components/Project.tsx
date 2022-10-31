import React from "react";
import { ProjectType } from "./Projects";
import Image from "next/image";
type Props = {
  project: ProjectType;
};

export default function Project({ project }: Props) {
  return (
    <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
      <Image src={project.img} alt={project.name} width={500} height={500} />
      <div>
        <h4 className="text-4xl font-semibold text-center">{project.name}</h4>
        <p className="pt-4 px-10 text-center">{project.description}</p>
        <div className="flex flex-row items-center justify-center space-x-5 translate-y-10">
          <a
            href={project.github}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Github
          </a>
          {project.web && (
            <a
              href={project.link}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Website
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
