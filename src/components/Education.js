import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import styles from './Education.module.css';

const educationData = [
  {
    institution: 'University of California, Riverside',
    location: 'California, USA',
    degree: 'Master of Science in Computer Science',
    period: 'Sep 2024 – Dec 2025',
    // gpa: '3.66 / 4.00',
    courses: [
      {
        name: 'Artificial Intelligence',
        desc: 'Study of algorithms and models that enable machines to perform tasks requiring human‐like intelligence.',
      },
      {
        name: 'Compiler Construction',
        desc: 'Designing and implementing compilers to translate high-level code into executable form.',
      },
      {
        name: 'Big Data Management',
        desc: 'Techniques and architectures for storing, querying, and processing vast datasets efficiently.',
      },
      {
        name: 'Information Retrieval',
        desc: 'Algorithms and data structures for indexing, searching, and ranking textual information.',
      },
      {
        name: 'Design & Analysis of Algorithms',
        desc: 'Mathematical methods to design algorithms and rigorously analyze their time and space complexity.',
      },
      {
        name: 'Foundations of Machine Learning',
        desc: 'Core theories behind supervised and unsupervised learning, including statistical and optimization approaches.',
      },
      {
        name: 'Data Mining Techniques',
        desc: 'Methods for discovering patterns, associations, and insights from large-scale data.',
      },
      {
        name: 'Spatial Computing',
        desc: 'Computational strategies for representing, querying, and visualizing spatial (geographic) data.',
      },
    ],
  },
  {
    institution: 'Visvesvaraya Technological University, Bengaluru',
    location: 'Karnataka, India',
    degree: 'Bachelor of Engineering in Computer Science',
    period: 'Aug 2019 – Jun 2023',
    // gpa: '8.81 / 10.00',
    courses: [
      {
        name: 'Data Structures & Algorithms',
        desc: 'Efficient data organization and algorithmic problem-solving strategies.',
      },
      {
        name: 'Design & Analysis of Algorithms',
        desc: 'Advanced techniques to create optimal algorithms and prove their correctness and efficiency.',
      },
      {
        name: 'Compiler Organization',
        desc: 'Examination of compiler phases, from lexical analysis through code generation and optimization.',
      },
      {
        name: 'Web Technology',
        desc: 'Technologies and protocols for building interactive web applications (HTML, CSS, JavaScript, HTTP).',
      },
      {
        name: 'Software Engineering',
        desc: 'Best practices for the software development lifecycle, including requirements, design, testing, and maintenance.',
      },
      {
        name: 'Operating Systems',
        desc: 'Concepts of process management, memory management, file systems, and concurrency control.',
      },
      {
        name: 'Database Management Systems',
        desc: 'Principles of relational databases, SQL querying, normalization, and transaction management.',
      },
      {
        name: 'Computer Networks',
        desc: 'Network architectures, protocols, and services enabling data communication.',
      },
      {
        name: 'Unix',
        desc: 'Fundamentals of the Unix OS environment, shell scripting, and system utilities.',
      },
    ],
  },
];

export default function Education() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const toggle = idx =>
    setExpandedIndex(expandedIndex === idx ? null : idx);

  return (
    <section id="education" className={styles.section}>
      <h2 className={styles.title}>Education</h2>
      {educationData.map((edu, i) => {
        const isOpen = expandedIndex === i;
        return (
          <div key={i} className={styles.card}>
            <div className={styles.header}>
              <div className={styles.institution}>
                {edu.institution}
              </div>
              <div className={styles.meta}>
                {edu.location} &nbsp;
                {/* |&nbsp; GPA: {edu.gpa} */}
              </div>
            </div>

            <div className={styles.body}>
              <div className={styles.degree}>{edu.degree}</div>
              <div className={styles.period}>{edu.period}</div>

              <div
                className={styles.toggleBtn}
                onClick={() => toggle(i)}
              >
                {isOpen ? 'Hide Courses' : 'View Courses'}{' '}
                {isOpen ? <FiChevronUp /> : <FiChevronDown />}
              </div>

              {isOpen && (
                <ul className={styles.courses}>
                  {edu.courses.map((c, idx) => (
                    <li
                      key={idx}
                      className={styles.courseItem}
                    >
                      <span
                        className={styles.courseName}
                      >
                        {c.name}:
                      </span>
                      <span
                        className={styles.courseDesc}
                      >
                        {c.desc}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        );
      })}
    </section>
  );
}
