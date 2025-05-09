// Student Name- Hemanth Sai Reddy Kamalapuram
import React from "react";
import "../css/contact.css";
import addressIcon from "../images/address-icon.png";
import phoneIcon from "../images/phone-icon.png";

const Contact = () => (
  <>
   {/* Header Section */}
    <header className="contact-header">
      <div className="overlay">
        <h1>Contact Us</h1>
      </div>
    </header>
    <section className="contact">
      <form>
      <h2>Send us a message</h2>
        <label>Name</label>
        <input type="text" required placeholder="Enter your full name" />
        <label>Email</label>
        <input type="email" required placeholder="Enter your email" />
        <label>Phone</label>
        <input type="tel" required placeholder="Enter your phone number" />
        <label>Message</label>
        <textarea />
        <button type="submit">Send</button>
      </form>
    </section>
    <section className="contact-cards">
    <div className="card-box">
    <div className="card-icon">
      <img src={addressIcon} alt="Address Icon" className="icon-img" />
    </div>
    <h3>Address</h3>
    <p>123 Main Street,<br /> Kitchener, ON</p>
  </div>


  <div className="card-box">
    <div className="card-icon">
      <img src={phoneIcon} alt="Phone Icon" className="icon-img" />
    </div>
    <h3>Phone</h3>
    <p>+1 (123) 456-7777</p>
  </div>
</section>

  </>
);

export default Contact;
