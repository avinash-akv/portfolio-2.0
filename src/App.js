import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ResumePage from './components/ResumePage/ResumePage';
import Awards from './components/Awards/Awards'; 
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <About />
              <Skills />
              <Education />
              <Projects />
              <Awards /> 
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/resume" element={<ResumePage />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
