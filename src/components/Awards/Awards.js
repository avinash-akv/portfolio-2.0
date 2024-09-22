import React from 'react';
import './Awards.css';

const awardsData = [
  {
    title: 'Power BI Certification',
    issuer: 'Microsoft',
    year: '2023',
  },
  {
    title: 'Python Programming',
    issuer: 'Coursera',
    year: '2022',
  },
  {
    title: 'Graphic Design Mastery',
    issuer: 'Adobe',
    year: '2021',
  },
  // Add more awards as needed
];

function Awards() {
  return (
    <section id="awards" className="awards-section">
      <div className="awards-content">
        <h2 className="awards-title">Awards & Certifications</h2>
        <ul className="awards-list">
          {awardsData.map((award, index) => (
            <li key={index} className="award-item">
              <h3 className="award-title">{award.title}</h3>
              <p className="award-details">{award.issuer} - {award.year}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Awards;
