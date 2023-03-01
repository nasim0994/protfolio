import React from "react";
import "./Home.css";
import About from "../../components/About/About";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";
import Contact from "./../../components/Contact/Contact";

const Home = () => {
  return (
    <div className="py-10">
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default Home;
