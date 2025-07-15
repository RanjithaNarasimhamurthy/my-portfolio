// src/components/Publications.js
import React from 'react';
import styles from './Publications.module.css';
import { FiExternalLink } from 'react-icons/fi';

const publications = [
  {
    title: "A Survey on Virtual Air Sketching Using OpenCV",
    authors: [
      "Ranjitha N",
      "Rakshitha V",
      "Prakshi Singh",
      "Aditi B. Prahalad",
      "Smt. Akshitha Katkeri"
    ],
    journal: "International Journal of Advances in Engineering and Management (IJAEM)",
    volume: "4",
    issue: "12",
    year: "2022",
    pages: "339–346",
    link: "https://ijaem.net/issue_dcp/A%20Survey%20on%20Virtual%20Air%20Sketching%20Using%20OpenCV.pdf"
  }
];

export default function Publications() {
  return (
    <section id="publications" className={styles.section}>
      <h2 className={styles.title}>Publications</h2>
      <div className={styles.list}>
        {publications.map((pub, idx) => (
          <div key={idx} className={styles.card}>
            <h3 className={styles.pubTitle}>{pub.title}</h3>
            <p className={styles.authors}>
              {pub.authors.join(", ")}
            </p>
            <p className={styles.meta}>
              {pub.journal}, Vol. {pub.volume}, Issue {pub.issue} ({pub.year}), pp. {pub.pages}
            </p>
            <a
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              View Paper <FiExternalLink />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
