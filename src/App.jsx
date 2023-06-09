import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { MdViewCompact } from "react-icons/md";
import "./App.scss";
import "./scss/global.scss";
import "./components/right-menu/rightmenu.scss";
import Menu from "./components/right-menu/RightMenu";
import "../src/components/background-animation/backgroundanimation.scss";
import ThemeToggle from "./components/themetoggle/ThemeToggle";
import { MdWbSunny, MdNightsStay } from "react-icons/md";
import "./components/themetoggle/themetoggle.scss";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`app ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <header
        className={`header ${
          isDarkMode ? "text-color-light" : "text-color-dark"
        }`}
      >
        <nav className="header-nav">
          <div className="header-logo">
            <a href="/landing">
              <img
                className="logotipo-negro"
                src="src/assets/img/logo_negro.png"
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
      <div
        className={`content ${
          isDarkMode ? "text-color-light" : "text-color-dark"
        }`}
      >
        <h1></h1>
        <h2></h2>
        <h3></h3>
        <h4></h4>
      </div>

      <Outlet />
    </div>
  );
}

export default App;
