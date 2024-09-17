import React from 'react';
import './About.css';
import aboutImage from '../../images/men.png'; // Adjust the path based on your folder structure

function About() {
  return (
    <section id="about" className="about-section">
      <h3>About</h3>
      <div className="about-content">
        <div className="about-image">
          <img src={aboutImage} alt="Avinash Kumar Verma" />
        </div>
        <div className="about-text">

          <p>Hello! I'm <b>Avinash Kumar Verma</b>, a tech enthusiast with a Master’s degree in Computer Application from Kamla Nehru Institute of Technology, Sultanpur, and a Bachelor’s from Delhi Technical Campus. My expertise lies in Web Designing, Data Analysis, and Graphic Design.<br></br>

            I’m passionate about solving complex problems and building innovative solutions. I’ve developed efficient front-end interfaces, crafted interactive designs, and visualized data to uncover actionable insights. Notable projects include a File Tracking System that boosted workflow efficiency and a Virtual Voice Assistant, ANNIE, which streamlined productivity.<br></br>

            With hands-on experience in tools like Python, Qt Designer, Power BI, and Adobe Illustrator, I’m equipped to handle a wide range of challenges. I also hold certifications in Power BI, Python, and Graphic Design.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
