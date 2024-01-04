import { useEffect, useState } from "react";

import { MdOutlineDarkMode, MdOutlineRocketLaunch } from "react-icons/md";
import { IoSunnyOutline } from "react-icons/io5";
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
        <div className="lg:hidden block absolute top-8 w-full left-0 right-0 bg-blue-800 transition z-40">
          <button
            onClick={handleChangueTheme}
            className="px-12 py-4 w-2 h-2 text-yellow-500">
            {theme === "light" ? (
              <MdOutlineDarkMode className="w-8 h-8" />
            ) : (
              <IoSunnyOutline className="w-8 h-8" />
            )}
          </button>

          <ul className="flex flex-col gap-8 items-center text-3xl p-6 text-white">
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
          <div>
            <span>
              <MdOutlineRocketLaunch className="w-16 h-16 text-purple-800" />
            </span>
          </div>

          <div className="flex-10">
            <ul className=" flex gap-12 md:text-2xl lg:text-3xl font-semibold">
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

          <div>
            <button onClick={handleChangueTheme} className="text-yellow-500">
              {theme === "light" ? (
                <MdOutlineDarkMode className="w-8 h-8" />
              ) : (
                <IoSunnyOutline className="w-8 h-8" />
              )}
            </button>
          </div>
        </div>
        <div className="md:hidden flex items-center justify-between w-full">
          <span>
            <MdOutlineRocketLaunch className="w-16 h-16 text-purple-800" />
          </span>

          <button onClick={handleClick}>
            {open ? (
              <FaTimes className="w-8 h-8" />
            ) : (
              <FaHamburger className="w-8 h-8" />
            )}
          </button>
        </div>

        {/* Menú desplegable para dispositivos pequeños */}
        {open && (
          <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-blue-800 transition z-40">
            {content}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
