import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-base-200  p-4 text-neutral">
      <div className="w-[90%] xl:w-[1200px] mx-auto footer items-center">
        <div className="items-center grid-flow-col">
          <p>#Copyright © 2023 - All right reserved</p>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <div>
            <Link to="/home" className="text-gradient font-bold text-2xl logo">
              <span>Nasim</span>
              <span>Uddin</span>
            </Link>
            <p>MERN Start Developer</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
