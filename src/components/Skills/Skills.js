import React from 'react';
import './Skills.css';
import htmlImage from '../../images/skills/html.png';
import cssImage from '../../images/skills/css.png';
import jsImage from '../../images/skills/js.png';
import bootstrapImage from '../../images/skills/bootstrap.png';
import pythonImage from '../../images/skills/python.png';
import sqlImage from '../../images/skills/sql.png';
import powerbiImage from '../../images/skills/power bi.png';
import excelImage from '../../images/skills/EXCEL.png';
import wordImage from '../../images/skills/WORD.png';
import photoshopImage from '../../images/skills/photoshop.png';
import illustratorImage from '../../images/skills/illustrator.png';
import ReactImage from '../../images/skills/react.png';
import TailwindImage from '../../images/skills/tailwind.png';
import CanvaImage from '../../images/skills/canva.png';
import vscodeImage from '../../images/skills/vscode.png';
import GitImage from '../../images/skills/git.png';
import GithubImage from '../../images/skills/github.png';

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h3>Skills & Expertise</h3>
      <div className="skills-container">
        <div className="skills-category">
          <h4>Web Development</h4>
          <div className="skills-category-items">
            <div className="skill-item">
              <img src={htmlImage} alt="HTML" />
              <p>HTML</p>
            </div>
            <div className="skill-item">
              <img src={cssImage} alt="CSS" />
              <p>CSS</p>
            </div>
            <div className="skill-item">
              <img src={TailwindImage} alt="Tailwind" />
              <p>Tailwind</p>
            </div>
            <div className="skill-item">
              <img src={bootstrapImage} alt="Bootstrap" />
              <p>Bootstrap</p>
            </div>
            <div className="skill-item">
              <img src={jsImage} alt="JavaScript" />
              <p>JavaScript</p>
            </div>
            <div className="skill-item">
              <img src={ReactImage} alt="ReactJs" />
              <p>ReactJs</p>
            </div>
            <div className="skill-item">
              <img src={pythonImage} alt="Python" />
              <p>Python</p>
            </div>
            <div className="skill-item">
              <img src={sqlImage} alt="SQL" />
              <p>SQL</p>
            </div>
          </div>
        </div>
        <div className="skills-category">
          <h4>Data & Design Tools</h4>
          <div className="skills-category-items"> 
            <div className="skill-item">
              <img src={powerbiImage} alt="Power BI" />
              <p>Power BI</p>
            </div>
            <div className="skill-item">
              <img src={excelImage} alt="Excel" />
              <p>Excel</p>
            </div>
            <div className="skill-item">
              <img src={wordImage} alt="Word" />
              <p>Word</p>
            </div>
            <div className="skill-item">
              <img src={photoshopImage} alt="Photoshop" />
              <p>Photoshop</p>
            </div>
            <div className="skill-item">
              <img src={illustratorImage} alt="Illustrator" />
              <p>Illustrator</p>
            </div>
            <div className="skill-item">
              <img src={CanvaImage} alt="Canva" />
              <p>Canva</p>
            </div>
          </div>
        </div>
        <div className="skills-category">
          <h4>Other Tools & Technologies</h4>
          <div className="skills-category-items">
          <div className="skill-item">
              <img src={vscodeImage} alt="Vs Code" />
              <p>VS Code</p>
            </div>
            <div className="skill-item">
              <img src={GitImage} alt="Git" />
              <p>Git</p>
            </div>
            <div className="skill-item">
              <img src={GithubImage} alt="Github" />
              <p>Github</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
