import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
const skills = [
  {
    language: "HTMl",
    experience: "90",
  },
  {
    language: "CSS",
    experience: "90",
  },

  {
    language: "Bootstrap",
    experience: "70",
  },
  {
    language: "Tailwind CSS",
    experience: "90",
  },
  {
    language: "JavaScript",
    experience: "70",
  },
  {
    language: "React js",
    experience: "80",
  },
  {
    language: "Redux",
    experience: "60",
  },
  {
    language: "Express js",
    experience: "70",
  },
  {
    language: "MongoDB",
    experience: "80",
  },
  {
    language: "Firebase",
    experience: "60",
  },
];

const Skills = () => {
  return (
    <div>
      <div className="w-[1200px] mx-auto py-10 ">
        <h2 className="text-center text-3xl font-semibold text-gradient">
          My Skill
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-8 justify-center">
          {skills.map((skill) => (
            <div>
              <h2 className="font-medium text-lg">{skill.language}</h2>
              <ProgressBar
                completed={skill.experience}
                animateOnRender={true}
                bgColor="#7928ca"
                height="15px"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
