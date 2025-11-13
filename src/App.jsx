import './App.css'

function App() {

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span>&lt;/&gt;</span>
            <span className="nav-brand">JAMM Developer</span>
          </div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
          <button className="nav-contact-btn">Contact Me</button>
        </div>
      </nav>

      <main className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">JOSÉ ANTONIO MORENO MARÍN</h1>
            <h2 className="hero-subtitle">Full Stack Developer</h2>
            <p className="hero-description">
              Passionate about technology and software development, focused on
              creating efficient and maintainable solutions. Experienced in the full
              development cycle with a strong ability to learn and adapt.
            </p>
            <div className="hero-buttons">
              <button className="btn-download">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 13L6 9h3V3h2v6h3l-4 4zm-7 4h14v2H3v-2z" fill="currentColor" />
                </svg>
                Download CV
              </button>
              <button className="btn-contact">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 3l1.5 1.5L10 11l6.5-6.5L18 3v12l-8 4-8-4V3z" fill="currentColor" />
                </svg>
                Contact Me
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-circle">
              <img src="https://via.placeholder.com/400x400/5a9c8e/ffffff?text=JM" alt="Profile" />
            </div>
          </div>
        </div>
      </main>

      {/* Professional Profile Section */}
      <section className="profile-section">
        <div className="section-container">
          <h2 className="section-title">Professional Profile</h2>
          <p className="profile-text">
            Full stack developer with experience in Angular, React, Laravel, and Java, currently training
            in React and Spring Boot. I quickly integrate into project and new teams, offering a different
            perspective thanks to my background in physiotherapy. I stand out for my ability to communicate
            complex technical concepts in a clear and accessible way, facilitating collaboration between
            technical and non-technical teams. Always committed to continuous learning and delivering quality
            code, which I now apply to full-stack development.
          </p>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="experience-section">
        <div className="section-container">
          <h2 className="section-title">Work Experience</h2>
          <div className="experience-card">
            <h3 className="experience-title">Full Stack Developer</h3>
            <div className="experience-details">
              <span className="experience-company">📍 Consentio Technologies</span>
              <span className="experience-date">📅 January 2024 - Present</span>
              <span className="experience-location">📍 Madrid, Spain</span>
            </div>
            <ul className="experience-list">
              <li>Development and maintenance of web applications using Angular, Laravel and Java</li>
              <li>Built front-end applications with REST API calls for real-time visualization</li>
              <li>Working in an Agile team with daily standups and bi-weekly sprints</li>
              <li>Collaboration with designers and other developers to create intuitive interfaces</li>
            </ul>
          </div>
        </div>
      </section>

      {/* From Physiotherapy to Code Section */}
      <section className="transition-section">
        <div className="section-container">
          <h2 className="section-title">From Physiotherapy to Code</h2>
          <p className="section-subtitle">
            My journey as a physiotherapist has shaped me with a unique set of soft skills that are
            highly valuable in the corporate software development world.
          </p>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon">🧩</div>
              <h3 className="skill-card-title">Analytical & Problem-Solving</h3>
              <p className="skill-card-text">
                In physiotherapy, I developed diagnostic skills to identify problems, develop treatment
                plans, and assess progress. Similarly, I use these skills to debug code, analyze system
                requirements and design effective solutions.
              </p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">🎓</div>
              <h3 className="skill-card-title">Interdisciplinary Collaboration</h3>
              <p className="skill-card-text">
                Worked as part of multidisciplinary healthcare teams, requiring effective communication,
                collaboration and multitasking. This prepared me to work in software development teams
                with diverse roles and backgrounds.
              </p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">⚙️</div>
              <h3 className="skill-card-title">Process & Data Management</h3>
              <p className="skill-card-text">
                Managed patient records, scheduled appointments, tracked progress, and handled billing.
                Developed strong organizational skills that translate to software project management,
                version control, and documentation.
              </p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">🎯</div>
              <h3 className="skill-card-title">Technical & Logical Aptitude</h3>
              <p className="skill-card-text">
                Managed treatment equipment, followed detailed protocols, and applied scientific methods.
                These skills easily transferred to programming, working with APIs, debugging code, and
                following software architecture.
              </p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">📚</div>
              <h3 className="skill-card-title">Commitment to Continuous Learning</h3>
              <p className="skill-card-text">
                Physiotherapy required staying up to date on the latest methods and certifications.
                In software development, I maintain this same commitment to continuous learning amidst a
                constantly evolving technological landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical and Soft Skills Section */}
      <section className="tech-skills-section">
        <div className="section-container">
          <h2 className="section-title">Technical and Soft Skills</h2>
          <p className="section-subtitle">
            A summary of my technological, tools, and competencies I work with.
          </p>
          <div className="tech-grid">
            <div className="tech-card">
              <div className="tech-icon">💻</div>
              <h3 className="tech-card-title">Frontend</h3>
              <div className="tech-badges">
                <span className="tech-badge">Angular</span>
                <span className="tech-badge">React</span>
                <span className="tech-badge">TypeScript</span>
                <span className="tech-badge">HTML5</span>
                <span className="tech-badge">CSS3</span>
                <span className="tech-badge">JavaScript</span>
              </div>
              <div className="tech-learning">
                <p>🌱 Currently</p>
                <div className="learning-badges">
                  <span className="learning-badge">Next.js</span>
                  <span className="learning-badge">Tailwind</span>
                </div>
              </div>
            </div>

            <div className="tech-card">
              <div className="tech-icon">⚙️</div>
              <h3 className="tech-card-title">Backend</h3>
              <div className="tech-badges">
                <span className="tech-badge">Java</span>
                <span className="tech-badge">Laravel</span>
                <span className="tech-badge">PHP</span>
                <span className="tech-badge">Node.js</span>
              </div>
              <div className="tech-learning">
                <p>🌱 Currently</p>
                <div className="learning-badges">
                  <span className="learning-badge">Spring Boot</span>
                  <span className="learning-badge">Nest.js</span>
                </div>
              </div>
            </div>

            <div className="tech-card">
              <div className="tech-icon">🗄️</div>
              <h3 className="tech-card-title">Databases & DevOps</h3>
              <div className="tech-badges">
                <span className="tech-badge">MySQL</span>
                <span className="tech-badge">PostgreSQL</span>
                <span className="tech-badge">Git & GitHub</span>
                <span className="tech-badge">Bitbucket</span>
                <span className="tech-badge">Docker</span>
              </div>
            </div>

            <div className="tech-card">
              <div className="tech-icon">🛠️</div>
              <h3 className="tech-card-title">Tools & Methodologies</h3>
              <div className="tech-badges">
                <span className="tech-badge">Figma</span>
                <span className="tech-badge">IntelliJ</span>
                <span className="tech-badge">VS Code</span>
                <span className="tech-badge">Postman</span>
                <span className="tech-badge">Microsoft Teams</span>
                <span className="tech-badge">Jira</span>
              </div>
            </div>

            <div className="tech-card full-width">
              <div className="tech-icon">🤝</div>
              <h3 className="tech-card-title">Soft Skills</h3>
              <div className="tech-badges">
                <span className="tech-badge">Problem Solving</span>
                <span className="tech-badge">Team Collaboration</span>
                <span className="tech-badge">Communication</span>
                <span className="tech-badge">Adaptability</span>
                <span className="tech-badge">Time Management</span>
                <span className="tech-badge">Analytical Thinking</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Projects Section */}
      <section className="projects-section">
        <div className="section-container">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">
            Here are some projects I've worked on. Feel free to explore them.
          </p>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop" alt="Gym Management App" />
              </div>
              <div className="project-content">
                <h3 className="project-title">Gym Management App (Final Project)</h3>
                <p className="project-description">
                  Frontend development in React from Figma prototypes. Backend with Java and Spring Boot (REST). Architecture and design with UML, diagrams, and Mockups.
                </p>
                <div className="project-badges">
                  <span className="project-badge">React</span>
                  <span className="project-badge">Java</span>
                  <span className="project-badge">Spring Boot</span>
                  <span className="project-badge">MySQL</span>
                  <span className="project-badge">Figma</span>
                  <span className="project-badge">GitHub</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop" alt="Mobile Apps for Xerintel" />
              </div>
              <div className="project-content">
                <h3 className="project-title">Mobile Apps for Xerintel</h3>
                <p className="project-description">
                  Development of mobile applications with Ionic and Angular, based on Adobe XD and Figma designs. Business logic and RESTful APIs with Laravel and MySQL.
                </p>
                <div className="project-badges">
                  <span className="project-badge">Ionic</span>
                  <span className="project-badge">Angular</span>
                  <span className="project-badge">TypeScript</span>
                  <span className="project-badge">Laravel</span>
                  <span className="project-badge">PHP</span>
                  <span className="project-badge">MySQL</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop" alt="Full Stack Projects" />
              </div>
              <div className="project-content">
                <h3 className="project-title">Full Stack Projects (Bootcamp)</h3>
                <p className="project-description">
                  Complete applications with JavaScript, TypeScript, React, Node.js. Deployment on Vercel, Render and Docker.
                </p>
                <div className="project-badges">
                  <span className="project-badge">React</span>
                  <span className="project-badge">Node.js</span>
                  <span className="project-badge">PostgreSQL</span>
                  <span className="project-badge">MongoDB</span>
                  <span className="project-badge">Docker</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="contact-section">
        <div className="section-container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2 className="section-title left-align">Get in Touch</h2>
              <p className="contact-text">
                I'm currently open to new opportunities. If you have a project in mind, a question, or
                just want to say hello, my inbox is always open.
              </p>
              <p className="contact-text">
                Fill out the form and I'll get back to you as soon as possible.
              </p>
            </div>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="your.email@example.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" placeholder="Tell me about your project or opportunity..." required></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <p className="footer-text">
            <span>&lt;/&gt;</span> © 2025 JOSÉ ANTONIO MORENO MARÍN. All rights reserved.
          </p>
          <div className="footer-links">
            <a href="#" className="footer-link" aria-label="GitHub">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a href="#" className="footer-link" aria-label="LinkedIn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
