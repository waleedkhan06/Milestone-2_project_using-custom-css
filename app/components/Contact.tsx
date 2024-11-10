"use client";

import React from 'react';
import styles from '../styles/Contact.module.css'; 

const ContactSection = () => {
  return (
    <section id="contact" className={styles.section}>
      <div className="container mx-auto">
        <h2 className={styles.header}>Contact Me</h2>
        <p className={styles.description}>
          Feel free to reach out to me with any inquiries or project requests.
        </p>

        <form
          className={styles.formContainer}
          method="POST"
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className={styles.label}
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={styles.input}
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className={styles.label}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={styles.input}
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className={styles.label}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className={styles.input}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className={styles.submitButton}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;


