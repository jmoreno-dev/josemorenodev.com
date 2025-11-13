function TechSkills() {
    return (
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
    )
}

export default TechSkills
