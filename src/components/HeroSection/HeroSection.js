import React from 'react';
import './HeroSection.css';
import profileImage from '../../images/profile.jpg'; // Adjust the path based on your folder structure
import resume from '../../images/resume.pdf';


function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Hi, I'm Avinash Kumar Verma</h1>
        <h2>Data Analyst & Graphic Designer</h2>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/avinash-kumar-verma" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
          <a href="https://github.com/avinash-akv" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
        </div>
        <a href={resume} className="btn">Resume</a>
      </div>
      <div className="hero-image">
        <img src={profileImage}alt="Your Photo" />
      </div>
    </section>
  );
}

export default HeroSection;
