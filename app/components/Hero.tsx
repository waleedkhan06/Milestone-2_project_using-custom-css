"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Hero.module.css';

function Hero() {
  const handleSmoothScroll = (e:any, target:any) => {
    e.preventDefault();
    const section = document.querySelector(target);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>HELLO</h1>
          <h1 className={styles.subTitle}>
            I&apos;m <span className={styles.highlightedName}>Waleed Khan</span>
          </h1>
          <h2 className={styles.role}>Frontend Developer</h2>

          <p className={styles.description}>
            Welcome to my portfolio! I’m Waleed, a creative and dedicated frontend developer with a passion for building responsive, user-friendly websites.
          </p>

          <div className={styles.buttonContainer}>
            <Link 
              href="#projects"
              onClick={(e) => handleSmoothScroll(e, '#projects')}
              className={styles.button}
            >
              View My Work
            </Link>
            <Link 
              href="#services"
              onClick={(e) => handleSmoothScroll(e, '#services')}
              className={styles.button}
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Profile Image */}
        <div className={styles.imageContainer}>
          <Image
            src="/animated.gif"
            alt="Profile"
            width={450}
            height={280}
            className={styles.profileImage}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;

