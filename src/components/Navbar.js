// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import styles from './Navbar.module.css';

export default function Navbar() {
  // Keep track of current theme
  const [theme, setTheme] = useState(
    () => document.documentElement.getAttribute('data-theme') || 'dark'
  );

  // Apply theme on html root
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Toggle between 'light' and 'dark'
  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>Ranjitha Narasimhamurthy</div>
      <ul className={styles.menu}>
        {['about','education','experience','skills','projects','certifications','achievements','publications','contact'].map(section => (
          <li key={section} className={styles.menuItem}>
            <a href={`#${section}`}>{section}</a>
          </li>
        ))}
      </ul>
      <button
        className={styles.toggleBtn}
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? <FiSun /> : <FiMoon />}
      </button>
    </nav>
  );
}
