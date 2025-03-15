import React from 'react';
import img1 from '../img/my1.jfif';
import './Intro.css';
import linkedin from './img/link.png';
import facebook from './img/fb.png';
import github from './img/github.jfif';

export default function Intro() {
  return (
    <section id="intro">
      <div className="introContent">
        <img src={img1} alt="profile" className="profile-img" />
        <div className="intro-text">
          <span className="hello">Hello, I am</span>
          <span className="name">Tharushika Aththanayaka</span>
          <h5 className="details">
            Bachelor of Computer Science (UG)
            <br />
            University of Ruhuna
          </h5>
          <a href={"https://drive.google.com/drive/folders/1UEoUR3SeHkwahG-nPCF72w4Mce7KMPDe?usp=sharing"} download="Tharushika_Aththanayaka_Resume.pdf" className="resume-btn">
            Check Resume
          </a>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/tharushika-aththanayaka-52938a281/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a href="https://www.facebook.com/prasadini.aththanayaka.33?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="Facebook" />
            </a>
            <a href="https://github.com/TharushikaAththanayaka" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="GitHub" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}