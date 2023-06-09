import React from "react";

const ThemeToggle = ({ toggleTheme, isDarkMode }) => {
  return (
    <button onClick={toggleTheme}>
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default ThemeToggle;
