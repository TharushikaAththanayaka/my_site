import React from 'react';
import './Skills.css';

import CSIcon from '../img/c1.png';
import javaIcon from './img/java.jfif';
import cIcon from './img/c.jfif';
import gitIcon from './img/github.jfif';
import figmaIcon from './img/figma.jfif';
import vscodeIcon from './img/vs.jfif';
import inteligIcon from './img/in.jfif';
import emailjsIcon from './img/email.png';
import reactIcon from './img/react.jfif';
import jsIcon from './img/js.jfif';
import htmlIcon from './img/html.png';
import cssIcon from './img/css.jfif';
import nodeIcon from './img/nodejs.jfif';
import phpIcon from './img/php.jfif';
import sqlIcon from './img/sql.jfif';
import springIcon from '../img/spring.jfif';

const skillsData = {
  Languages: [
    { name: 'Java', icon: javaIcon },
    { name: 'C', icon: cIcon },
    { name: 'C#', icon: CSIcon },
  ],
  Tools: [
    { name: 'GitHub', icon: gitIcon },
    { name: 'Figma', icon: figmaIcon },
    { name: 'VSCode', icon: vscodeIcon },
    { name: 'IntelliJ', icon: inteligIcon },
    { name: 'EmailJs', icon: emailjsIcon },
  ],
  Frontend: [
    { name: 'React', icon: reactIcon },
    { name: 'JavaScript', icon: jsIcon },
    { name: 'HTML', icon: htmlIcon },
    { name: 'CSS', icon: cssIcon },
  ],
  Backend: [
    { name: 'NodeJs', icon: nodeIcon },
    { name: 'Php', icon: phpIcon },
    { name: 'MySql', icon: sqlIcon },
    { name: 'Spring Boot', icon: springIcon },
  ],
};

export default function Skills() {
  return (
    <section id="skills">
      <div className="skills-section">
        <h1>Skills</h1>
        <p>Here are some of the technologies and tools I work with.</p>
        <div className="skills-container">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category} className="skills-category">
              <h2>{category}</h2>
              <div className="skills-list">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-card">
                    <img src={skill.icon} alt={skill.name} className="skill-icon" />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}