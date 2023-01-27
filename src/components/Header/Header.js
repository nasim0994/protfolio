import React from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import bannerImg from "../../images/banner.png";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Header = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <header>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
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
      <nav className="top-menu">
        <div className="lg:w-[1200px] mx-auto flex justify-between items-center">
          <div>
            <Link to="/home" className="text-gradient font-bold text-2xl">
              <span>Nasim</span>
              <span>Uddin</span>
            </Link>
          </div>
          <div>
            <ul className="flex">
              <li className="p-4 text-neutral">
                <NavLink to="">Item 1</NavLink>
              </li>
              <li className="p-4 text-neutral">
                <NavLink to="">Item 1</NavLink>
              </li>
              <li className="p-4 text-neutral">
                <NavLink to="">Item 1</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="h-[500px] relative">
        <div className="lg:w-[1200px] mx-auto">
          <div className="flex justify-between items-center">
            <div className="w-[50%] ">
              <h2 className="text-3xl font-semibold text-neutral">
                Hello, my name is
              </h2>
              <h1 className="text-6xl font-semibold text-neutral py-2">
                Nasim Uddin
              </h1>
              <h2 className="text-3xl font-semibold text-neutral">
                <span className="pr-2">And</span>
                <span className="text-gradient">I'm a Front End Developer</span>
              </h2>
            </div>

            <div className="w-[50%] flex justify-end">
              <img src={bannerImg} alt="" className="w-[365px] mt-[-50px] " />
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Animation --> */}
      <div class="animation animation-1"></div>
      <div class="animation animation-2"></div>
      <div class="animation animation-3"></div>
      <div class="animation animation-4"></div>
    </header>
  );
};

export default Header;
