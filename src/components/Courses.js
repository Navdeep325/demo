// Student Name - Aaliyah Kadri
import React from "react";
import "../css/courses.css";
import { Link } from "react-router-dom";

// An array of course objects with information about each course
const courseList = [
  {
    title: "Full Stack Development",
    desc: "Master front-end and back-end development using HTML, CSS, JavaScript, React, Node.js, and MongoDB.",
    level: "Beginner to Advanced",
    duration: "6 Months",
    price: "$199",
    image:
      "https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg",
  },
  {
    title: "UI/UX Design Fundamentals",
    desc: "Design user-friendly interfaces with Figma, Adobe XD, Sketch, and usability principles.",
    level: "Beginner",
    duration: "3 Months",
    price: "$99",
    image:
      "https://img.freepik.com/free-vector/user-interface-development-concept_23-2148681605.jpg",
  },
  {
    title: "Data Science with Python",
    desc: "Analyze data, build machine learning models, and visualize insights using Pandas, NumPy, and Matplotlib.",
    level: "Intermediate",
    duration: "4 Months",
    price: "$149",
    image:
      "https://img.freepik.com/free-vector/data-scientist-concept-illustration_114360-6154.jpg",
  },
  {
    title: "Mobile App Development",
    desc: "Build Android and iOS apps using Flutter and React Native with Firebase integration.",
    level: "Beginner to Intermediate",
    duration: "5 Months",
    price: "$169",
    image:
      "https://img.freepik.com/free-vector/mobile-app-development_23-2148684985.jpg",
  },
  {
    title: "Digital Marketing Mastery",
    desc: "Learn SEO, social media strategy, Google Ads, email, and content marketing techniques.",
    level: "All Levels",
    duration: "2 Months",
    price: "$79",
    image:
      "https://img.freepik.com/free-vector/digital-marketing-isometric-landing-page_107791-1125.jpg",
  },
  {
    title: "Cybersecurity Essentials",
    desc: "Understand cyber threats, secure networks, and practice ethical hacking basics.",
    level: "Intermediate",
    duration: "4 Months",
    price: "$129",
    image:
      "https://img.freepik.com/free-vector/hand-drawn-cyber-security-concept_23-2149163861.jpg",
  },
];

const Courses = () => {
  return (
    <>
      {/* Header Section */}
      <header className="course-header">
        <div className="overlay">
          <h1>Courses</h1>
        </div>
      </header>
      <div className="courses-page">
        <div className="container">
          <h1 className="heading">Our Courses</h1>
          <div className="courses-grid">
            {courseList.map((course, index) => (
              <div className="course-card" key={index}>
                <img
                  src={course.image}
                  alt={course.title}
                  className="course-image"
                />
                <h2>{course.title}</h2>
                <p>{course.desc}</p>
                <div className="course-meta">
                  <p>
                    <strong>Level:</strong> {course.level}
                  </p>
                  <p>
                    <strong>Duration:</strong> {course.duration}
                  </p>
                  <p>
                    <strong>Price:</strong> {course.price}
                  </p>
                </div>
                {/* Enroll button that leads to the Contact Page */}
                <Link to="/contact">
                  <button className="enroll-btn">Enroll Now</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
