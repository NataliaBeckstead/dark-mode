import React, { useState } from 'react';
import {useDarkMode} from '../hooks/useDarkMode';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <Link className="link" to="/"><h1>Crypto Tracker</h1></Link>
      <Link className="link" to="/about"><h2>About</h2></Link>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
