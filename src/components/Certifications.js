// src/components/Certifications.js
import React from 'react';
import styles from './Certifications.module.css';

const certifications = [
  {
    name: 'Python for Everybody',
    issuer: 'University of Michigan (Coursera)',
    date: 'Jul 2020',
    link: 'https://coursera.org/verify/NEPU4VNDG6L5'
  },
  {
    name: 'Python for Everybody Specialization',
    issuer: 'University of Michigan (Coursera)',
    date: 'Jul 2020',
    link: 'https://coursera.org/verify/NEPU4VNDG6L5'
  },
  {
    name: 'Programming Foundations with JavaScript, HTML and CSS',
    issuer: 'Duke University (Coursera)',
    date: 'Jul 2020',
    link: 'https://coursera.org/verify/VF45U8CZHZDH'
  },
  {
    name: 'Java Programming: Solving Problems with Software',
    issuer: 'Duke University (Coursera)',
    date: 'Aug 2020',
    link: 'https://coursera.org/verify/53X7FN4TJFC5'
  },
  {
    name: 'Java Programming: Arrays, Lists, and Structured Data',
    issuer: 'Duke University (Coursera)',
    date: 'Sep 2020',
    link: 'https://coursera.org/verify/S49AJN732BQB'
  },
  {
    name: 'Introduction to the Internet of Things & Embedded Systems',
    issuer: 'UC Irvine (Coursera)',
    date: 'Jul 2020',
    link: 'https://coursera.org/verify/5JUB4FEBF546'
  },
  {
    name: 'The Arduino Platform and C Programming',
    issuer: 'UC Irvine (Coursera)',
    date: 'Jul 2020',
    link: 'https://coursera.org/verify/HNCTUPPSBQZV'
  },
  {
    name: 'Interfacing with the Arduino',
    issuer: 'UC Irvine (Coursera)',
    date: 'Jul 2020',
    link: 'https://coursera.org/verify/DWVPUXJMRJT4'
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className={styles.section}>
      <h2 className={styles.title}>Certifications</h2>
      <div className={styles.grid}>
        {certifications.map(cert => (
          <div key={cert.name} className={styles.card}>
            <div className={styles.certName}>{cert.name}</div>
            <div className={styles.issuer}>{cert.issuer}</div>
            <div className={styles.date}>{cert.date}</div>
            {/* <a
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              className={styles.verify}
            >
              View Certificate
            </a> */}
          </div>
        ))}
      </div>
    </section>
  );
}
