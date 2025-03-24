import React from 'react';
import './Project.css'; // Import CSS for styling
import image1 from './img/tea.PNG' // Import the image
import image2 from './img/task.PNG';
import image3 from './img/uni.PNG';

const projects = [
  {
    id: 1,
    image: image1, // Use the imported image
    tools: ['ReactJS', 'CSS', 'SpringBoot', 'MySql'],
    name: 'E-commerce Website (Sereni Tea)',
    caseStudy: [
     "Developed a fully functional e-commerce platform for Sereni Tea, enabling users to browse products, add to cart, and securely complete purchases. Key features include a user-friendly interface, seamless checkout, and home delivery. Built for responsiveness and scalability, the platform ensures a smooth shopping experience across devices, showcasing expertise in web development, payment integration, and user-centric design."
    ],
    codeLink: 'https://github.com/TharushikaAththanayaka/e-commerce-FrontEnd-', // Replace with your GitHub link
  },
  {
    id: 2,
    image: image2, // Use the imported image
    tools: ['HTML', 'CSS', 'JavaScript'],
    name: 'To-Do-List',
    caseStudy: [
      'The to-do list app is a user-friendly tool designed to help users manage tasks efficiently. It allows users to create, organize, and track tasks with ease. Key features include task management (add, delete), categorization, due dates, and task completion tracking. Built to enhance productivity, the app offers an intuitive and visually appealing experience for managing daily tasks'
    ],
    codeLink: 'https://github.com/TharushikaAththanayaka/Todo-app.git', // Replace with your GitHub link
    
  },
  {
    id: 3,
    image: image3, // Use the imported image
    tools: ['ReactTypeScript', 'TailwindCSS', 'MySql', 'SpringBoot'],
    name: 'Barcode-based Mail Management System',
    caseStudy: [
      "Designed a barcode-based mail tracking system for university mail management. Super Admins can add Mail Admins and departments, while Mail Admins use barcode scanning to handle incoming/outgoing mails. Branch Managers track department-specific mails. Key features include barcode scanning, role-based access (Super Admin, Mail Admin, Branch Manager), real-time updates, and a user-friendly interface, enhancing transparency and efficiency in mail processing."
    ],
    codeLink: 'https://github.com/malinda-sampath/Barcode-Based-Mail-Tracking-System_Frontend', // Replace with your GitHub link
  },
  // Add more projects here
];

const Project = () => {
  return (
    <section id="projects">
      <div className="projects-section">
        <div className="projects-header">
          <h1>Projects</h1>
          <p>I have worked on a wide range of projects. Here are some of my projects.</p>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <img src={project.image} alt={`Project ${project.id}`} className="project-image" />
              <div className="project-details">
                <h2>{project.name}</h2>
                <div className="tools">
                  {project.tools.map((tool, index) => (
                    <span key={index} className="tool-tag">{tool}</span>
                  ))}
                </div>
                <div className="case-study">
                  {project.caseStudy.map((part, index) => (
                    <p key={index}>{part}</p>
                  ))}
                </div>
                <div className="project-actions">
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="action-button">
                    View Code
                  </a>
                  {project.interfaceLink && (
                    <a href={project.interfaceLink} target="_blank" rel="noopener noreferrer" className="action-button">
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;