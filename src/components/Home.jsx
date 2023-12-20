import curriculum from "../assets/curriculum.pdf";
import mouse from "../assets/mouse-cursor.png";

const Home = () => {
  return (
    <div
      id="home"
      className=" min-h-screen w-full mx-auto p-4 md:p-20  bg-cyan-900 text-slate-300">
      <section className="flex flex-col gap-8 mt-20">
        <h2 className="text-6xl md:text-8xl uppercase ">
          <p className="text-cyan-500 text-7xl md:text-9xl animate-fade-right animate-once animate-duration-[1500ms]">
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
          <button className="text-lg text-cyan-500  md:text-xl uppercase animate-bounce animate-infinite text-left  ">
            <a
              href={curriculum}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:line-through">
              My curriculum
            </a>
          </button>
        </div>
      </section>

      <img
        src={mouse}
        alt="Icono de un ratón con una flecha hacia abajo"
        className="flex justify-center absolute bottom-2 left-1/2 transform -translate-x-1/2"
        style={{ filter: "brightness(0) invert(100%)" }}
      />
    </div>
  );
};
export default Home;
