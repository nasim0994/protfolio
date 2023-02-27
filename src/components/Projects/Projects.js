import React from "react";
import "./products.css";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="w-[90%] xl:w-[1200px] mx-auto py-10 ">
      <h2 className="text-center text-4xl text-info font-bold">My Project</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 mt-10">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>

      <div className="flex justify-center mt-2">
        <button className="bg-gradient px-4 py-2 text-neutral rounded-md font-semibold scale-[.97] hover:scale-[1] duration-300">
          More Projects
        </button>
      </div>
    </div>
  );
};

export default Projects;
