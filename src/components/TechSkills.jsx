import { useTranslation } from 'react-i18next'

function TechSkills() {
    const { t } = useTranslation()

    const skillCategories = [
        {
            id: 'backend',
            icon: '⚙️',
            title: 'skills.backend',
            badges: ['Java', 'Spring Boot', 'PHP', 'Laravel']
        },
        {
            id: 'databases',
            icon: '🗄️',
            title: 'skills.databases',
            badges: ['MySQL', 'PostgreSQL', 'Git & GitHub', 'Bitbucket', 'Docker', 'Kubernetes', 'Azure DevOps']
        },
        {
            id: 'frontend',
            icon: '💻',
            title: 'skills.frontend',
            badges: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'Ionic', 'Thymeleaf']
        },
        {
            id: 'tools',
            icon: '🛠️',
            title: 'skills.tools',
            badges: ['IntelliJ', 'VS Code', 'Postman', 'Jira', 'Confluence']
        },
        {
            id: 'softSkills',
            icon: '🤝',
            title: 'skills.softSkills',
            badges: ['Problem Solving', 'Team Collaboration', 'Communication', 'Adaptability', 'Time Management', 'Analytical Thinking'],
            extraClass: 'full-width'
        }
    ]

    return (
        <section id="skills" className="tech-skills-section">
            <div className="section-container">
                <h2 className="section-title">{t('skills.title')}</h2>
                <p className="section-subtitle">
                    {t('skills.subtitle')}
                </p>
                <div className="tech-grid">
                    {skillCategories.map((category) => (
                        <div key={category.id} className={`tech-card ${category.extraClass || ''}`.trim()}>
                            <div className="tech-icon">{category.icon}</div>
                            <h3 className="tech-card-title">{t(category.title)}</h3>
                            <div className="tech-badges">
                                {category.badges.map((badge, index) => (
                                    <span key={index} className="tech-badge">
                                        {badge}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TechSkills
