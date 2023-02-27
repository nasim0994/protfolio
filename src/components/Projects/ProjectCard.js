import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineLink, AiFillGithub } from "react-icons/ai";
import image from "../../images/bikroy.png";

const ProjectCard = ({ project }) => {
  return (
    <div className="productCard">
      <div className="cardContent">
        <div className="card-top relative">
          <Link
            className="product-img"
            to="https://bikroystore-f0230.firebaseapp.com/"
            target="_blank"
          >
            <img src={image} alt="bikroyStore" />
          </Link>

          <Link
            className="live-link text-secondary"
            to={project.liveLink}
            target="_blank"
          >
            <AiOutlineLink /> Live <span>Site</span>
          </Link>
        </div>

        <div className="pt-2">
          <h2 className="text-2xl font-semibold ">{project.name}</h2>
          <p className="text-neutral/60 text-sm">
            <span className="font-semibold">Technologies:</span>
            {project.technologies}
          </p>
        </div>

        <div className="card-btn mt-3 flex justify-between">
          <button className="text-info text-sm border rounded-md py-2 px-2 scale-[.97] hover:scale-[1] hover:bg-gray-50 duration-300">
            <Link
              to={project.clientLink}
              target="_blank"
              className="flex gap-1 items-center"
            >
              <AiFillGithub className="text-lg" />
              Client Code
            </Link>
          </button>
          <button className="text-info text-[15px] border rounded-md py-2 px-2 scale-[.97] hover:scale-[1] hover:bg-gray-50 duration-300">
            <Link
              to={project.serverLink}
              target="_blank"
              className="flex gap-1 items-center"
            >
              <AiFillGithub className="text-lg" />
              Server Code
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
