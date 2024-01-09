import { useEffect, useState } from "react";

import curriculum from "../assets/curriculum.pdf";
import Nav from "./Nav";

import { BsMouse } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { MdOutlineDarkMode } from "react-icons/md";

const Home = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  const handleChangueTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <div
      id="home"
      className=" flex justify-center min-h-screen w-full p-4 text-black bg-white dark:text-slate-200 dark:bg-slate-900">
      <Nav />

      <div className="flex flex-col justify-center items-center gap-8 px-4 md:px-16">
        <h2 className="text-6xl  sm:text-8xl uppercase ">
          <p className="text-yellow-400 animate-fade-right animate-once animate-duration-[1500ms] text-7xl sm:text-9xl">
            Hey,
          </p>
          <p className="animate-fade-right animate-once animate-duration-[1500ms] animate-delay-1000">
            i am Sandra
          </p>
        </h2>
        <p className="text-base md:text-lg animate-fade-right animate-once animate-duration-[1500ms] animate-delay-[2000ms] ">
          a junior fullstack web developer in constant development and learning.
        </p>

        <div className="animate-flip-up animate-once animate-duration-[1500ms] animate-delay-[2500ms]">
          <button className="text-lg font-bold text-blue-500  md:text-xl uppercase animate-bounce animate-infinite text-left  ">
            <a
              href={curriculum}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:line-through">
              My curriculum
            </a>
          </button>
        </div>

        <div>
          <span className="flex justify-center absolute bottom-4 left-1/2 transform -translate-x-1/2 ">
            <BsMouse className="w-12 h-12" />
          </span>
        </div>
      </div>

      <div className="flex justify-center items-center px-4 absolute top-48 md:top-60 right-2 transform -translate-y-1/2 h-40 md:h-52 rounded-lg shadow-2xl">
        <span className="flex flex-col items-center gap-4 md:gap-6">
          <a href="https://www.linkedin.com/in/sandra-polb/">
            <FaLinkedin className="w-8 h-8 md:w-10 md:h-10" />
          </a>
          <a href="https://github.com/Snnip">
            <FaGithub className="w-8 h-8 md:w-10 md:h-10" />
          </a>

          <button onClick={handleChangueTheme} className="text-blue-500 mt-6">
            {" "}
            {theme === "light" ? (
              <MdOutlineDarkMode className="w-8 h-8 md:w-10 md:h-10" />
            ) : (
              <IoSunnyOutline className="w-8 h-8 md:w-10 md:h-10" />
            )}
          </button>
        </span>
      </div>
    </div>
  );
};
export default Home;
