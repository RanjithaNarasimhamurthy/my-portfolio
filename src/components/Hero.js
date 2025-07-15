// src/components/Hero.js
import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.overlay} />

      {/* content card wrapper */}
      <div className={styles.contentCard}>
        <p className={styles.greeting}>Hi, I’m</p>
        <h1 className={styles.title}>Ranjitha Narasimhamurthy</h1>
        <p className={styles.subtitle}>
          Software Engineer | Backend Developer | Cloud Enthusiast | ML Enthusiast
        </p>

        <div className={styles.buttons}>
          <a href="#projects" className={styles.btnPrimary}>
            View Projects
          </a>
          <a href="#contact" className={styles.btnSecondary}>
            Contact Me
          </a>
        </div>

        <div className={styles.socials}>
          <a
            href="https://github.com/RanjithaNarasimhamurthy"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ranjitha-n14/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </a>
          <a
            href="mailto: rnara016@ucr.edu"
            aria-label="Email"
          >
            <FiMail />
          </a>
        </div>
      </div>
    </section>
  );
}
