import React from 'react';
import styles from '../styles/Service.module.css';

import { FaLaptopCode, FaPaintBrush, FaSearch, FaMobileAlt, FaCss3Alt, FaChartLine } from 'react-icons/fa';

const servicesData = [
  {
    title: 'Web Development',
    description: 'Building responsive, fast-loading, and interactive websites.',
    icon: <FaLaptopCode />,
  },
  {
    title: 'UI/UX Design',
    description: 'Creating intuitive and aesthetically pleasing user interfaces.',
    icon: <FaPaintBrush />,
  },
  {
    title: 'SEO Optimization',
    description: 'Improving website visibility with strategic SEO practices.',
    icon: <FaSearch />,
  },
  {
    title: 'Responsive Web Design',
    description: 'Creating responsive websites that look great on any device ensuring the best user experience.',
    icon: <FaMobileAlt />,
  },
  {
    title: 'Tailwind CSS Integration',
    description: 'Utilizing Tailwind CSS for clean, modern, and responsive designs with minimal code.',
    icon: <FaCss3Alt />,
  },
  {
    title: 'SEO Friendly Websites',
    description: 'Developing websites with SEO best practices to help your site rank higher in search engine results.',
    icon: <FaChartLine />,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.servicesContainer}>
        <h2 className={styles.servicesTitle}>My Services</h2>
        <p className={styles.servicesDescription}>Here are the services I offer:</p>

        <div className={styles.servicesGrid}>
          {servicesData.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>{service.icon}</div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
