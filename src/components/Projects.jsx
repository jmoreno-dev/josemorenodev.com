function Projects() {
    return (
        <section id="projects" className="projects-section">
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
                            <h3 className="project-title">My GitHub profile</h3>
                            <p className="project-description">
                                Collection of personal projects and coding experiments showcasing different technologies and programming concepts. From small utilities to full-stack applications (incoming), exploring new frameworks and best practices.
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
                                <a href="https://github.com/jmoreno-dev" target="_blank" rel="noopener noreferrer" className="project-link">
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
                                Development of mobile applications with Ionic, Angular and TypeScript, based on Adobe XD and Figma designs. Business logic and RESTful APIs with Laravel and MySQL.
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
    )
}

export default Projects
