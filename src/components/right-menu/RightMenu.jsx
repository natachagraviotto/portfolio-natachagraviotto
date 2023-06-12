// icon:menu-grid-r | CSS Icons https://css.gg/ | Astrit
import React, { useState } from "react";
import "./rightmenu.scss";
import { Link, Outlet } from "react-router-dom";

import { CgMenuGridO } from "react-icons/cg";
import { FaBars, FaTimes } from "react-icons/fa";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <CgMenuGridO className="menu-button" onClick={toggleMenu} />
      {isOpen && (
        <>
          <div className="menu-overlay blurred-background" />
          <div className="menu-content">
            <FaTimes className="close-icon" onClick={toggleMenu} />

            <ul className="links-menu">
              <li>
                <Link className="" to="/" onClick={toggleMenu}></Link>
              </li>
              <li>
                <Link className="" to="/landing" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link className="" to="/projects" onClick={toggleMenu}>
                  Projects
                </Link>
              </li>
              <li>
                <Link className="" to="/about" onClick={toggleMenu}>
                  About
                </Link>
              </li>
              <li>
                <Link className="" to="/contact" onClick={toggleMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Menu;
