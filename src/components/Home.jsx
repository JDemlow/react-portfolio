import React from "react";

import { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div name="home" className="w-full h-screen bg-[--primary-bg]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-white">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          James Demlow
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#e7ecef]">
          Full Stack Developer
        </h2>
        <p className="text-[#ccd6f6] py-4 max-w-[700px]">
          I'm a software engineer with years of experience building responsive
          and accessible websites and web applications. I'm interested in
          creating clean/well-tested code, using interpersonal abilities, and
          learning new skill sets to become an even better developer.
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[--accent-bg] hover:border-[--accent-bg] duration-150">
              View Work
              <span className="hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
