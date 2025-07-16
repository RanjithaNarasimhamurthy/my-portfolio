// src/components/Footer.js
import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        {/* About Me */}
        <div className={styles.col}>
          <h4 className={styles.heading}>About Me</h4>
          <p>Ranjitha Narasimhamurthy</p>
          <p>Software Engineer | Backend Dev | Cloud & ML Enthusiast</p>
          <ul className={styles.contactList}>
            <li>
              <FiGithub />{' '}
              <a
                href="https://github.com/RanjithaNarasimhamurthy"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <FiLinkedin />{' '}
              <a
                href="https://www.linkedin.com/in/ranjitha-n14"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <FiMail />{' '}
              <a href="mailto:rnara016@ucr.edu">
                rnara016@ucr.edu
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className={styles.col}>
          <h4 className={styles.heading}>Quick Links</h4>
          <ul className={`${styles.list} ${styles.quickList}`}>
          
            {['about','education','skills','experience','projects','contact'].map(link => (
              <li key={link}>
                <a href={`#${link}`}>
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Featured Projects */}
        <div className={styles.col}>
          <h4 className={styles.heading}>Featured Projects</h4>
          <ul className={styles.list}>
            {[
              'E-Commerce Mobile App',
              'Reddit Search Engine',
              'Compiler Optimization',
              'Scalable Task Scheduler'
            ].map(name => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.copy}>
        © 2025 Ranjitha Narasimhamurthy. All rights reserved.
      </div>
    </footer>
  );
}
