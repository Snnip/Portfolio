const Navbar = () => {
  return (
    <div className="flex justify-between p-8 bg-cyan-900 text-slate-300 sticky top-0 z-50 ">
      <div>
        <p className="uppercase text-lg md:text-3xl">S.</p>
      </div>
      <div className="flex flex-col md:flex-row gap-6 md:gap-12 text-lg md:text-3xl ">
        <a href="#home" className="hover:line-through">
          Home
        </a>
        <a href="#about" className="hover:line-through  ">
          About
        </a>
        <a href="#projects" className="hover:line-through">
          Projects
        </a>
        <a href="#contact" className="hover:line-through">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
