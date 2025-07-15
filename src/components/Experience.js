import React, { useState } from 'react';
import styles from './Experience.module.css';

// Logos (place these under src/assets/)
import thoughtclanLogo from '../assets/thoughtclan1.jpg';
import varconsLogo    from '../assets/varcons.png';

const experiences = [
  {
    title: 'Software Engineer',
    company: 'ThoughtClan Technologies',
    logo: thoughtclanLogo,
    period: 'Jul 2023 – Jun 2024',
    location: 'Bengaluru, India',
    details: [
      'Built robust backend solutions using ASP.NET Web Forms, ASP.NET MVC, ASP.NET Web API, and .NET MAUI for a mining client, implementing OAuth 2.0 authentication and leveraging Firebase for storing and retrieving chemical test data with real-time updates.',
      'Migrated a legacy .NET Framework application by extracting Web API endpoints and rewriting the front-end in Angular (latest version), integrated OAuth-based security, and deployed static assets to Firebase Hosting, streamlining code maintainability.',
      'Developed a cross-platform shopping cart application in .NET MAUI with role-based access controls and responsive UI, allowing customers to browse products and manage orders seamlessly across desktop and mobile devices.',
      'Tested backend APIs using Postman and automated front-end UI tests with Selenium, ensuring end-to-end functionality and regression safety across releases.',
      'Designed and optimized SQL Server database schemas, creating indexes and stored procedures to improve query performance by 25%.'
    ],
  },
  {
    title: 'Software Engineer Intern',
    company: 'ThoughtClan Technologies',
    logo: thoughtclanLogo,
    period: 'Feb 2023 – Apr 2023',
    location: 'Bengaluru, India',
    details: [
      'Engineered a Bike Rental System backend in Spring Boot, complete with Swagger documentation and 85%+ JUnit/Mockito test coverage.',
      'Built reusable React.js components with Axios interceptors to handle JWT authentication and token refresh flows for over 500 daily users, boosting booking efficiency by 40%.',
      'Integrated Firebase for real-time data syncing and implemented granular access controls via OAuth 2.0, ensuring secure, user-specific access to rental data.'
    ],
  },
  {
    title: 'Full Stack Intern',
    company: 'Varcons Technologies',
    logo: varconsLogo,
    period: 'Aug 2022 – Sep 2022',
    location: 'Bengaluru, India',
    details: [
      'Delivered a Car Service Management Platform end-to-end using Spring MVC and MySQL, including service booking, history tracking, and admin controls.',
      'Created a responsive, mobile-first React.js UI with Bootstrap for shop-floor tablets and phones, enhancing user satisfaction.',
      'Normalized database schemas and added composite indexes on (vehicle_id, service_date) and (customer_id, last_name), resulting in a 20% reduction in query times.',
      'Developed a fully-functional “Template – Car Service Center Site” web template, translating design briefs into dynamic pages with database-driven data collection and sorting, and delivered it on time with strong design skills.'
    ],
  },
];

export default function Experience() {
  const [openIndices, setOpenIndices] = useState([]);

  const toggle = idx =>
    setOpenIndices(prev =>
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );

  return (
    <section id="experience" className={styles.section}>
      <h2 className={styles.title}>Experience</h2>

      {experiences.map((exp, idx) => {
        const isExpanded = openIndices.includes(idx);

        return (
          <div
            key={idx}
            className={`${styles.card} ${isExpanded ? styles.cardExpanded : ''}`}
          >
            {/* Header: combined title–company */}
            <div className={styles.header} onClick={() => toggle(idx)}>
              <div className={styles.headerContent}>
                <div className={styles.position}>
                  {exp.title} – {exp.company}
                </div>
                <div className={styles.meta}>
                  {exp.period} &nbsp;|&nbsp; {exp.location}
                </div>
              </div>
              <div className={styles.chevron}>
                {isExpanded ? '▲' : '▼'}
              </div>
            </div>

            {/* Details: logo + paragraphs */}
            {isExpanded && (
              <div className={styles.details}>
                <div className={styles.detailContainer}>
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className={styles.detailLogo}
                  />
                  <div className={styles.paragraphs}>
                    {exp.details.map((text, i) => (
                      <p key={i} className={styles.paragraph}>
                        {text}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}
