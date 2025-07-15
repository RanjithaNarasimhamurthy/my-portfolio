// src/components/Contact.js
import React from 'react';
import { FiMail, FiLinkedin } from 'react-icons/fi';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <h2 className={styles.title}>Get In Touch</h2>

      <div className={styles.text}>
        <p>
          I’m always open to exciting opportunities—whether it’s a full‑time role, a tech collaboration, or even just a friendly conversation.
        </p>
        <p>
          Got a challenging problem in cloud, AI, or backend systems? Let’s tackle it together.
        </p>
        <p>
          Dreaming up the next big thing in user‑centered design? I’d love to hear your vision.
        </p>
        <p>
          Shoot me an email at{' '}
          <a href="mailto:rnara016@ucr.edu" className={styles.inlineLink}>
            rnara016@ucr.edu
          </a>{' '}
          or connect on LinkedIn—let’s make something awesome happen.
        </p>
      </div>

      <div className={styles.actions}>
        <a
          href="mailto:rnara016@ucr.edu"
          className={`${styles.btn} ${styles.emailBtn}`}
        >
          <FiMail /> Email Me
        </a>
        <a
          href="https://www.linkedin.com/in/ranjitha-n14"
          target="_blank"
          rel="noreferrer"
          className={`${styles.btn} ${styles.linkedinBtn}`}
        >
          <FiLinkedin /> LinkedIn
        </a>
      </div>
    </section>
  );
}
