import { useTranslation } from 'react-i18next'

function TechSkills() {
    const { t } = useTranslation()

    return (
        <section id="skills" className="tech-skills-section">
            <div className="section-container">
                <h2 className="section-title">{t('skills.title')}</h2>
                <p className="section-subtitle">
                    {t('skills.subtitle')}
                </p>
                <div className="tech-grid">
                    <div className="tech-card">
                        <div className="tech-icon">💻</div>
                        <h3 className="tech-card-title">{t('skills.frontend')}</h3>
                        <div className="tech-badges">
                            <span className="tech-badge">Angular</span>
                            <span className="tech-badge">TypeScript</span>
                            <span className="tech-badge">HTML5</span>
                            <span className="tech-badge">CSS3</span>
                            <span className="tech-badge">Ionic</span>

                        </div>
                    </div>

                    <div className="tech-card">
                        <div className="tech-icon">⚙️</div>
                        <h3 className="tech-card-title">{t('skills.backend')}</h3>
                        <div className="tech-badges">
                            <span className="tech-badge">Java</span>
                            <span className="tech-badge">Spring Boot</span>
                            <span className="tech-badge">PHP</span>
                            <span className="tech-badge">Laravel</span>
                        </div>
                    </div>

                    <div className="tech-card">
                        <div className="tech-icon">🗄️</div>
                        <h3 className="tech-card-title">{t('skills.databases')}</h3>
                        <div className="tech-badges">
                            <span className="tech-badge">MySQL</span>
                            <span className="tech-badge">Git & GitHub</span>
                            <span className="tech-badge">Bitbucket</span>
                            <span className="tech-badge">Docker</span>
                        </div>
                    </div>

                    <div className="tech-card">
                        <div className="tech-icon">🛠️</div>
                        <h3 className="tech-card-title">{t('skills.tools')}</h3>
                        <div className="tech-badges">
                            <span className="tech-badge">Figma</span>
                            <span className="tech-badge">IntelliJ</span>
                            <span className="tech-badge">Android Studio</span>
                            <span className="tech-badge">VS Code</span>
                            <span className="tech-badge">Postman</span>
                            <span className="tech-badge">Microsoft Teams</span>
                            <span className="tech-badge">Jira</span>
                        </div>
                    </div>

                    <div className="tech-card full-width">
                        <div className="tech-icon">🤝</div>
                        <h3 className="tech-card-title">{t('skills.softSkills')}</h3>
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
