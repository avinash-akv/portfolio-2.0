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


function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h3>Skills</h3>
      <div className="skills-container">
        <div className="skill-item">
          <img src={htmlImage} alt="HMTL" />
          <p>HTML</p>
        </div>
        <div className="skill-item">
          <img src={cssImage} alt="CSS" />
          <p>CSS</p>
        </div>
        <div className="skill-item">
          <img src={jsImage} alt="JAVASCRIPT" />
          <p>JAVASCRIPT</p>
        </div>
        <div className="skill-item">
          <img src={bootstrapImage} alt="BOOTSTRAP" />
          <p>BOOTSTRAP</p>
        </div>
        <div className="skill-item">
          <img src={pythonImage} alt="PYTHON" />
          <p>PYTHON</p>
        </div>
        <div className="skill-item">
          <img src={powerbiImage} alt="POWER BI" />
          <p>POWER BI</p>
        </div>
        <div className="skill-item">
          <img src={sqlImage} alt="SQL" />
          <p>SQL</p>
        </div>
        <div className="skill-item">
          <img src={excelImage} alt="EXCEL" />
          <p>EXCEL</p>
        </div>
        <div className="skill-item">
          <img src={wordImage} alt="WORD" />
          <p>WORD</p>
        </div>
        <div className="skill-item">
          <img src={photoshopImage} alt="PHOTOSHOP" />
          <p>PHOTOSHOP</p>
        </div>
        <div className="skill-item">
          <img src={illustratorImage} alt="ILLUSTRATOR" />
          <p>ILLUSTRATOR</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
