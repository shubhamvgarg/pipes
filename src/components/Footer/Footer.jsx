import React from "react";
import './Footer.css'; // Import the CSS file
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";






const Footer = () => {
  return (
    <footer className="footer">
      <div className="top-bar">
        <p>
          Get in touch with us by filling up the form or email us at <Link to="mailto:email id here" className="email">email id here</Link>
        <button className="quote-button"> <Link to="contact">Request Quote ➞</Link></button>
        </p>
      </div>
      <div className="footer-main">
        <div className="footer-section">
          <h4>REGISTERED OFFICE</h4>
          <address>
            Tirupati pipes and steel Limited<br />
            Address line 1,<br />
            Address Line 2,<br />
            Uttar Pradesh, India
          </address>
        </div>
        <div className="contact-section">
          <Link to="mailto:email id here" className="contact-item">email id here</Link>
          <Link to="tel:+917048897799" className="contact-item">+91 70488 97799</Link>
        </div>
        <div className="social-icons">
          <Link to="#" className="icon facebook"><FaFacebookF/></Link>
          <Link to="#" className="icon instagram"><IoLogoInstagram /></Link>
          <Link to="#" className="icon linkedin"><FaLinkedinIn /></Link>
          <Link to="#" className="icon youtube"><FiYoutube /></Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Tirupati pipes and steels. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
