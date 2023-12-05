import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen w-full bg-sky-900 text-slate-300 p-10 md:p-20 mt-auto">
      <header>
        <Link to="/" className="right-10 top-10 absolute ">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 stroke-slate-300 ">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </button>
        </Link>
        <h2 className="text-7xl md:text-9xl uppercase text-center mt-20">
          About me.
        </h2>
        <p className="text-center md:text-lg mt-4 md:mt-10 max-w-2xl mx-auto leading-loose">
          <b className="uppercase">Welcome to my corner,</b>
          <br />
          Here you will find more information about me, what I do, and my
          current skills especially in terms of programming and technology.
        </p>
      </header>

      <div className="flex flex-col md:flex-row justify-evenly gap-16 text-left mt-16 md:mt-24 leading-loose">
        <div className="md:w-1/2 md:max-w-lg ">
          <h3 className="text-3xl mb-4 animate-fade-down animate-duration-1 text-yellow-600">
            Take a look!
          </h3>
          <p>
            After years of dedicating myself to healthcare, I decided to bet on
            a totally different sector to what i am used to, but that I love.
            Therefore, in early 2023 I plunged into the great adventure of web
            development, and after months of continuous learning, effort, and
            dedication, I am now here, showing a small part of my knowledge as a
            junior web developer.
          </p>
          <br />
          <p>
            I am open to job opportunities where I can learn, grow and
            contribute my knowledge in new projects.
            <br />I encourage you to {""}
            <Link to="/contact">
              <b className="text-yellow-600 hover:text-white">contact me</b>.
            </Link>
          </p>
        </div>

        <div className="md:w-1/2 md:max-w-lg">
          <h3 className="text-3xl mb-4 animate-fade-down animate-duration-1 text-yellow-600">
            Skills
          </h3>
          <p className="mb-10 md:mb-0">
            HTML / CSS / JavaScript / ReactJs / NodeJs / MySQL / Material UI /
            Tailwind CSS / GitHub
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
