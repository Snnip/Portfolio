import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col justify-center gap-8 h-screen w-full p-5 md:p-20 mx-auto bg-blend-multiply bg-sky-900 text-white">
      <h2 className="text-6xl md:text-8xl uppercase">Hey, i am Sandra Pol</h2>
      <p className="text-base md:text-lg">
        a junior fullstack web developer in constant development and learning.
      </p>
      <Link to="/about">
        <button className="text-lg md:text-xl text-white uppercase animate-bounce">
          About me
        </button>
      </Link>

      <div className="mt-12 ml-auto">
        <nav className="flex flex-col md:flex-row gap-4 text-lg md:text-3xl">
          <Link to="/" className="hover:line-through">
            Home
          </Link>
          <Link to="/about" className="hover:line-through">
            About
          </Link>
          <Link to="/contact" className="hover:line-through">
            Contact
          </Link>
        </nav>
      </div>

      <footer className="flex justify-around text-center absolute bottom-0 right-0 bg-white text-black rounded-full w-20">
        <p>©️ 2023</p>
      </footer>
    </div>
  );
};
export default Home;
