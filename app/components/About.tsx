"use client"
import styles from '../styles/about.module.css';

function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        <h2 className={styles.heading}>
          About Me
        </h2>
        <p className={styles.paragraph}>
          Hi, I’m <span className={styles.highlightedText}>Waleed Khan</span>, 
          a dedicated frontend developer with a strong foundation in modern web
           technologies. 
          My expertise includes creating visually appealing and highly 
          functional user interfaces, 
          combining technical skills with creativity to deliver exceptional 
          digital experiences.
        </p>
        
        <p className={styles.paragraph}>
          I have experience with HTML, CSS, JavaScript, and TypeScript, and I’m
           proficient in
          frameworks like React and Next.js. My journey into web development 
          has been fueled
          by a passion for learning and adapting to the latest advancements in
           frontend
          development, allowing me to build websites and applications that are 
          not only
          visually striking but also optimized for performance.
        </p>

        <p className={styles.paragraph}>
          I’m constantly advancing my skills, currently focused on mastering
           Next.js and 
          deepening my understanding of responsive design principles, 
          accessibility standards, 
          and performance optimization. My goal is to contribute meaningfully 
          to the tech 
          community by building applications that are user-centric and engaging.
        </p>
      </div>
    </section>
  );
}

export default About;
