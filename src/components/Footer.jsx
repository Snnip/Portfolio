import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";

const Footer = () => {
  return (
    <footer className=" md:h-64 p-8 bg-black text-slate-300">
      <div className="flex flex-col md:flex-row justify-around md:items-center gap-8">
        <section>
          <h2 className="uppercase font-bold text-xl mb-4">Sandra Pol</h2>
          <p className="w-3/4">
            A Full Stack Web Developer focused on growing in the technology
            world.
          </p>
        </section>

        <section>
          <h2 className="uppercase font-bold text-xl mb-4">Social</h2>
          <span className="flex gap-4">
            <a href="https://www.linkedin.com/in/sandra-polb/">
              <img src={linkedin} alt="Imagen de icono LinkedIn" />
            </a>
            <a href="https://github.com/Snnip">
              <img src={github} alt="Imagen de icono GitHub" />
            </a>
          </span>
        </section>
      </div>

      <div className="flex items-center justify-center">
        <section
          style={{ borderTop: "0.5px solid #e5e7eb" }}
          className=" text-center text-sm mt-20 w-1/2">
          <p className="mt-4">
            © Copyright 2023. Made by{" "}
            <span className="cursor-pointer font-bold">Sandra Pol</span>
          </p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
