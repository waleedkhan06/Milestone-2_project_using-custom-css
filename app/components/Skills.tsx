"use client";

import React from 'react';
import styles from '../styles/Skills.module.css';


const skillsData = [
  { name: 'HTML', level: 'Expert' },
  { name: 'CSS', level: 'Expert' },
  { name: 'JavaScript', level: 'Advanced' },
  { name: 'TypeScript', level: 'Advanced' },
  { name: 'React', level: 'Intermediate' },
  { name: 'Next.js', level: 'Intermediate' },
  { name: 'Tailwind CSS', level: 'Advanced' },
  { name: 'Python (AI & Gen AI)', level: 'Beginner' },
  { name: 'Bootstrap', level: 'Beginner' }
];

const SkillCard = ({ skill }: { skill: { name: string; level: string } }) => {
  const levelMapping: { [key: string]: string } = {
    Expert: styles.progressExpert,
    Advanced: styles.progressAdvanced,
    Intermediate: styles.progressIntermediate,
    Beginner: styles.progressBeginner,
  };

  return (
    <div className={styles.skillCard}>
      <h3 className={styles.skillName}>{skill.name}</h3>
      <p className={styles.skillLevel}>Proficiency: {skill.level}</p>
      <div className={styles.progressBar}>
        <div
          className={`${styles.progress} ${levelMapping[skill.level]}`}
          aria-live="polite"
          aria-label={`${skill.name} proficiency`}
        ></div>
      </div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.skillsContainer}>
        <h2 className={styles.skillsTitle}>Skills</h2>
        <p className={styles.skillsDescription}>
          A summary of my technical expertise and proficiency level in each skill.
        </p>

        <div className={styles.skillsGrid}>
          {skillsData.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;


