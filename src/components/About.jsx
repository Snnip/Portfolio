const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col min-h-screen w-full bg-slate-100 text-black p-10 md:p-20 mt-auto">
      <header>
        <h2 className="text-5xl md:text-9xl uppercase text-center mt-20">
          About me.
        </h2>

        <p className="text-center md:text-lg mt-4 md:mt-10 max-w-2xl mx-auto leading-loose">
          <b className="uppercase text-cyan-500">Welcome to my corner,</b>
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
              <b className="text-cyan-500 hover:text-cyan-700">contact me</b>.
            </a>
          </p>
        </div>

        <div className="md:w-1/2 md:max-w-lg">
          <h3 className="text-2xl mb-4 uppercase">Skills</h3>
          <p className="mb-10 md:mb-0">
            HTML · CSS · JavaScript · ReactJs · NodeJs · MySQL · Material UI ·
            Tailwind CSS · GitHub
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
