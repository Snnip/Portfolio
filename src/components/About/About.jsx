import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex flex-col h-screen w-full">
      <div className="p-5 md:p-10 flex-grow ">
        <header>
          <Link to="/" className="flex justify-end mb-8">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 stroke-cyan-500 ">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </button>
          </Link>
          <h2 className="text-5xl md:text-8xl uppercase text-center">
            About me.
          </h2>
          <p className="text-center md:text-lg mt-4 md:mt-10 max-w-2xl mx-auto leading-loose">
            <b>Welcome to my corner,</b>
            <br />
            Here you will find more information about me, what I do, and my
            current skills especially in terms of programming and technology.
          </p>
        </header>

        <div className="flex flex-col md:flex-row justify-evenly gap-16 text-left mt-16 md:mt-24 leading-loose">
          <div className="md:w-1/2 md:max-w-lg ">
            <h3 className="text-3xl mb-4 animate-fade-down animate-duration-1 text-sky-500">
              Take a look!
            </h3>
            <p>
              At the beginning of 2023 I plunged into the great adventure of web
              development. After months of continuous learning, I am excited to
              continue growing more and more in this sector. I love being able
              to apply my knowledge in new projects.{" "}
            </p>
            <p>
              I am open to job opportunities where I can learn, grow and
              contribute. I encourage you to <b>contact me</b>.
            </p>

            <Link to="/contact">
              <button className="text-sm border-2 border-sky-500 rounded-full w-20 shadow-lg uppercase mt-4">
                contact
              </button>
            </Link>
          </div>

          <div className="md:w-1/2 md:max-w-lg">
            <h3 className="text-3xl mb-4 animate-fade-down animate-duration-1 text-sky-500">
              My Skills
            </h3>
            <p className="mb-10 md:mb-0">
              HTML / CSS / JavaScript / ReactJs / NodeJs / MySQL / Material UI /
              Tailwind CSS / GitHub
            </p>
          </div>
        </div>
      </div>

      <footer className="flex justify-around text-center bg-sky-800 text-white rounded-full w-full md:w-20 fixed bottom-0 right-0">
        <p>©️ 2023</p>
      </footer>
    </div>
  );
};

export default About;
