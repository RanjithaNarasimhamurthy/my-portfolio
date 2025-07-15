// src/components/Skills.js
import React, { useState, useEffect } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import styles from './Skills.module.css'

const skillCategories = [
  {
    category: 'Languages',
    skills: [
      'Python','Java','C++','C','C#','JavaScript','HTML','CSS','PHP'
    ],
  },
  {
    category: 'Frameworks & Platforms',
    skills: [
      '.NET','Spring Boot','React.js','Flask','PowerApps','SSRS','OpenCV','OpenGL',
    ],
  },
  {
    category: 'ML/DL & Data Tools',
    skills: [
      'Scikit‑learn','TensorFlow','PyTorch','HuggingFace Transformers',
      'XGBoost','Apache Spark','FAISS',
    ],
  },
  {
    category: 'DevOps & Tools',
    skills: ['Docker','Git','CI/CD','Postman','Jupyter'],
  },
  {
    category: 'Cloud & Big Data',
    skills: ['AWS','Azure','Apache Spark','GeoPandas','QGIS'],
  },
  {
    category: 'Databases',
    skills: ['MySQL','PostgreSQL','MongoDB','PostGIS','DynamoDB'],
  },
  {
    category: 'Operating Systems',
    skills: ['Linux','Unix','Windows'],
  },
]

export default function Skills() {
  const [filter, setFilter] = useState('All')
  const [openCategories, setOpenCategories] = useState([])

  // tabs = All + category names
  const tabs = ['All', ...skillCategories.map(c => c.category)]

  // ensure the selected category is expanded automatically
  useEffect(() => {
    if (filter === 'All') {
      // collapse everything
      setOpenCategories([])
    } else {
      // expand the selected category (if not already)
      setOpenCategories(prev =>
        prev.includes(filter) ? prev : [...prev, filter]
      )
    }
  }, [filter])

  // toggle one card on chevron/header click
  const toggleCard = cat => {
    setOpenCategories(prev =>
      prev.includes(cat)
        ? prev.filter(c => c !== cat)
        : [...prev, cat]
    )
  }

  return (
    <section id="skills" className={styles.section}>
      <h2 className={styles.title}>Technical Skills</h2>

      {/* Tabs */}
      <div className={styles.tabs}>
        {tabs.map(tab => (
          <button
            key={tab}
            className={
              filter === tab ? styles.tabActive : styles.tab
            }
            onClick={() => setFilter(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Only render categories matching filter */}
      {skillCategories
        .filter(c => filter === 'All' || c.category === filter)
        .map(({ category, skills }) => {
          const isOpen = openCategories.includes(category)
          return (
            <div
              key={category}
              className={`${styles.card} ${
                isOpen ? styles.cardExpanded : ''
              }`}
            >
              <div
                className={styles.header}
                onClick={() => toggleCard(category)}
              >
                <div className={styles.category}>
                  {category}
                </div>
                <div className={styles.chevron}>
                  {isOpen ? (
                    <FiChevronUp />
                  ) : (
                    <FiChevronDown />
                  )}
                </div>
              </div>

              {isOpen && (
                <div className={styles.details}>
                  <div className={styles.tags}>
                    {skills.map(skill => (
                      <span
                        key={skill}
                        className={styles.tag}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )
        })}
    </section>
  )
}
