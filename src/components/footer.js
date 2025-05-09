// Student Name - Aaliyah Kadri
import React from "react";
import "../css/footer.css";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="column">
          <Link to="/" className="footer-logo">
          {/* site logo with link to the homepage */}
            <img src={logo} alt="Skill Sprint Logo" /> 
          </Link>
          <p>Unlocking potential through world-class digital learning.</p>
        </div>
        <div className="column">
          <h4>Courses</h4>
          <ul>
            <li>Web Development</li>
            <li>ReactJS</li>
            <li>NodeJS & APIs</li>
            <li>Data Science with Python</li>
            <li>Mobile App Development</li>
          </ul>
        </div>
        <div className="column">
          <h4>Contact</h4>
          <p>Address: 123 Main Street, Kitchener, ON</p>
          <p>Email: support@skillsprint.com</p>
          <p>Phone: +1 (123) 456-7777</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Skill Sprint. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
