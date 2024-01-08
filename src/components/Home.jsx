import Nav from "./Nav";

import curriculum from "../assets/curriculum.pdf";
import { BsMouse } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <div
      id="home"
      className=" flex justify-center min-h-screen w-full p-4 text-black bg-white dark:text-slate-200 dark:bg-slate-900">
      <Nav />
      <section className="flex flex-col justify-center items-center gap-8 px-4 md:px-16">
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
        <span className="flex justify-center absolute bottom-4 left-1/2 transform -translate-x-1/2 ">
          <BsMouse className="w-12 h-12" />
        </span>
      </section>

      <section className="flex justify-center items-center px-4 absolute top-40 md:top-48 right-4 transform -translate-y-1/2 h-24 md:h-32 rounded-lg shadow-2xl">
        <span className="flex flex-col items-center gap-4 md:gap-6">
          <a href="https://www.linkedin.com/in/sandra-polb/">
            <FaLinkedin className="w-8 h-8 md:w-10 md:h-10" />
          </a>
          <a href="https://github.com/Snnip">
            <FaGithub className="w-8 h-8 md:w-10 md:h-10" />
          </a>
        </span>
      </section>
    </div>
  );
};
export default Home;
