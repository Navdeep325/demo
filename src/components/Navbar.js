// Student Name -Navdeep Kaur
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";
import logo from "../images/logo.png"; 

// Functional component of the navigation bar
const Navbar = () => {
  // Toggle state to manage mobile menu
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Skill Sprint Logo" className="logo-image" />{" "}
        </Link>
        <h1 className="logo-text">Skill Sprint</h1>
      </div>
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        &#9776;
      </div>
      {/* Navigation links - active class toggles depending on menuOpen state */}
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>
          About
        </Link>
        <Link to="/courses" onClick={() => setMenuOpen(false)}>
          Courses
        </Link>
        <Link to="/quiz" onClick={() => setMenuOpen(false)}>
          Quiz
        </Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
