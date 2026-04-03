import '../../App.css'

function Subspace() {
  return (
    <div className="page-content">
      <section className="hero sub-hero">
        <h1 className="hero-name">Subspace</h1>
        <p className="hero-title">Community Connection Platform</p>
        <p className="hero-description">
          A modern platform designed to help people connect, share ideas, 
          and build meaningful communities in a distraction-free environment.
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
            Subspace was born from the idea that social media should foster 
            genuine connections rather than superficial interactions. The platform 
            emphasizes thoughtful discussions, interest-based communities, and 
            user privacy.
          </p>
          <p>
            Subspace is a full-stack social and messaging platform focused on meaningful online interactions and user privacy. Designed to encourage interest-based communities and thoughtful discussions, the platform features a self-hostable, end-to-end encrypted messaging system that gives users full control over their data with minimal reliance on centralized services. The project highlights secure architecture, privacy-first design, and scalable real-time communication.
          </p>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Key Features</h2>
        <div className="projects-grid">
          <article className="project-card">
            <div className="project-placeholder"><span>01</span></div>
            <div className="project-info">
              <h3 className="project-title">Interest Communities</h3>
              <p className="project-description">
                Create and join subspaces based on hobbies, professions, or any shared interest.
              </p>
            </div>
          </article>
          <article className="project-card">
            <div className="project-placeholder"><span>02</span></div>
            <div className="project-info">
              <h3 className="project-title">Real-Time Chat</h3>
              <p className="project-description">
                Instant messaging with community members for live discussions and networking.
              </p>
            </div>
          </article>
          <article className="project-card">
            <div className="project-placeholder"><span>03</span></div>
            <div className="project-info">
              <h3 className="project-title">Content Discovery</h3>
              <p className="project-description">
                Smart feed algorithm that surfaces relevant content based on user preferences.
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
              <li>Redux</li>
              <li>CSS3</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3 className="skill-category-title">Backend</h3>
            <ul className="skill-list">
              <li>Node.js</li>
              <li>Socket.io</li>
              <li>GraphQL</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3 className="skill-category-title">Database</h3>
            <ul className="skill-list">
              <li>MongoDB</li>
              <li>Firebase Auth</li>
              <li>Cloud Storage</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Project Screenshots</h2>
        <div className="screenshots-grid">
          <div className="screenshot-placeholder">Home Feed</div>
          <div className="screenshot-placeholder">Community Page</div>
          <div className="screenshot-placeholder">User Profile</div>
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

export default Subspace
