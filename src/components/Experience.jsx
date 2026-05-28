import { useTranslation } from 'react-i18next'

function Experience() {
    const { t } = useTranslation()
    const experienceItems = t('experience.items', { returnObjects: true })

    return (
        <section id="experience" className="experience-section">
            <div className="section-container">
                <h2 className="section-title">{t('experience.title')}</h2>
                {Array.isArray(experienceItems) && experienceItems.map((item, index) => (
                    <div key={`${item.company}-${index}`} className="experience-card">
                        <h3 className="experience-title">{item.jobTitle}</h3>
                        <div className="experience-details">
                            <span className="experience-company">🏢 {item.company}</span>
                            <span className="experience-date">📅 {item.date}</span>
                            <span className="experience-location">📍 {item.location}</span>
                        </div>
                        <ul className="experience-list">
                            {Array.isArray(item.responsibilities) && item.responsibilities.map((responsibility, responsibilityIndex) => (
                                <li key={`${index}-${responsibilityIndex}`}>{responsibility}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Experience
