import '../../App.css'

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
            <div className="project-placeholder">
              <span>01</span>
            </div>
            <div className="project-info">
              <h3 className="project-title">Feature One</h3>
              <p className="project-description">
                Description of the first major feature of your ECHO project.
              </p>
            </div>
          </article>
          <article className="project-card">
            <div className="project-placeholder">
              <span>02</span>
            </div>
            <div className="project-info">
              <h3 className="project-title">Feature Two</h3>
              <p className="project-description">
                Description of the second major feature of your ECHO project.
              </p>
            </div>
          </article>
          <article className="project-card">
            <div className="project-placeholder">
              <span>03</span>
            </div>
            <div className="project-info">
              <h3 className="project-title">Feature Three</h3>
              <p className="project-description">
                Description of the third major feature of your ECHO project.
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
          <div className="screenshot-placeholder">Screenshot 1</div>
          <div className="screenshot-placeholder">Screenshot 2</div>
          <div className="screenshot-placeholder">Screenshot 3</div>
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
