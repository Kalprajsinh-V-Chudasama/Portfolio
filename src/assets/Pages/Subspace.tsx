import '../../App.css'
import SubspaceFeed from '../../assets/subspace-feed.svg'
import SubspaceCommunity from '../../assets/subspace-community.svg'
import SubspaceProfile from '../../assets/subspace-profile.svg'

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
            <div className="feature-icon" style={{background: 'linear-gradient(135deg, #7b68ee20, #7b68ee40)'}}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#7b68ee" stroke-width="2">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 00-3-3.87"/>
                <path d="M16 3.13a4 4 0 010 7.75"/>
              </svg>
            </div>
            <div className="project-info">
              <h3 className="project-title">Interest Communities</h3>
              <p className="project-description">
                Create and join subspaces based on hobbies, professions, or any shared interest.
              </p>
            </div>
          </article>
          <article className="project-card">
            <div className="feature-icon" style={{background: 'linear-gradient(135deg, #7b68ee20, #7b68ee40)'}}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#7b68ee" stroke-width="2">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
              </svg>
            </div>
            <div className="project-info">
              <h3 className="project-title">Real-Time Chat</h3>
              <p className="project-description">
                Instant messaging with community members for live discussions and networking.
              </p>
            </div>
          </article>
          <article className="project-card">
            <div className="feature-icon" style={{background: 'linear-gradient(135deg, #7b68ee20, #7b68ee40)'}}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#7b68ee" stroke-width="2">
                <polygon points="12 2 2 7 12 12 22 7 12 2"/>
                <polyline points="2 17 12 22 22 17"/>
                <polyline points="2 12 12 17 22 12"/>
              </svg>
            </div>
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
          <div className="screenshot-image">
            <img src={SubspaceFeed} alt="Home Feed" />
            <span className="screenshot-label">Home Feed</span>
          </div>
          <div className="screenshot-image">
            <img src={SubspaceCommunity} alt="Community Page" />
            <span className="screenshot-label">Community Page</span>
          </div>
          <div className="screenshot-image">
            <img src={SubspaceProfile} alt="User Profile" />
            <span className="screenshot-label">User Profile</span>
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

export default Subspace
