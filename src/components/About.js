import React from 'react';
import styles from './About.module.css';
import profilePic from '../assets/ranjitha.jpg';

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <h2 className={styles.title}>About</h2>

      {/* Card wrapper */}
      <div className={styles.card}>
        <div className={styles.imageWrapper}>
          <img
            src={profilePic}
            alt="Ranjitha Narasimhamurthy"
            className={styles.image}
          />
         </div>

    <div className={styles.content}>
      <div className={styles.text}>
        <p>
          I’m a Master’s student in Computer Science at UC Riverside with 1.5 years of hands-on software engineering experience. I design and build scalable, reliable back-end services and intuitive front-end interfaces using Python, Java, C++, JavaScript, SQL, and .NET. I’m comfortable with cloud platforms like AWS and Azure and frameworks such as React, Spring Boot, and .NET MAUI. Driven by a passion for continuous learning and user-centered design, I deliver clean, maintainable, and secure solutions that perform under load and delight end users.
        </p>
        <p>
          Looking ahead, I’m focused on emerging areas at the intersection of cloud computing and machine learning—building self-healing systems that adapt in real time to shifting workloads and data patterns. My goal is to architect robust, AI-driven platforms that empower businesses to make smarter decisions and deliver truly personalized experiences. In parallel, I’m exploring distributed ledger technologies to enhance data integrity and privacy. Ultimately, I aspire to lead an engineering team where I can mentor others, drive open-source innovation, and translate cutting-edge research into production-grade software that tackles real-world challenges.
        </p>
      </div>
         <a
           href={`${process.env.PUBLIC_URL}/Resume-RanjithaNarasimhamurthy.pdf`}
           download="Resume-RanjithaNarasimhamurthy.pdf"
           className={styles.button}
         >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
