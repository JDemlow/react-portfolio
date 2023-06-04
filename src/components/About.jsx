import React from "react";
import restaurantImage from "../assets/restaurant.jpeg";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-[--primary-bg] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[--accent-bg]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, I'm James. Nice to meet you! Please take a look around.</p>
          </div>
          <div>
            <p>
              I'm a creative, detail-oriented, software engineer with a deep
              interest in problem-solving. I have a proven track record of
              creating and implementing successful full stack web experiences.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img
            className="w-32 md:w-60 mx-auto my-4 py-8 hover:scale-110 duration-500 mb-20"
            src={restaurantImage}
            alt="picture of James"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
