import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './HeroSection.css';
import profileImage from '../../images/pic 2.png'; // Adjust the path based on your folder structure

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Hi, I'm Avinash Kumar Verma</h1>
        <h2>Data Analyst & Graphic Designer</h2>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/avinash-kumar-verma" 
             target="_blank" 
             rel="noopener noreferrer" 
             aria-label="LinkedIn Profile">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/avinash-akv" 
             target="_blank" 
             rel="noopener noreferrer" 
             aria-label="GitHub Profile">
            <i className="fab fa-github"></i>
          </a>
        </div>
        {/* Replace <a> with Link to navigate to the Resume page */}
        <Link to="/resume" className="btn">Resume</Link>
      </div>
      <div className="hero-image">
        <img src={profileImage} alt="Avinash Kumar Verma" />
      </div>
    </section>
  );
}

export default HeroSection;
