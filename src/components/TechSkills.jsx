import { useTranslation } from 'react-i18next'
import './TechSkills.css'

const categories = [
    {
        id: 'backend', symbol: '</>', featured: true,
        groups: [
            { context: 'work', technologies: ['Java', 'Spring Boot', 'APIs REST', 'Microservices', 'Maven'] },
            { context: 'previous', technologies: ['PHP', 'Laravel'] },
        ],
    },
    {
        id: 'databases', symbol: 'SQL',
        groups: [
            { context: 'work', technologies: ['MySQL'] },
            { context: 'projects', technologies: ['PostgreSQL'] },
        ],
    },
    {
        id: 'testing', symbol: '✓',
        groups: [
            { context: 'projects', technologies: ['JUnit', 'Mockito', 'Jest', 'Testing Library'] },
        ],
    },
    {
        id: 'frontend', symbol: '{ }',
        groups: [
            { context: 'current', technologies: ['Thymeleaf', 'JavaScript'] },
            { context: 'previous', technologies: ['Angular', 'TypeScript', 'Ionic', 'React Native'] },
        ],
    },
    {
        id: 'devops', symbol: '>_',
        groups: [
            { context: 'work', technologies: ['Docker', 'Kubernetes', 'Git', 'Bitbucket', 'Azure DevOps'] },
            { context: 'projects', technologies: ['GitHub Actions'] },
        ],
    },
]

function TechSkills() {
    const { t } = useTranslation()
    const technologyLabel = (name) => {
        if (name === 'Microservices') return t('skills.microservices')
        if (name === 'APIs REST') return t('skills.restApis')
        return name
    }

    return (
        <section id="skills" className="skills-section" aria-labelledby="skills-title">
            <div className="section-container">
                <h2 id="skills-title" className="section-title">{t('skills.title')}</h2>
                <p className="section-subtitle">{t('skills.subtitle')}</p>
                <div className="skills-layout">
                    {categories.map(({ id, symbol, featured, groups }) => (
                        <article key={id} className={`skills-category${featured ? ' skills-featured' : ''}`}>
                            <div className="skills-category-heading">
                                <span className="skills-symbol" aria-hidden="true">{symbol}</span>
                                {featured && <span className="skills-specialty">{t('skills.specialty')}</span>}
                            </div>
                            <h3>{t(`skills.${id}`)}</h3>
                            <p className="skills-description">{t(`skills.${id}Description`)}</p>
                            <div className="skills-groups">
                                {groups.map(({ context, technologies }) => (
                                    <div className="skills-group" key={context}>
                                        <p className="skills-context">{t(`skills.context.${context}`)}</p>
                                        <ul className="skills-technologies">
                                            {technologies.map((name) => <li key={name}>{technologyLabel(name)}</li>)}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                            {featured && <a className="skills-experience-link" href="#experience">{t('skills.viewExperience')} <span aria-hidden="true">↗</span></a>}
                        </article>
                    ))}
                </div>
                <p className="skills-evidence">{t('skills.evidence')} <a href="#projects">{t('skills.viewProjects')} <span aria-hidden="true">↗</span></a></p>
            </div>
        </section>
    )
}

export default TechSkills
