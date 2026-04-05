import { useState } from 'react'
import './App.css'
import Echo from './assets/Pages/ECHO'
import MentalHealthApp from './assets/Pages/MentalHealthApp'
import Subspace from './assets/Pages/Subspace'
import EchoLogo from './assets/echo-logo.svg'
import MentalHealthLogo from './assets/mental-health-logo.svg'
import SubspaceLogo from './assets/subspace-logo.svg'

const projects = [
  {
    title: "ECHO",
    description: "a project designed to help people having Dementia.",
    tags: ["React", "Node.js", "MongoDB"],
    link: "/echo",
    logo: EchoLogo
  },
  {
    title: "Mental Health App",
    description: "a project designed to help people check their vitals and mental health and suggesting them with the best possible solutions.",
    tags: ["TypeScript", "Next.js", "PostgreSQL"],
    link: "/MentalHealthApp",
    logo: MentalHealthLogo
  },
  {
    title: "Subspace",
    description: "a project designed to help people connect with each other and share their thoughts and ideas.",
    tags: ["React", "API Integration", "CSS3"],
    link: "/Subspace",
    logo: SubspaceLogo
  }
]

const skills = [
  { category: "Frontend", items: ["React", "TypeScript", "Next.js", "HTML/CSS", "Tailwind"] },
  { category: "Backend", items: ["Node.js", "Python", "Express", "REST APIs"] },
  { category: "Database", items: ["MongoDB", "PostgreSQL", "Firebase", "Redis"] },
  { category: "Tools", items: ["Git", "Docker", "AWS", "Figma"] }
]

function App() {
  const [currentPage, setCurrentPage] = useState('/')

  if (currentPage === '/echo') {
    return <Echo />
  }
  if (currentPage === '/MentalHealthApp') {
    return <MentalHealthApp />
  }
  if (currentPage === '/Subspace') {
    return <Subspace />
  }

  return (
    <div className="app">
      <header className="header">
        <nav className="nav">
          <a href="#" className="logo">KVC.dev</a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">Kalprajsinh Chudasama</h1>
          <p className="hero-title">Full Stack Developer</p>
          <p className="hero-description">
            I build exceptional digital experiences that are fast, accessible, 
            visually compelling, and user-friendly.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </section>

        <section id="about" className="section">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <p>
              I'm a passionate Full Stack Developer with a keen eye for detail 
              and a love for creating seamless user experiences. With expertise in 
              modern web technologies, I transform complex problems into elegant, 
              intuitive solutions.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, 
              contributing to open-source projects, or sharing knowledge with 
              the developer community. I believe in writing clean, maintainable 
              code that makes a difference.
            </p>
          </div>
        </section>

        <section id="projects" className="section">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">A selection of my recent work</p>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <article key={index} className="project-card">
                <div className="project-logo">
                  <img src={project.logo} alt={project.title} />
                </div>
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="tag">{tag}</span>
                    ))}
                  </div>
                  <button 
                    onClick={() => setCurrentPage(project.link)} 
                    className="project-link"
                  >
                    View Project →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">The tools I use to bring products to life</p>
          <div className="skills-grid">
            {skills.map((skillGroup, index) => (
              <div key={index} className="skill-category">
                <h3 className="skill-category-title">{skillGroup.category}</h3>
                <ul className="skill-list">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <li key={skillIndex}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Have a project in mind? Let's work together.</p>
          <div className="contact-content">
            <a href="mailto:kvchudasama03@gmail.com" className="contact-email">
              kvchudasama03@gmail.com
            </a>
            <div className="social-links">
              <a href="https://github.com/Kalprajsinh-V-Chudasama" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/kalprajsinh-chudasama-63989139b?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://x.com/Kalprajsinh_C" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Designed & Built by Kalprajsinh Chudasama</p>
        <p className="copyright">© {new Date().getFullYear()} All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
