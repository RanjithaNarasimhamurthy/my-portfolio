import React from 'react';
import styles from './Achievements.module.css';

export default function Achievements() {
  return (
    <section id="achievements" className={styles.section}>
      <h2 className={styles.title}>Achievements</h2>
      <ul className={styles.list}>
        
        <li className={styles.item}>
          <div className={styles.date}>Jun 2023</div>
          <div className={styles.content}>
            <div className={styles.heading}>
              Best Project Presentation
            </div>
            <div className={styles.desc}>
              Awarded <strong>Best Project Presentation</strong> for “Virtual Air Sketching” at B.N.M. Institute of Technology (VTU-approved).
            </div>
          </div>
        </li>
        <li className={styles.item}>
          <div className={styles.date}>Mar 2020</div>
          <div className={styles.content}>
            <div className={styles.heading}>
              Freshers Fest II Prize
            </div>
            <div className={styles.desc}>
              Won 2<sup>nd</sup> Prize  in the Technical category - Hackathon at the Freshers Fest 2019–20 induction program, at the BNMIT .
            </div>
          </div>
        </li>
        <li className={styles.item}>
          <div className={styles.date}>Apr 2015</div>
          <div className={styles.content}>
            <div className={styles.heading}>
              Infosys - Spark Catch them Young Training
            </div>
            <div className={styles.desc}>
              Successfully completed two weeks of training on <strong>Information Technology – Concepts and Applications</strong> conducted by Infosys Limited, Bangalore Development Centre.
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}
