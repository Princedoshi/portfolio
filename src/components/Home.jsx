import React from "react";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import hero from '../assets/portfolio/hero.png'
// C:\Users\doshi\Downloads\yt-react-one-portfolio-main\yt-react-one-portfolio-main\src\assets\hero.png
const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Web Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I am a Web Developer who loves making web applications using Javascript , TailwindCSS , React and NextJS
          </p>

          <div>
            <Link
              to="experience"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Experience
              
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={hero}
            alt="my profile"
            className="rounded-2xl mx-auto h-[500px] md:w-full "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
