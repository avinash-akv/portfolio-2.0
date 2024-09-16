import React from 'react';
import './Education.css';

function Education() {
  return (
    <section id="education" className="education-section">
      <h3>Education</h3>
      <div className="timeline">
        <div className="timeline-item">
          <h4>Master in Computer Application ( M.C.A )</h4>
          <p>Kamla Nehru Institute of Technology , Sultanpur | 2022 - 2024</p>
          <p><i>Passed</i> | CGPA : 7.07</p>
        </div>
        <div className="timeline-item">
          <h4>Bachelor of Computer Application ( B.C.A )</h4>
          <p>Delhi Technical Campus , Greater Noida | 2019 - 2022</p>
          <p><i>Passed</i> | CGPA : 7.58</p>
        </div>
      </div>
    </section>
  );
}

export default Education;
