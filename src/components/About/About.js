import React from "react";
import me from "../../images/na.jpeg";

const info = [
  { text: "Years experience", count: "04" },
  { text: "Completed Projects", count: "24" },
  { text: "Companies Work", count: "06" },
];

const About = () => {
  return (
    <div className="w-[1200px] mx-auto bg-neutral py-10">
      <div className="flex gap-14">
        <div className="w-[40%] flex flex-col items-end">
          <div>
            <img src={me} alt="" className="rounded-xl" />
          </div>
        </div>
        <div className="w-[60%]">
          <h2 className="text-4xl font-bold text-info pb-3">About Me</h2>
          <h2 className="text-2xl text-info font-semibold pb-2">
            My Name is Nasim Uddin.{" "}
            <span className="text-gradient ">I am a MERN Stack Developer.</span>
          </h2>
          <div className="text-info/80">
            <p className="pb-2">
              I have completed a web development course from{" "}
              <span className="font-semibold">Programming Hero</span>. Here I
              faced 11 assignment as well as more than 250 quizzes and scored
              100% marks in each assignment.
            </p>
            <p className="pb-2">
              I am an expert in{" "}
              <span className="font-semibold">
                HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, ReactJs,
                ExpressJs, MongoDB,
              </span>
              and <span className="font-semibold">Firebase</span>.
            </p>
            <p className="pb-2">
              Currently, I am trying to learn NextJs and TypeScript. Already
              completed a small project with NextJs.
            </p>
            <p className="pb-2">
              In the future, I want to develop myself as a Successful MERN stack
              developer.
            </p>
            <p> Thank you.</p>
          </div>

          <div className="flex justify-between pt-6 text-info">
            <div className="text-center">
              <h2 className="text-4xl font-bold">
                <span>02</span>
                <span className="text-primary">+</span>
              </h2>
              <h2 className="font-semibold">Years Learning Experience</h2>
            </div>
            <div className="text-center">
              <h2 className="text-4xl font-bold">
                <span>01</span>
                <span className="text-secondary">+</span>
              </h2>
              <h2 className="font-semibold">Month Internship Experience</h2>
            </div>
            <div className="text-center">
              <h2 className="text-4xl font-bold">
                <span>24</span>
                <span className="text-primary">+</span>
              </h2>
              <h2 className="font-semibold">Completed Projects</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
