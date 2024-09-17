import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <nav className="nav-menu">
          <ul>
            <li><a href="#about">#RedefiningEndurance</a></li>
            {/* add more link here  */}
            <li><a href="mailto:sales@venuspipes.com">change mail</a></li>
            <li><a href="tel:+917048897799">+91 change number</a></li>
          </ul>
        </nav>
      </div>
      <div className="header-bottom">
        <nav className="nav-menu">
          <ul>
            <li><a href="#about">About Venus</a></li>
            <li><a href="#product">Product</a></li>
            <li><a href="#quality">Quality</a></li>
            <li><a href="#downloads">Downloads</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
