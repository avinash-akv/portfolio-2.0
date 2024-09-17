import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="nav-wrapper">
      <div className="container">
        <a href="/" className="brand-logo">
          A.K.Verma
        </a>
        <ul id="nav-mobile" className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#awards">Awards</a></li> {/* Added Awards link */}
        </ul>
        <div className="menu-toggle" onClick={toggleMenu}>
          ☰
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
