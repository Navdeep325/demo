// Student Name - Naveen Kumar Rajendran
import React from "react";
import "../css/about.css";

const About = () => (
  <>
    {/* Header Section */}
    <header className="about-header">
      <div className="overlay">
        <h1>About Us</h1>
      </div>
    </header>
    {/* About Section */}
    <section className="about">
      <div className="about-content">
        <h3>Our Mission</h3>
        <p>
          Our mission is to offer high-quality education to anyone, anywhere. We
          strive to create an inspiring and welcoming space where learners can
          gain new skills, explore their interests, and achieve their career and
          personal goals.
        </p>
        <h3>Who We Are</h3>
        <p>
          We are a team of passionate teachers, developers, and designers
          committed to building a solid and simple-to-use online learning
          platform. You may be a student, a professional wanting to skill-up, or
          a curious mind wanting to learn - our platform is for you.
        </p>
        <h3>What We Offer</h3>
        <ul>
          <li>
            Top-notch courses in multiple fields such as technology, and design.
          </li>
          <li>
            Interactive learning modules and quizzes for improved engagement.
          </li>
        </ul>
        <h3>Why Choose Us?</h3>
        <p>
          Our website stands out with its easy interface, practical content, and
          emphasis on student success. We continuously add to our course
          inventory and highlight updates from user feedback to offer the best
          learning experience.
        </p>
        <h3>Join Our Community</h3>
        <p>
          Learning is more fun when shared. Connect with fellow learners,
          exchange ideas, and learn together. Start your journey with us today
          and unlock your true potential!
        </p>
      </div>
    </section>
  </>
);

export default About;
