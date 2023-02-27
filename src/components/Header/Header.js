import React, { useState } from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import bannerImg from "../../images/banner.png";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Typewriter } from "react-simple-typewriter";

import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [activeNav, setActiveNav] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const handeStickyNav = () => {
    if (window.scrollY > 0) {
      setActiveNav(true);
    } else {
      setActiveNav(false);
    }
  };
  window.addEventListener("scroll", handeStickyNav);
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <header>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 80,
                duration: 0.1,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              directions: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 900,
              },
              value: 120,
            },
            opacity: {
              value: 0.2,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />

      <div className={activeNav ? "top-menu-active top-menu" : "top-menu"}>
        <div className="sm:flex justify-between items-center py-2">
          <div className="flex justify-between">
            <Link
              to="/home"
              className="text-gradient font-bold text-xl sm:text-2xl logo"
            >
              <span>Nasim</span>
              <span>Uddin</span>
            </Link>

            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className={`text-xl sm:hidden ${
                activeNav ? "text-title" : "text-neutral"
              }`}
            >
              {mobileMenu ? <AiOutlineClose /> : <FiMenu />}
            </button>
          </div>
          <div>
            <nav
              className={`mobile-menu ${
                mobileMenu && "show-mobile-menu border-t border-gray-500 mt-2 "
              }`}
            >
              <ul className="sm:flex text-neutral">
                <li>
                  <NavLink to="">Home</NavLink>
                </li>
                <li>
                  <NavLink to="">Project</NavLink>
                </li>
                <li>
                  <NavLink to="">Services</NavLink>
                </li>
                <li>
                  <NavLink to="">Contact</NavLink>
                </li>
                <li>
                  <Link to="https://codegallery-32763.web.app/" target="_blank">
                    Blogs
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div>
        <div className="w-[90%] xl:w-[1200px] mx-auto">
          <div className="h-[500px] flex justify-between items-center">
            <div className="md:w-[50%]">
              <h2 className="text-xl sm:text-3xl font-semibold text-neutral">
                Hello, my name is
              </h2>
              <h1 className="text-4xl sm:text-6xl font-semibold text-neutral py-2">
                Nasim Uddin
              </h1>
              <h2 className="text-xl sm:text-3xl font-semibold text-neutral">
                <span className="pr-2">And</span>
                <span className=" animate_type">
                  <Typewriter
                    words={[
                      "I am Front End Developer",
                      "I am MERN Stack Developer",
                      "I am Full Stack Developer",
                    ]}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={100}
                    deleteSpeed={100}
                    delaySpeed={1500}
                  />
                </span>
              </h2>
              {/* Button */}
              <div className="mt-4">
                <button className="px-4 py-1.5 sm:py-3 rounded-md text-white bg-gradient text-xs sm:text-sm font-semibold scale-[.96] hover:scale-[1] duration-300">
                  <a
                    href="https://drive.google.com/file/d/1FPrMUC8XSdUkckLhm9ERjXuLz_ayWiId/view?usp=share_link"
                    target="blank"
                  >
                    View Resume
                  </a>
                </button>
              </div>
            </div>

            <div className="w-[50%] hidden md:flex justify-end">
              <img
                src={bannerImg}
                alt=""
                className="w-[365px] absolute bottom-0"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Animation --> */}
      <div className="animation animation-1"></div>
      <div className="animation animation-2"></div>
      <div className="animation animation-3"></div>
      <div className="animation animation-4"></div>
    </header>
  );
};

export default Header;
