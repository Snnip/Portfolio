import wrench from "../assets/wrench.png";
import emojis from "../assets/emojis.png";

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col justify-center gap-8 min-h-screen w-full p-8 md:p-20 mx-auto bg-yellow-400 text-black">
      <header>
        <h2 className="flex justify-center text-5xl md:text-7xl uppercase mt-20">
          <p>Projects</p>
          <p className="text-blue-500 ">.</p>
        </h2>

        <p className="text-center md:text-lg mt-4 md:mt-10 max-w-2xl mx-auto leading-loose">
          Here you will find some of the projects in which I have collaborated.{" "}
        </p>
      </header>
      <div>
        <h3 className="text-2xl md:text-3xl uppercase text-center mt-28 pb-2 border-b-2 border-blue-500">
          Front-end
        </h3>

        <article className="flex flex-col md:flex-row lg:w-3/4 lg:mx-auto items-center gap-10 md:gap-20 mt-14">
          <img
            src={wrench}
            alt="Imagen de captura de pantalla del proyecto Wrench"
            className="h-80 md:h-96 lg:h-auto"
          />

          <section>
            <h4 className="text-lg md:text-2xl mb-4 animate-fade-down animate-duration-1">
              Wrench
            </h4>
            <p className="leading-loose">
              Wrench is a web application built with React, Vite, Material UI,
              and CSS, designed to facilitate user-generated services for
              digital file modifications. With Wrench, users can create,
              request, and collaborate on services for various digital file
              modifications. Whether you need an image edited, a document
              formatted, or any other digital file modification, Wrench connects
              users with talented individuals who can assist.
            </p>
            <button className="text-white rounded-full px-12 py-2 text-center mt-6 text-lg transition ease-in-out delay-100 bg-blue-500  hover:-translate-y-1 hover:scale-110 hover:bg-slate-800 duration-300">
              <a
                href="https://github.com/AkazaXeros/portal-necesidades-digitales-app"
                target="_blank"
                rel="noopener noreferrer">
                Link
              </a>
            </button>
          </section>
        </article>

        <article className="flex flex-col md:flex-row lg:w-3/4 lg:mx-auto items-center gap-10 md:gap-20 mt-28">
          <img
            src={emojis}
            alt="Imagen de captura de pantalla del proyecto Parejas de Emojis"
            className="h-80 md:h-96 lg:h-auto"
          />

          <section>
            <h4 className="text-lg md:text-2xl mb-4 animate-fade-down animate-duration-1">
              Parejas de Emoji
            </h4>
            <p className="leading-loose">
              Parejas de emoji is a memory game created with HTML, CSS and
              JavaScript, where 16 pairs of covered cards are displayed and can
              be uncovered two by two until all of them are revealed.
            </p>
            <button className="text-white rounded-full px-12 py-2 text-center mt-6 text-lg transition ease-in-out delay-100 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-slate-800 duration-300">
              <a
                href="https://github.com/AkazaXeros/Parejas-de-Emoji"
                target="_blank"
                rel="noopener noreferrer">
                Link
              </a>
            </button>
          </section>
        </article>
      </div>
      <div>
        <h3 className="text-2xl md:text-3xl uppercase text-center mt-28 pb-2 border-b-2 border-blue-500">
          Back-end
        </h3>

        <article className="flex flex-col lg:w-3/4 lg:mx-auto  mt-14">
          <h4 className=" text-lg md:text-2xl mb-4 animate-fade-down animate-duration-1">
            Portal de Necesidades Digitales
          </h4>
          <p>
            API that allows to manage a website where people who need some
            digital service can ask for help to other users. The API is built
            with Node.js and Express. And the database with MySQL.
          </p>
          <p>
            Example: translate a text, edit a photo, review a document... Only
            needs that can be done through a digital file.
          </p>

          <button className="text-white rounded-full w-48 py-2 text-center mt-6 text-lg transition ease-in-out delay-100 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-slate-800 duration-300">
            <a
              href="https://github.com/Snnip/Portal-de-necesidades-digitales"
              target="_blank"
              rel="noopener noreferrer">
              Link
            </a>
          </button>
        </article>
      </div>
    </div>
  );
};

export default Projects;
