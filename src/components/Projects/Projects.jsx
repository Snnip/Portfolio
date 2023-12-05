import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="flex flex-col justify-center gap-8 min-h-screen w-full p-12 md:p-20 mx-auto bg-blend-multiply bg-sky-900 text-slate-300 ">
      <header>
        <Link to="/" className="right-10 top-10 absolute">
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
          Projects.
        </h2>

        <p className="text-center md:text-lg mt-4 md:mt-10 max-w-2xl mx-auto leading-loose">
          Here you will find some of the projects in which I have collaborated.{" "}
        </p>
      </header>

      <div className="flex items-center justify-evenly mt-28">
        <img
          src="../../public/wrench.png"
          alt="Imagen del proyecto Wrench"
          className=""
        />

        <div className="w-1/2">
          <h3 className="uppercase text-3xl mb-4 animate-fade-down animate-duration-1">
            Wrench
          </h3>
          <p className="leading-loose">
            Wrench is a web application built with React, Vite, Material UI, and
            CSS, designed to facilitate user-generated services for digital file
            modifications. With Wrench, users can create, request, and
            collaborate on services for various digital file modifications.
            Whether you need an image edited, a document formatted, or any other
            digital file modification, Wrench connects users with talented
            individuals who can assist.
          </p>
          <button className="text-white bg-lime-600 hover:bg-lime-800 focus:outline-none  rounded-lg px-5 py-2 text-center mt-6 text-lg">
            <a
              href="https://github.com/AkazaXeros/portal-necesidades-digitales-app"
              target="_blank"
              rel="noopener noreferrer">
              Link
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
