import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import styles from './Navbar.module.css';

export default function Navbar() {
  // Theme state
  const [theme, setTheme] = useState(
    () => document.documentElement.getAttribute('data-theme') || 'dark'
  );
  // Mobile menu open/closed
  const [menuOpen, setMenuOpen] = useState(false);

  // Apply theme attribute on <html>
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));

  const toggleMenu = () => setMenuOpen(open => !open);

  const closeMenu = () => setMenuOpen(false);

  const sections = [
    'about','education','experience',
    'skills','projects','certifications',
    'achievements','publications','contact'
  ];

  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <div className={styles.logo}>
          Ranjitha Narasimhamurthy
        </div>
        <button
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <ul className={`${styles.menu} ${menuOpen ? styles.open : ''}`}>
        {sections.map(sec => (
          <li key={sec} className={styles.menuItem}>
            <a
              href={`#${sec}`}
              onClick={closeMenu}
            >
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </a>
          </li>
        ))}
        {/* Theme toggle inside mobile menu */}
        <li className={`${styles.menuItem} ${styles.themeInMenu}`}>
          <button
            className={styles.toggleBtn}
            onClick={() => {
              toggleTheme();
              closeMenu();
            }}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
        </li>
      </ul>

      {/* Desktop theme toggle */}
      <button
        className={`${styles.toggleBtn} ${styles.hideOnMobile}`}
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? <FiSun /> : <FiMoon />}
      </button>
    </nav>
  );
}
