import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <nav className="nav-menu">
          <ul>
            <li>#RedefiningEndurance</li>
            {/* add more link here  */}
            <li><a href="mailto:sales@venuspipes.com">change mail</a></li>
            <li><a href="tel:+917048897799">+91 change number</a></li>
          </ul>
        </nav>
      </div>
      <div className="header-bottom">
        <nav className="nav-menu">
          <ul>
            <li><Link to="about-us">About Us</Link></li>
            <li><Link to="product">Product</Link></li>
            <li><Link to="quality">Quality</Link></li>
            {/* <li><Link to="downloads">Downloads</Link></li> */}
            <li><Link to="contact">Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
