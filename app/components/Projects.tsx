import React from 'react';
import styles from '../styles/Projects.module.css';


const projectsData = [
  {
    id: 1,
    title: 'Resume Builder',
    description: 'An interactive, user-friendly resume builder with inline editing, real-time preview, and customizable designs.',
    link: 'https://hackathon-milestone-5-1830wiyu6-waleed0248s-projects.vercel.app'
  },
  {
    id: 2,
    title: 'Countdown Timer App',
    description: 'A sleek, fully functional countdown timer built with Next.js, offering real-time updates and customizable time settings.',
    link: 'https://countdown-timer-aqslz8nv9-waleed0248s-projects.vercel.app'
  },
  {
    id: 3,
    title: 'Weather Widget App',
    description: 'A dynamic weather widget built with Next.js, displaying real-time weather data using API integration.',
    link: 'https://weather-widgit-app-9yhc-jce62ih8z-waleed0248s-projects.vercel.app'
  },
  {
    id: 4,
    title: 'Birthday Wish App',
    description: 'A birthday wish app built with Next.js, featuring candles, balloons, and a lively celebration.',
    link: 'https://birthday-wish-3fp2jq3s5-waleed0248s-projects.vercel.app'
  },
  {
    id: 5,
    title: 'Class Assignment 1',
    description: 'This Assignment organizes and manages Next.js pages.',
    link: 'https://class-assignments-o8ptdgvei-waleed0248s-projects.vercel.app' 
  },
  {
    id: 6,
    title: 'Class Assignment 2',
    description: 'This Assignment class focuses on developing components with proper styling using CSS.',
    link: 'https://class-assignments2-mvkkdudb3-waleed0248s-projects.vercel.app' 
  },
  {
    id: 7,
    title: 'Class Assignment 3',
    description: 'This Assignment organizes various components while utilizing Tailwind CSS for responsive design.',
    link: ''
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.projectsContainer}>
        <h2 className={styles.projectsTitle}>My Projects</h2>
        <p className={styles.projectsDescription}>Explore some of my recent work below:</p>

        <div className={styles.projectsGrid}>
          {projectsData.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  View Project
                </a>
              ) : (
                <span className={styles.projectUnavailable}>Unavailable</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
