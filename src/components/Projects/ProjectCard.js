import React from "react";
import { Link } from "react-router-dom";
import bikroyStore from "../../images/bikroy.png";
import { AiOutlineLink, AiFillGithub } from "react-icons/ai";

const ProjectCard = () => {
  return (
    <div class="productCard">
      <div class="cardContent">
        <div class="card-top relative">
          <Link
            class="product-img"
            to="https://bikroystore-f0230.firebaseapp.com/"
            target="_blank"
          >
            <img src={bikroyStore} alt="bikroyStore" />
          </Link>

          <Link
            class="live-link text-secondary"
            to="https://bikroystore-f0230.firebaseapp.com/"
            target="_blank"
          >
            <AiOutlineLink /> Live <span>Site</span>
          </Link>
        </div>

        <div class="pt-2">
          <h2 className="text-info text-2xl font-semibold ">BikroyStore</h2>
          <p className="text-info/90 text-sm">
            <span className="font-semibold">Technologies:</span>
            React.js, Express.js, MongoDB, Firebase, JWT, Tailwind CSS, React
            Query, Stripe, React Hook Form.
          </p>
        </div>

        <div class="card-btn mt-3 flex justify-between">
          <button className="text-info text-sm border rounded-md py-2 px-2 scale-[.97] hover:scale-[1] hover:bg-gray-50 duration-300">
            <Link to="" className="flex gap-1 items-center">
              <AiFillGithub className="text-lg" />
              Client Code
            </Link>
          </button>
          <button className="text-info text-[15px] border rounded-md py-2 px-2 scale-[.97] hover:scale-[1] hover:bg-gray-50 duration-300">
            <Link to="" className="flex gap-1 items-center">
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
