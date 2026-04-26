import { useTranslation } from 'react-i18next'

function Projects() {
    const { t } = useTranslation()

    const projectsList = [
        {
            id: 'training-api',
            image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
            titleKey: 'projects.project4Title',
            descKey: 'projects.project4Description',
            badges: ['Java 21', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'Docker', 'JUnit 5', 'Mockito', 'Flyway', 'Swagger', 'AWS'],
            githubLink: 'https://github.com/jmoreno-dev/training-api'
        },
        {
            id: 'product-manager',
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
            titleKey: 'projects.project3Title',
            descKey: 'projects.project3Description',
            badges: ['Java', 'Spring Boot', 'MySQL', 'Swagger'],
            githubLink: 'https://github.com/jmoreno-dev/product-manager'
        }
    ]

    return (
        <section id="projects" className="projects-section">
            <div className="section-container">
                <h2 className="section-title">{t('projects.title')}</h2>
                <p className="section-subtitle">
                    {t('projects.subtitle')}
                </p>
                <div className="projects-grid">
                    {projectsList.map((project) => (
                        <div key={project.id} className="project-card">
                            <div className="project-image">
                                <img src={project.image} alt={t(project.titleKey)} />
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{t(project.titleKey)}</h3>
                                <p className="project-description">
                                    {t(project.descKey)}
                                </p>
                                <div className="project-badges">
                                    {project.badges.map((badge, index) => (
                                        <span key={index} className="project-badge">{badge}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                                        <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" /></svg>
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
