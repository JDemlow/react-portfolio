import React from "react";

import cssIcon from "../assets/css.png";
import tailwindIcon from "../assets/tailwind.png";
import javascriptIcon from "../assets/javascript.png";
import nodeIcon from "../assets/node.png";
import reactIcon from "../assets/react.png";
import firebaseIcon from "../assets/firebase.png";
import githubIcon from "../assets/github.png";
import mongoIcon from "../assets/mongo.png";

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full h-screen bg-[--primary-bg] text-gray-300"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[--accent-bg]">
            Skills
          </p>
          <p className="py-4">
            These are just some of the technologies I've worked with
            professionally
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto my-4" src={cssIcon} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto my-4"
              src={tailwindIcon}
              alt="tailwind icon"
            />
            <p className="my-4">TAILWIND CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto my-4"
              src={javascriptIcon}
              alt="javascript icon"
            />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto my-4" src={nodeIcon} alt="node icon" />
            <p className="my-4">NODE.js</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto my-4"
              src={reactIcon}
              alt="react icon"
            />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto my-4"
              src={firebaseIcon}
              alt="firebase icon"
            />
            <p className="my-4">FIREBASE</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto my-4"
              src={githubIcon}
              alt="github icon"
            />
            <p className="my-4">GITHUB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto my-4"
              src={mongoIcon}
              alt="mongo db icon"
            />
            <p className="my-4">MONGO DB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
