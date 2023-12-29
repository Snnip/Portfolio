import { useEffect, useState } from "react";

import { MdOutlineDarkMode } from "react-icons/md";
import { FaHamburger, FaTimes } from "react-icons/fa";

const Nav = () => {
  const [theme, setTheme] = useState("light");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  //----------------handlers-----------------//
  const handleChangueTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const handleClick = () => {
    setOpen(!open);
  };

  // Cerrar el menú al hacer clic en una opción
  const handleOptionClick = () => {
    setOpen(false);
  };

  const content = (
    <>
      <div>
        <div className="flex gap-16dark:text-slate-200 text-yellow-400">
          <button onClick={handleChangueTheme}>
            <MdOutlineDarkMode className="w-8 h-8" />
          </button>
        </div>
        <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-blue-800 transition z-40">
          <ul className="flex flex-col gap-8 items-center text-3xl p-10 text-white">
            <li>
              <a
                href="#home"
                className="hover:line-through"
                onClick={handleOptionClick}>
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="hover:line-through"
                onClick={handleOptionClick}>
                About
              </a>
            </li>

            <li>
              <a
                href="#projects"
                className="hover:line-through"
                onClick={handleOptionClick}>
                Projects
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="hover:line-through"
                onClick={handleOptionClick}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 ">
      <div className="h-10vh flex justify-between z-50  lg:py-5 px-8 py-4 shadow-md text-blue-500 bg-white dark:bg-slate-900 dark:shadow-white dark:shadow-sm">
        <div className=" lg:flex md:flex md:flex-1 lg:flex-1 items-center justify-between font-normal hidden">
          <div className="flex gap-16dark:text-slate-200 text-yellow-500">
            <button onClick={handleChangueTheme}>
              <MdOutlineDarkMode className="w-8 h-8" />
            </button>
          </div>
          <div className="flex-10">
            <ul className=" flex gap-12 md:text-3xl lg:text-3xl font-semibold">
              <li className=" hover:text-yellow-500 transition">
                <a href="#home" className="hover:line-through">
                  Home
                </a>
              </li>

              <li className="hover:text-yellow-500 transition">
                <a href="#about" className="hover:line-through">
                  About
                </a>
              </li>

              <li className="hover:text-yellow-500 transition">
                <a href="#projects" className="hover:line-through">
                  Projects
                </a>
              </li>

              <li className="hover:text-yellow-500 transition">
                <a href="#contact" className="hover:line-through">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div>{open && content}</div>

        <button className="block md:hidden transition" onClick={handleClick}>
          {open ? (
            <FaTimes className="w-8 h-8" />
          ) : (
            <FaHamburger className="w-8 h-8" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Nav;
