import React from 'react';
import './ResumePage.css'; // Import the updated CSS file
import resume from '../../images/Resume.pdf'; // Adjust the path based on your folder structure
import Footer from '../Footer/Footer'; 

function ResumePage() {
  return (
    <div className="resume-page-container">
      <div className="resume-page-content">
        <h1 className="resume-title">Resume</h1>
        
        {/* Embed the resume PDF */}
        <embed src={resume} width="100%" height="800px" type="application/pdf" className="Resume-pdf" />

        {/* Download Button */}
        <a href={resume} download className="resume-download-btn">
          Download Resume
        </a>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default ResumePage;
