// Student Name - Navdeep Kaur
import React from "react";
import { Link } from "react-router-dom";
import "../css/home.css";
import aboutImage from "../images/about-us.jpg"; // https://images.unsplash.com/photo-1546430498-05c7b929830e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
import htmlCourseImage from "../images/html-course.jpg";
import reactCourseImage from "../images/react-image.jpg";
import javascriptCourseImage from "../images/javascript-image.jpeg";
const Home = () => (
  <>
    {/* Header Section */}
    <header className="home-header">
      <div className="overlay">
        <h1>Welcome to Skill Sprint – Where Skills Meet Speed.</h1>
        <p>
          Learn anywhere, anytime with Skill Sprint's interactive, hands-on
          courses!
        </p>
      </div>
    </header>
    {/* About Us Section */}
    <section className="about">
      <div className="about-container">
        <div className="about-image">
          <img src={aboutImage} alt="about-image" />
        </div>
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            We are dedicated to offering top-quality online education to
            students all over the world. If you want to boost your professional
            expertise or acquire a new interest, our site has interesting
            courses to help you meet your goals.
          </p>
          {/* Go to the about page */}
          <Link to="/about">
            <button className="btn">Read More</button>
          </Link>
        </div>
      </div>
    </section>
    {/* Courses Section */}
    <section className="courses">
      <h2>Our Courses</h2>
      <div className="course-cards">
        <div className="card">
          <img src={htmlCourseImage} alt="html-course-image" />
          <div className="course-content">
            <h3>Web Development</h3>
            <p>Learn HTML, CSS, JavaScript and modern frameworks.</p>
          </div>
          <Link to="/courses">
            <button className="btn">Know More</button>
          </Link>
        </div>
        <div className="card">
          <img src={reactCourseImage} alt="react-course-image" />
          <div className="course-content">
            <h3>ReactJS</h3>
            <p>Master component-based development using ReactJS.</p>
          </div>
          <Link to="/courses">
            <button className="btn">Know More</button>
          </Link>
        </div>
        <div className="card">
          <img src={javascriptCourseImage} alt="javascript-course-image" />
          <div className="course-content">
            <h3>NodeJS & APIs</h3>
            <p>Build backend services and RESTful APIs using NodeJS.</p>
          </div>
          <Link to="/courses">
            <button className="btn">Know More</button>
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default Home;
