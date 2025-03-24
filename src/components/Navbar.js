import React from 'react';
import './Navbar.css';

export default function Navbar() {
  // Smooth scroll function
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <nav className='navbar'>
        <h2>TPortfolio.</h2>
        <div className='menu'>
          <a href="#home" onClick={() => handleScroll('home')}>Home</a>
          <a href="#about" onClick={() => handleScroll('about')}>About</a>
          <a href="#education" onClick={() => handleScroll('education')}>Education</a>
          <a href="#projects" onClick={() => handleScroll('projects')}>Projects</a>
          <a href="#skills" onClick={() => handleScroll('skills')}>Skills</a>
          <a href="#contact" onClick={() => handleScroll('contact')}>Contact</a>
        </div>
      </nav>
    </div>
  );
}