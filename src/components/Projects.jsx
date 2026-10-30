import { useTranslation } from 'react-i18next'

function GitHubIcon() {
    return (
        <svg aria-hidden="true" focusable="false" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" /></svg>
    )
}

function Projects() {
    const { t } = useTranslation()

    const projectsList = [
        {
            id: 'semana-santa-api',
            inProgress: true,
            visual: 'routes',
            diagram: ['Caffeine / ETags', 'Spring Boot', 'PostgreSQL'],
            decisionKey: 'projects.project5Decision',
            titleKey: 'projects.project5Title',
            descKey: 'projects.project5Description',
            badges: ['Java 25', 'Spring Boot 4', 'PostgreSQL', 'Caffeine'],
        },
        {
            id: 'semana-santa-app',
            visual: 'mobile',
            category: 'MOBILE / FRONTEND',
            diagram: ['React Native / Expo', 'MMKV', 'REST API'],
            decisionKey: 'projects.holyWeekAppDecision',
            titleKey: 'projects.holyWeekAppTitle',
            descKey: 'projects.holyWeekAppDescription',
            badges: ['React Native', 'Expo', 'TypeScript', 'MMKV'],
            inProgress: true,
        },
        {
            id: 'training-api',
            visual: 'training',
            diagram: ['REST API', 'Domain + Tests', 'PostgreSQL'],
            decisionKey: 'projects.project4Decision',
            titleKey: 'projects.project4Title',
            descKey: 'projects.project4Description',
            badges: ['Java 21', 'Spring Boot 4', 'JUnit 5', 'PostgreSQL'],
            githubLink: 'https://github.com/jmoreno-dev/training-api'
        },
        {
            id: 'product-manager',
            visual: 'products',
            diagram: ['Swagger', 'Spring Boot', 'MySQL'],
            decisionKey: 'projects.project3Decision',
            titleKey: 'projects.project3Title',
            descKey: 'projects.project3Description',
            badges: ['Java 17', 'Spring Boot 3', 'MySQL', 'Swagger'],
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
                    {projectsList.map((project, projectIndex) => (
                        <article key={project.id} className="project-card">
                            <div className={`project-diagram ${project.visual}`} aria-hidden="true">
                                <span className="diagram-label">{String(projectIndex + 1).padStart(2, '0')} / {project.category || 'BACKEND'}</span>
                                <div className="diagram-flow">{project.diagram.map((node) => <span key={node}>{node}</span>)}</div>
                            </div>
                            <div className="project-content">
                                {project.inProgress && <span className="project-status">{t('projects.inProgress')}</span>}
                                <h3 className="project-title">{t(project.titleKey)}</h3>
                                <p className="project-description">
                                    {t(project.descKey)}
                                </p>
                                <p className="project-decision"><strong>{t('projects.decision')}</strong>{t(project.decisionKey)}</p>
                                <div className="project-badges">
                                    {project.badges.map((badge, index) => (
                                        <span key={index} className="project-badge">{badge}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    {project.githubLink ? <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                                        <GitHubIcon />
                                        {t('projects.source')}
                                    </a> : <span className="project-unavailable"><GitHubIcon />{t('projects.private')}</span>}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
