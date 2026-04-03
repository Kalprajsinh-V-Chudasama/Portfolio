import '../../App.css'

function MentalHealthApp() {
  return (
    <div className="page-content">
      <section className="hero sub-hero">
        <h1 className="hero-name">Mental Health App</h1>
        <p className="hero-title">Wellness Tracker & Support Platform</p>
        <p className="hero-description">
          A comprehensive platform to help users monitor their mental health, 
          track vitals, and receive personalized wellness recommendations.
        </p>
        <div className="hero-buttons">
          <a href="#" className="btn btn-primary">View Live Demo</a>
          <a href="#" className="btn btn-secondary">View Source Code</a>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Project Overview</h2>
        <div className="about-content">
          <p>
            This Mental Health App was created to address the growing need for 
            accessible mental health resources. The application provides users with 
            tools to track their emotional well-being, monitor stress levels, and 
            access guided meditation and breathing exercises.
          </p>
          <p>
            The platform integrates with wearable devices to provide a holistic 
            view of the user&apos;s health by combining physical and mental wellness metrics.
          </p>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Key Features</h2>
        <div className="projects-grid">
          <article className="project-card">
            <div className="project-placeholder"><span>01</span></div>
            <div className="project-info">
              <h3 className="project-title">Mood Tracker</h3>
              <p className="project-description">
                Daily mood logging with emotion analysis and trend visualization over time.
              </p>
            </div>
          </article>
          <article className="project-card">
            <div className="project-placeholder"><span>02</span></div>
            <div className="project-info">
              <h3 className="project-title">Vital Monitoring</h3>
              <p className="project-description">
                Integration with wearables to track heart rate, sleep patterns, and activity levels.
              </p>
            </div>
          </article>
          <article className="project-card">
            <div className="project-placeholder"><span>03</span></div>
            <div className="project-info">
              <h3 className="project-title">AI Recommendations</h3>
              <p className="project-description">
                Personalized wellness suggestions based on user data and behavioral patterns.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Technologies Used</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3 className="skill-category-title">Frontend</h3>
            <ul className="skill-list">
              <li>Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3 className="skill-category-title">Backend</h3>
            <ul className="skill-list">
              <li>Node.js</li>
              <li>Express</li>
              <li>REST APIs</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3 className="skill-category-title">Database</h3>
            <ul className="skill-list">
              <li>PostgreSQL</li>
              <li>Prisma ORM</li>
              <li>Redis Cache</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Project Screenshots</h2>
        <div className="screenshots-grid">
          <div className="screenshot-placeholder">Dashboard View</div>
          <div className="screenshot-placeholder">Mood Tracker</div>
          <div className="screenshot-placeholder">Analytics</div>
        </div>
      </section>

      <section className="section project-nav">
        <a href="#" className="btn btn-secondary">← Previous Project</a>
        <a href="#" className="btn btn-primary">Next Project →</a>
      </section>

      <style>{`
        .page-content { padding-top: 80px; }
        .sub-hero { min-height: 60vh; padding: 4rem 2rem; }
        .screenshots-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }
        .screenshot-placeholder {
          aspect-ratio: 16/9;
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          font-size: 0.875rem;
        }
        .project-nav {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
        }
      `}</style>
    </div>
  )
}

export default MentalHealthApp
