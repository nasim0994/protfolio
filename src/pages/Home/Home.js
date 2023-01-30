import React from "react";
import About from "../../components/About/About";
import Projects from "../../components/Projects/Projects";

const Home = () => {
  return (
    <div className="py-10">
      <About />
      <Projects />

      <section className="py-96"></section>
    </div>
  );
};

export default Home;
