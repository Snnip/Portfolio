import { useState } from "react";

import { FaHamburger, FaTimes } from "react-icons/fa";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const content = (
    <>
      <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition z-40">
        <ul className="text-center text-xl p-10">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            <a href="#home" className="hover:line-through">
              Home
            </a>
          </li>

          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            <a href="#about" className="hover:line-through">
              About
            </a>
          </li>

          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            <a href="#projects" className="hover:line-through">
              Projects
            </a>
          </li>

          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-8 hover:rounded00 hover:rounded">
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
      <div className="h-10vh flex justify-between z-50 text-black lg:py-5 px-8 py-4">
        <div className="flex items-center flex-1 z-50 ">
          <span className="text-3xl font-bold">Logo</span>
        </div>

        <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 md:text-2xl lg:text-3xl font-semibold">
              <li className="hover:text-white transition">
                <a href="#home" className="hover:line-through">
                  Home
                </a>
              </li>

              <li className="hover:text-white transition">
                <a href="#about" className="hover:line-through">
                  About
                </a>
              </li>

              <li className="hover:text-white transition">
                <a href="#projects" className="hover:line-through">
                  Projects
                </a>
              </li>

              <li className="hover:text-white transition">
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
            <FaTimes className="w-6 h-6" />
          ) : (
            <FaHamburger className="w-6 h-6" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Nav;
