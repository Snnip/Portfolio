const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col min-h-screen w-full bg-yellow-400 text-black p-10 md:p-20 dark:text-slate-200 dark:bg-slate-900">
      <header>
        <h2 className="flex justify-center text-center text-5xl sm:text-7xl md:text-9xl uppercase mt-10 text-white">
          About me
        </h2>

        <p className="text-center md:text-lg mt-10 md:mt-10 max-w-2xl mx-auto leading-loose">
          <b className="uppercase text-blue-500">Welcome to my corner,</b>
          <br />
          Here you will find more information about me, what I do, and my
          current skills especially in terms of programming and technology.
        </p>
      </header>

      <div className="flex flex-col md:flex-row justify-evenly gap-16 text-left mt-16 md:mt-24 leading-loose">
        <div className="md:w-1/2 md:max-w-lg ">
          <h3 className="text-2xl mb-4 uppercase">Take a look!</h3>
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
            <a href="#contact">
              <b className="text-blue-500 hover:text-yellow-400">contact me</b>.
            </a>
          </p>
        </div>

        <div className="md:w-1/2 md:max-w-lg">
          <h3 className="text-2xl mb-4 uppercase">Skills</h3>

          <div className="flex flex-wrap gap-6">
            <div className="flex items-center justify-center text-white rounded-full  bg-slate-800 w-36 ">
              HTML
            </div>
            <div className="flex items-center justify-center text-white rounded-full  bg-slate-800 w-36">
              CSS
            </div>
            <div className="flex items-center justify-center text-white rounded-full bg-slate-800 w-36 ">
              JavaScript
            </div>
            <div className="flex items-center justify-center text-white rounded-full bg-slate-800 w-36 ">
              ReactJs
            </div>
            <div className="flex items-center justify-center text-white rounded-full bg-slate-800 w-36">
              NodeJs
            </div>
            <div className="flex items-center justify-center text-white rounded-full bg-slate-800 w-36 ">
              MySQL
            </div>
            <div className="flex items-center justify-center text-white rounded-full bg-slate-800 w-36 ">
              Material UI
            </div>
            <div className="flex items-center justify-center text-white rounded-full bg-slate-800 w-36 ">
              Tailwind CSS
            </div>
            <div className="flex items-center justify-center text-white rounded-full bg-slate-800  w-36">
              GitHub
            </div>
          </div>

          <h3 className="text-2xl mt-8 mb-4 uppercase">Soft skills</h3>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center justify-center text-white rounded-full  bg-slate-800 w-40 ">
              Teamwork
            </div>
            <div className="flex items-center justify-center text-white rounded-full  bg-slate-800 w-40">
              Attention to detail
            </div>
            <div className="flex items-center justify-center text-white rounded-full bg-slate-800 w-40 ">
              Constancy
            </div>
            <div className="flex items-center justify-center text-white rounded-full bg-slate-800 w-40 ">
              Organized
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
