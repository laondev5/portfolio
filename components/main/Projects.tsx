import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { projects } from "@/constants";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-10">
        {projects.map((project, index) => (
          <ProjectCard
            src={project.image}
            title={project.name}
            description={project.description}
            url={project.link}
            key={index}
            />
            ))}
       
      </div>
    </div>
  );
};

export default Projects;
