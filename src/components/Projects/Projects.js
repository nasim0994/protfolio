import React from "react";
import "./products.css";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div>
      <div className="w-[1200px] mx-auto py-10 ">
        <h2 className="text-center text-4xl text-info font-bold">My Project</h2>

        <div className="grid grid-cols-4 gap-2 mt-10">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>

        <div className="flex justify-center mt-2">
          <button className="bg-gradient px-4 py-2 rounded-md font-semibold scale-[.97] hover:scale-[1] duration-300">
            More Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;