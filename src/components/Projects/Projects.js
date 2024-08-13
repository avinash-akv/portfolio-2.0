import React from 'react';
import './Projects.css';
import project1Image from '../../images/projects/project 1 logo.jpg';
import project2Image from '../../images/projects/project 2 logo.gif';
import project3Image from '../../images/projects/project 3 logo.png';

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h3>Projects</h3>
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-image">
              <img src={project1Image} alt="Project 1" />
            </div>
            <div className="card-content">
              <h4 className="card-title">File Tracking System</h4>
              <p>Designed and deployed a File Tracking System to efficiently oversee
                document movement and status across the organization or institute.<br></br><b>Key Technology:</b> Php,
                Html, CSS, Bootstrap, JavaScript, MySQL</p>
            </div>
            <div className="card-action">
              <a href="https://github.com/avinash-akv/File-Tracking-System">View Project</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-image">
              <img src={project2Image} alt="Project 2" />
            </div>
            <div className="card-content">
              <h4 className="card-title">ANNIE - The Voice Assistant</h4>
              <p>Implemented ANNIE, a Virtual Voice Assistant for PC, that
                streamlined tasks like adding calendar events and streaming YouTube.<br></br><b>Key Technology:</b> Python, Qt Designer.</p>
            </div>
            <div className="card-action">
              <a href="https://github.com/avinash-akv/ANNIE-The-Voice-Assistant">View Project</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-image">
              <img src={project3Image} alt="Project 2" />
            </div>
            <div className="card-content">
              <h4 className="card-title">Portfolio Website</h4>
              <p>This is a personal portfolio website designed to showcase the professional skills, projects, and achievements. The website features a clean, modern design that reflects a professional image, making it easy for potential employers or clients to navigate through your work and contact you.<br></br><b>Key Technology:</b> Html5 , CSS3 , JavaScript.</p>
            </div>
            <div className="card-action">
              <a href="https://avinash-akv.github.io/Portfoilo/">View Project</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
