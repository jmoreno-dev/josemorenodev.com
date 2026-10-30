import { Trans, useTranslation } from 'react-i18next'
import './Experience.css'

function Experience() {
    const { t } = useTranslation()
    const experienceItems = t('experience.items', { returnObjects: true })

    return (
        <section id="experience" className="work-section" aria-labelledby="experience-title">
            <div className="section-container">
                <h2 id="experience-title" className="section-title">{t('experience.title')}</h2>
                <p className="section-subtitle">{t('experience.subtitle')}</p>
                <ol className="work-history">
                    {Array.isArray(experienceItems) && experienceItems.map((item, index) => (
                        <li key={`${item.company}-${index}`}>
                        <article className={`work-card${item.current ? ' work-current' : ''}`} aria-labelledby={`work-company-${index}`}>
                            <header className="work-header">
                                {item.current && <span className="work-current-label"><span aria-hidden="true" />{t('experience.current')}</span>}
                                <h3 id={`work-company-${index}`}>{item.company}</h3>
                                <p className="work-role">{item.jobTitle}</p>
                                <div className="work-meta">
                                    <p>{item.date}</p>
                                    <p>{item.location}</p>
                                </div>
                                <p className="work-focus">{item.focus}</p>
                            </header>
                            <ul className="work-responsibilities">
                                {Array.isArray(item.responsibilities) && item.responsibilities.map((responsibility, responsibilityIndex) => (
                                    <li key={`${index}-${responsibilityIndex}`}>
                                        <Trans
                                            i18nKey={`experience.items.${index}.responsibilities.${responsibilityIndex}`}
                                            defaults={responsibility}
                                            components={{ strong: <strong />, em: <em /> }}
                                        />
                                    </li>
                            ))}
                        </ul>
                    </article>
                    </li>
                    ))}
                </ol>
            </div>
        </section>
    )
}

export default Experience
