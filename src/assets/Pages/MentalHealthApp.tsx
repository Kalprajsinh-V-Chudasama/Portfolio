import '../../App.css'
import MhDashboard from '../../assets/mh-dashboard.svg'
import MhMoodTracker from '../../assets/mh-mood-tracker.svg'
import MhAnalytics from '../../assets/mh-analytics.svg'

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
            Mental Health App is a full-stack wellness platform designed to make mental health resources more accessible through digital tools for emotional tracking and stress management. Built with a modern web stack, the application allows users to monitor mood patterns, track stress levels, and access guided meditation and breathing exercises. The project emphasizes user-friendly design, data visualization, and supportive self-care experiences to promote consistent mental well-being.
          </p>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Key Features</h2>
        <div className="projects-grid">
          <article className="project-card">
            <div className="feature-icon" style={{background: 'linear-gradient(135deg, #e9456020, #e9456040)'}}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#e94560" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                <line x1="9" y1="9" x2="9.01" y2="9"/>
                <line x1="15" y1="9" x2="15.01" y2="9"/>
              </svg>
            </div>
            <div className="project-info">
              <h3 className="project-title">Mood Tracker</h3>
              <p className="project-description">
                Daily mood logging with emotion analysis and trend visualization over time.
              </p>
            </div>
          </article>
          <article className="project-card">
            <div className="feature-icon" style={{background: 'linear-gradient(135deg, #e9456020, #e9456040)'}}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#e94560" stroke-width="2">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
              </svg>
            </div>
            <div className="project-info">
              <h3 className="project-title">Vital Monitoring</h3>
              <p className="project-description">
                Integration with wearables to track heart rate, sleep patterns, and activity levels.
              </p>
            </div>
          </article>
          <article className="project-card">
            <div className="feature-icon" style={{background: 'linear-gradient(135deg, #e9456020, #e9456040)'}}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#e94560" stroke-width="2">
                <path d="M12 2a10 10 0 1010 10"/>
                <path d="M12 6v6l4 2"/>
                <path d="M18 2v4h4"/>
              </svg>
            </div>
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
          <div className="screenshot-image">
            <img src={MhDashboard} alt="Dashboard" />
            <span className="screenshot-label">Wellness Dashboard</span>
          </div>
          <div className="screenshot-image">
            <img src={MhMoodTracker} alt="Mood Tracker" />
            <span className="screenshot-label">Mood Tracker</span>
          </div>
          <div className="screenshot-image">
            <img src={MhAnalytics} alt="Analytics" />
            <span className="screenshot-label">Analytics</span>
          </div>
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
        .screenshot-image {
          aspect-ratio: 16/9;
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: 12px;
          overflow: hidden;
          position: relative;
          display: flex;
          flex-direction: column;
        }
        .screenshot-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .screenshot-label {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 0.75rem;
          background: linear-gradient(transparent, rgba(0,0,0,0.8));
          color: var(--text-muted);
          font-size: 0.875rem;
          text-align: center;
        }
        .feature-icon {
          height: 150px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-bottom: 1px solid var(--border);
        }
        .projects-grid .project-card {
          padding: 0;
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
