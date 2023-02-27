import React from "react";
import "./Project.css";
import ProjectCard from "./ProjectCard";
import projects from "../../data/projects";

const Projects = () => {
  return (
    <div className="bg-gray-900 text-neutral m-3 rounded-lg py-10">
      <div className="w-[90%] xl:w-[1200px] mx-auto ">
        <h2 className="text-center text-3xl text-gradient font-semibold">
          Recent Project
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 mt-10">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>

        <div className="flex justify-center mt-2">
          <button className="bg-gradient px-4 py-2 text-neutral rounded-md font-semibold scale-[.97] hover:scale-[1] duration-300">
            More Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
