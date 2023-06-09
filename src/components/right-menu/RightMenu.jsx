// icon:menu-grid-r | CSS Icons https://css.gg/ | Astrit
// import * as React from "react";
import React, { useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import { Link, Outlet } from "react-router-dom";
// import IconMenuGridR from "../icons/iconMenu";
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
                <Link className="" to="/"></Link>
              </li>
              <li>
                <Link className="" to="/landing">
                  Home
                </Link>
              </li>
              <li>
                <Link className="" to="/projects">
                  Projects
                </Link>
              </li>
              <li>
                <Link className="" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="" to="/contact">
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
