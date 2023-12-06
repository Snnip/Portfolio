import { Link } from "react-router-dom";

import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div className="flex flex-col justify-center gap-8 min-h-screen w-full p-12 md:p-20 mx-auto bg-blend-multiply bg-sky-900 text-slate-300">
      <h2 className="text-6xl md:text-8xl uppercase">Hey, i am Sandra Pol</h2>
      <p className="text-base md:text-lg">
        a junior fullstack web developer in constant development and learning.
      </p>
      <Link to="/projects">
        <button className="text-lg text-lime-500 hover:line-through md:text-xl uppercase animate-bounce">
          Projects
        </button>
      </Link>

      <div className="mt-12 ml-auto">
        <nav className="flex flex-col md:flex-row gap-3 md:gap-6 text-lg md:text-3xl">
          <Link to="/about" className="hover:line-through">
            About
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
