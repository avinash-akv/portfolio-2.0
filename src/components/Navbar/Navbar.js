import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="nav-wrapper">
      <div className="container">
        <a href="/" className="brand-logo">
          Portfolio
        </a>
        <ul id="nav-mobile" className="right">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
