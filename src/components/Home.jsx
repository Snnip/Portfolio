import { Link } from "react-router-dom";

import Footer from "./Footer";
import curriculum from "../assets/curriculum.pdf";

const Home = () => {
  return (
    <div className="flex flex-col justify-center gap-8 min-h-screen w-full p-8 md:p-20 mx-auto bg-sky-900 text-slate-300">
      <h2 className="text-6xl md:text-8xl uppercase ">
        <p className="text-lime-500 text-7xl md:text-9xl">Hey,</p>
        <p>i am Sandra</p>
      </h2>
      <p className="text-base md:text-lg">
        a junior fullstack web developer in constant development and learning.
      </p>

      <button className="text-lg text-lime-500 hover:line-through md:text-xl uppercase animate-bounce text-left">
        <a href={curriculum} target="_blank" rel="noopener noreferrer">
          My curriculum
        </a>
      </button>

      <div className="mt-12 ml-auto">
        <nav className="flex flex-col md:flex-row gap-3 md:gap-6 text-lg md:text-3xl">
          <Link to="/about" className="hover:line-through">
            About
          </Link>
          <Link to="/projects" className="hover:line-through">
            Projects
          </Link>
          <Link to="/contact" className="hover:line-through">
            Contact
          </Link>
        </nav>
      </div>

      <Footer />
    </div>
  );
};
export default Home;
