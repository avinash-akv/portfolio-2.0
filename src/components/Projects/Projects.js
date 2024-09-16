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
        {/* Project 1 */}
        <div className="col">
          <div className="card">
            <div className="card-image">
              <img src={project1Image} alt="Project 1" />
            </div>
            <div className="card-content">
              <h4 className="card-title">File Tracking System</h4>
              <p>
                Designed and deployed a File Tracking System to efficiently oversee
                document movement and status across the organization or institute.
              </p>
              <div className="technologies">
                <h5>Technologies Used:</h5>
                <span className="badge">Php</span>
                <span className="badge">Javascript</span>
                <span className="badge">Bootstrap</span>
                <span className="badge">MySQL</span>
                <span className="badge">PhpMyAdmin</span>
              </div>
              <div className="card-action">
                <a href="https://github.com/avinash-akv/File-Tracking-System">Live Demo</a>
                <a href="https://github.com/avinash-akv/File-Tracking-System">GitHub</a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="col">
          <div className="card">
            <div className="card-image">
              <img src={project2Image} alt="Project 2" />
            </div>
            <div className="card-content">
              <h4 className="card-title">ANNIE - The Voice Assistant</h4>
              <p>
                Implemented ANNIE, a Virtual Voice Assistant for PC, that
                streamlined tasks like adding calendar events and streaming YouTube.
              </p>
              <div className="technologies">
                <h5>Technologies Used:</h5>
                <span className="badge">Python</span>
                <span className="badge">SpeechRecognition</span>
                <span className="badge">PyAutoGUI</span>
                <span className="badge">QtDesigner</span>
              </div>
              <div className="card-action">
                <a href="https://github.com/avinash-akv/ANNIE-The-Voice-Assistant">Live Demo</a>
                <a href="https://github.com/avinash-akv/ANNIE-The-Voice-Assistant">GitHub</a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="col">
          <div className="card">
            <div className="card-image">
              <img src={project3Image} alt="Project 3" />
            </div>
            <div className="card-content">
              <h4 className="card-title">Portfolio Website</h4>
              <p>
                This is a personal portfolio website designed to showcase professional skills, projects, and achievements. The website features a clean, modern design.
              </p>
              <div className="technologies">
                <h5>Technologies Used:</h5>
                <span className="badge">HTML</span>
                <span className="badge">CSS</span>
                <span className="badge">Javascript</span>
              </div>
              <div className="card-action">
                <a href="https://avinash-akv.github.io/Portfoilo/">Live Demo</a>
                <a href="https://github.com/avinash-akv/Portfoilo/">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
