import { useRef, useState } from "react";
import "../styles/navbar.css";
import copylogo from "../assets/copylogo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { RiMenuFoldFill } from "react-icons/ri";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Navbar = () => {
  const [activePage, setActivePage] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };
  return (
    <div className="navbar">
      <img className="logo" src={copylogo} alt="Aman" />
      <div className="nav-mob-open" onClick={openMenu}>
        <RiMenuFoldFill />
      </div>

      <ul ref={menuRef} className="nav-menu">
        <div className="nav-mob-close" onClick={closeMenu}>
          <IoMdCloseCircleOutline />
        </div>
        <li className={activePage === "home" ? "active" : ""}>
          <AnchorLink href="#home" onClick={() => setActivePage("home")}>
            <p>Home</p>
          </AnchorLink>
        </li>
        <li className={activePage === "about" ? "active" : ""}>
          <AnchorLink
            href="#about"
            offset={50}
            onClick={() => setActivePage("about")}
          >
            <p>About</p>
          </AnchorLink>
        </li>
        <li className={activePage === "skills" ? "active" : ""}>
          <AnchorLink
            href="#skills"
            offset={50}
            onClick={() => setActivePage("skills")}
          >
            <p>Skills</p>
          </AnchorLink>
        </li>
        <li className={activePage === "projects" ? "active" : ""}>
          <AnchorLink
            href="#projects"
            offset={50}
            onClick={() => setActivePage("projects")}
          >
            <p>Projects</p>
          </AnchorLink>
        </li>
        <li className={activePage === "statistics" ? "active" : ""}>
          <AnchorLink
            href="#statistics"
            offset={50}
            onClick={() => setActivePage("statistics")}
          >
            <p>Statistics</p>
          </AnchorLink>
        </li>
        <li className={activePage === "contact" ? "active" : ""}>
          <AnchorLink
            href="#contact"
            offset={50}
            onClick={() => setActivePage("contact")}
          >
            <p>Contact</p>
          </AnchorLink>
        </li>
      </ul>

      <div className="nav-connect">
        {" "}
        <AnchorLink href="#contact" onClick={() => setActivePage("contact")}>
          Connect with me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
