import '../../App.css'
import EchoDashboard from '../../assets/echo-dashboard.svg'
import EchoCaregiver from '../../assets/echo-caregiver.svg'
import EchoReminders from '../../assets/echo-reminders.svg'

function Echo() {
  return (
    <div className="page-content">
      <section className="hero sub-hero">
        <h1 className="hero-name">ECHO</h1>
        <p className="hero-title">App for Dementia Patients</p>
        <p className="hero-description">
          A smart companion app for dementia patients that combines memory recall, safety tracking, and daily guidance, while giving caregivers remote control.
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
            ECHO is a smart companion app for dementia patients that combines memory recall, safety tracking, and daily guidance, while giving caregivers remote control.
          </p>
          <p>
            Smart Companion App for Dementia Patients is a full-stack healthcare support platform that helps patients manage daily routines, memory recall, and personal safety while enabling caregivers to monitor and assist remotely. Built using React, Node.js, and a real-time backend system, the application features GPS tracking, smart reminders, emergency alerts, and role-based dashboards. The project focuses on accessibility, real-time communication, and human-centered design to improve independence for patients and peace of mind for caregivers.
          </p>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Key Features</h2>
        <div className="projects-grid">
          <article className="project-card">
            <div className="feature-icon" style={{background: 'linear-gradient(135deg, #64ffda20, #64ffda40)'}}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#64ffda" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
            </div>
            <div className="project-info">
              <h3 className="project-title">Smart Reminders</h3>
              <p className="project-description">
                Automated daily reminders for medications, appointments, and activities to maintain routines.
              </p>
            </div>
          </article>
          <article className="project-card">
            <div className="feature-icon" style={{background: 'linear-gradient(135deg, #64ffda20, #64ffda40)'}}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#64ffda" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div className="project-info">
              <h3 className="project-title">GPS Location Tracking</h3>
              <p className="project-description">
                Real-time location monitoring to ensure patient safety and quick response in emergencies.
              </p>
            </div>
          </article>
          <article className="project-card">
            <div className="feature-icon" style={{background: 'linear-gradient(135deg, #64ffda20, #64ffda40)'}}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#64ffda" stroke-width="2">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
            <div className="project-info">
              <h3 className="project-title">Caregiver Dashboard</h3>
              <p className="project-description">
                Remote monitoring dashboard for caregivers to track patient well-being and receive alerts.
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
              <li>React</li>
              <li>TypeScript</li>
              <li>CSS Modules</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3 className="skill-category-title">Backend</h3>
            <ul className="skill-list">
              <li>Node.js</li>
              <li>Express</li>
              <li>REST API</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3 className="skill-category-title">Database</h3>
            <ul className="skill-list">
              <li>MongoDB</li>
              <li>Mongoose</li>
              <li>Atlas</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Project Screenshots</h2>
        <div className="screenshots-grid">
          <div className="screenshot-image">
            <img src={EchoDashboard} alt="ECHO Dashboard" />
            <span className="screenshot-label">Patient Dashboard</span>
          </div>
          <div className="screenshot-image">
            <img src={EchoCaregiver} alt="Caregiver View" />
            <span className="screenshot-label">Caregiver Dashboard</span>
          </div>
          <div className="screenshot-image">
            <img src={EchoReminders} alt="Daily Reminders" />
            <span className="screenshot-label">Daily Reminders</span>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Lessons Learned</h2>
        <div className="about-content">
          <p>
            Reflect on what you learned while building this project. Discuss the 
            technical skills you developed, challenges you overcame, and how this 
            project helped you grow as a developer.
          </p>
        </div>
      </section>

      <section className="section project-nav">
        <a href="#" className="btn btn-secondary">← Back to Projects</a>
        <a href="#" className="btn btn-primary">Next Project →</a>
      </section>

      <style>{`
        .page-content {
          padding-top: 80px;
        }
        
        .sub-hero {
          min-height: 60vh;
          padding: 4rem 2rem;
        }

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

export default Echo
