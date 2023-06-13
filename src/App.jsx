import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { MdWbSunny, MdNightsStay } from "react-icons/md";
//import { MdViewCompact } from "react-icons/md";
import "./App.scss";
import "./scss/global.scss";
import WHITE_LOGO from "../public/img/logo_blanco.png";
import BLACK_LOGO from "../public/img/logo_negro.png";

import Menu from "./components/right-menu/RightMenu";
//import BackgroundAnimation from "../src/components/background-animation/BackgroundAnimation";
import ThemeToggle from "./components/themetoggle/ThemeToggle";
import "./components/themetoggle/themetoggle.scss";
import CursorBubble from "./components/cursor-bubble/CursorBubble";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`app ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      {/*<BackgroundAnimation /> */}
      <header
        className={`header ${
          isDarkMode ? "text-color-light" : "text-color-dark"
        }`}
      >
        <nav className="header-nav">
          <div className="header-logo">
            <a href="/landing">
              <img
                className="logotipo"
                src={isDarkMode ? WHITE_LOGO : BLACK_LOGO}
                alt="Logotipo"
              />
            </a>
          </div>
          <div className="header-nav-buttons">
            <div className="theme-toggle" onClick={toggleTheme}>
              {isDarkMode ? (
                <MdWbSunny className="icon" />
              ) : (
                <MdNightsStay className="icon" />
              )}
            </div>
            <Menu />
          </div>
        </nav>
      </header>
      <div className="content">
        <Outlet />
      </div>
      <CursorBubble />
    </div>
  );
}

export default App;
