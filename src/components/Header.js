import React from "react";
import "../styles/Header.css";

const Header = ({ darkMode, toggleMode }) => {
  return (
    <header className="header">
      <h1>AI Chat Application</h1>
      <button onClick={toggleMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
};

export default Header;