import { useState } from "react";
import Menu from "./Menu";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <nav className="flex justify-between p-8 w-full bg-cyan-900 text-slate-300 sticky top-0 z-50 ">
      <div className="md:hidden cursor-pointer" onClick={toggleOpen}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>

      {open && <Menu closeMenu={closeMenu} />}

      <div className="hidden md:block">
        <ul className="flex flex-row gap-8 md:text-2xl">
          <li>
            <a href="#home" className="hover:line-through" onClick={closeMenu}>
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:line-through" onClick={closeMenu}>
              About
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="hover:line-through"
              onClick={closeMenu}>
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:line-through"
              onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
