"use client";

import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Header.module.css'; 

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>, 
    target: string
  ) => {
    e.preventDefault();
    const section = document.querySelector(target);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <header className={styles.header}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        
        <div className={styles.logoContainer}>
          <Link href="#home">
            <Image src="/logo.png" alt="Logo" width={80} height={44} />
          </Link>
          <span className={styles.logoText}>My Portfolio</span>
        </div>

        {/* Desktop Navigation Links */}
        <div className={styles.navLinks}>
          {['Home', 'About', 'Projects', 'Services', 'Contact', 'Skills'].map((item, index) => (
            <Link 
              key={index} 
              href={`#${item.toLowerCase()}`} 
              onClick={(e) => handleSmoothScroll(e, `#${item.toLowerCase()}`)}
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Menu Button for Mobile */}
        <div className={styles.menuButton}>
          <button onClick={toggleMenu}>
            <FaBars />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <div className="flex flex-col space-y-2">
            {['Home', 'About', 'Projects', 'Services', 'Contact', 'Skills'].map((item, index) => (
              <Link 
                key={index} 
                href={`#${item.toLowerCase()}`} 
                onClick={(e) => handleSmoothScroll(e, `#${item.toLowerCase()}`)}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
