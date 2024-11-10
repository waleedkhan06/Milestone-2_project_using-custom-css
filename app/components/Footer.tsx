"use client";
import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import Image from 'next/image';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 200);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className={styles.footer}>
      <div className="container mx-auto">
        <p className={styles.footerText}>
          &copy; {currentYear} Waleed Khan. All Rights Reserved.
        </p>
        <div className={styles.socialIcons}>
          <a href="https://www.linkedin.com/in/waleedkhan-/" 
          target="_blank" 
          rel="noopener noreferrer">
            <Image 
              src="https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/linkedin.svg" 
              alt="LinkedIn" 
              width={32} 
              height={32} 
              className={styles.socialIcon} 
            />
          </a>
          <a href="https://github.com/waleedkhan06" target="_blank"
           rel="noopener noreferrer">
            <Image 
              src="https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/github.svg" 
              alt="GitHub" 
              width={32} 
              height={32} 
              className={styles.socialIcon} 
            />
          </a>
        </div>
      </div>

      {isVisible && (
        <button 
          onClick={scrollToTop} 
          className={styles.scrollToTopBtn}
          aria-label="Scroll to top"
        >
          <FaArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
}
