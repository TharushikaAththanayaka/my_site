import React from 'react';
import './Project.css'; // Import CSS for styling
import image1 from './img/sereni.PNG'; // Import the image
import image2 from './img/todolist.PNG';
import image3 from './img/uni.PNG';

const projects = [
  {
    id: 1,
    image: image1, // Use the imported image
    tools: ['ReactJS', 'CSS', 'SpringBoot', 'MySql'],
    name: 'E-commerce Website (Sereni Tea)',
    caseStudy: [
      "Developed a fully functional e-commerce platform for Sereni Tea, an online tea business. The website allows users to browse a wide range of tea products, add items to their cart, and securely complete purchases using integrated card payment functionality. Key features include a user-friendly interface, seamless checkout process, and home delivery options. Built with a focus on responsiveness and scalability, the platform ensures a smooth shopping experience across devices. This project demonstrates my expertise in web development, payment gateway integration, and user-centric design.",
    ],
    codeLink: 'https://github.com/TharushikaAththanayaka/e-commerce-FrontEnd-', // Replace with your GitHub link
  },
  {
    id: 2,
    image: image2, // Use the imported image
    tools: ['HTML', 'CSS', 'JavaScript'],
    name: 'To-Do-List',
    caseStudy: [
      'The to-do list app is a user-friendly and visually appealing tool designed to help users manage their tasks efficiently. It allows users to create, organize, and track their tasks with ease, ensuring nothing important is forgotten.',
      'Features:',
      'Task Management: Add, and delete tasks effortlessly.',
      'Categorization: Organize tasks into different categories for better management.',
      'Due Dates: Set due dates for tasks to keep track of deadlines.',
      'Task Completion: Mark tasks as complete to visually track progress.',
      'The app was built to address the need for an efficient and intuitive way to manage daily tasks. By incorporating features like categorization, priority levels, and image attachments, the app aims to enhance productivity and organization for its users. The visually appealing design ensures that users have a pleasant experience while managing their to-do lists.',
    ],
    codeLink: 'https://github.com/TharushikaAththanayaka/Todo-app.git', // Replace with your GitHub link
    
  },
  {
    id: 3,
    image: image3, // Use the imported image
    tools: ['ReactTypeScript', 'TailwindCSS', 'MySql', 'SpringBoot'],
    name: 'Barcode-based Mail Management System',
    caseStudy: [
      'Designed and developed a barcode-based mail tracking system to streamline mail management for our university. The system allows Super Admins to add Mail Admins and branches (university departments). Mail Admins can efficiently handle incoming and outgoing mails by scanning barcodes to input mail details, while Branch Managers can track mails specific to their departments. This centralized system enhances transparency, reduces manual errors, and improves mail processing efficiency. Key Features: Barcode scanning for quick mail entry and tracking, Role-based access: Super Admin, Mail Admin, and Branch Manager, Real-time mail status updates for each department, User-friendly interface for seamless operations.',
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