import '../../App.css'

function Echo() {
  return (
    <div className="page-content">
      <section className="hero sub-hero">
        <h1 className="hero-name">ECHO</h1>
        <p className="hero-title">Your Project Subtitle</p>
        <p className="hero-description">
          A brief description of your ECHO project. Explain what it does, 
          the problem it solves, and what technologies it uses.
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
            Provide a detailed overview of the ECHO project here. Explain the 
            motivation behind it, the challenges you faced, and how you overcame them.
          </p>
          <p>
            Discuss the key features, technologies used, and what makes this project unique.
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
