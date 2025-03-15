import React from 'react';
import './Edu.css';
import ruh from './img/ruh.jfif';
import bmmv from './img/bmmv.jfif';

export default function Edu() {
  return (
    <section id="education">
      <div className="education-section">
        <h1>Education</h1>
        <div className="edu-container">
          <div className="edu-card">
            <img src={ruh} alt="University of Ruhuna" className="edu-img" />
            <div className="edu-details">
              <h2>University of Ruhuna</h2>
              <p className="degree">Bachelor of Computer Science <br />2022 - 2026</p>
              <p className="description">
                My Bachelor of Computer Science degree at the University of Ruhuna has been instrumental in advancing my skills in the IT industry. The program offers a comprehensive curriculum that covers core areas such as software development, algorithms, data structures, and system design. It has provided me with practical experience through hands-on projects and internships, enabling me to apply theoretical knowledge to real-world scenarios. This academic foundation, combined with exposure to the latest technologies and industry practices, has significantly enhanced my proficiency and readiness for a successful career in IT.
              </p>
            </div>
          </div>
          <div className="edu-card">
            <img src={bmmv} alt="Bandarawela Central College" className="edu-img" />
            <div className="edu-details">
              <h2>Bandarawela Central College</h2>
              <p className="degree">Advanced Level (Physical Science) <br />2011 - 2019</p>
              <p className="description">
                I completed my Ordinary Level and Advanced Level studies at Bandarawela Central College, specializing in the physical science stream. My academic journey here was complemented by active participation in extracurricular activities, which greatly enhanced my collaborative experience and teamwork skills. This balanced approach to education has not only solidified my knowledge in physical sciences but also equipped me with essential interpersonal skills, preparing me well for both academic and professional challenges in the IT industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}