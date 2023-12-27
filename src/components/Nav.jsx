import { useState } from "react";

import { FaHamburger, FaTimes } from "react-icons/fa";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const content = (
    <>
      <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-blue-800 transition z-40 ">
        <ul className="text-center text-3xl p-10 text-white">
          <li className="my-4 py-4 hover:rounded">
            <a href="#home" className="hover:line-through">
              Home
            </a>
          </li>

          <li className="my-4 py-4 hover:rounded">
            <a href="#about" className="hover:line-through">
              About
            </a>
          </li>

          <li className="my-4 py-4 hover:rounded">
            <a href="#projects" className="hover:line-through">
              Projects
            </a>
          </li>

          <li className="my-4 py-4 hover:bg-slate-8 hover:rounded00 hover:rounded">
            <a href="#contact" className="hover:line-through">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 ">
      <div className="h-10vh flex justify-between z-50  lg:py-5 px-8 py-4 shadow-md text-blue-500">
        <div className=" lg:flex md:flex md:flex-1 lg:flex-1 items-center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className=" flex gap-12 md:text-3xl lg:text-3xl font-semibold">
              <li className=" hover:text-black transition">
                <a href="#home" className="hover:line-through">
                  Home
                </a>
              </li>

              <li className="hover:text-black transition">
                <a href="#about" className="hover:line-through">
                  About
                </a>
              </li>

              <li className="hover:text-black transition">
                <a href="#projects" className="hover:line-through">
                  Projects
                </a>
              </li>

              <li className="hover:text-black transition">
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
