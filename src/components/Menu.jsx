const Menu = ({ closeMenu }) => {
  return (
    <div>
      <ul>
        <li>
          <a href="#home" className="hover:line-through" onClick={closeMenu}>
            Home
          </a>
        </li>

        <li>
          <a href="#about" className="hover:line-through " onClick={closeMenu}>
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
          <a href="#contact" className="hover:line-through" onClick={closeMenu}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
