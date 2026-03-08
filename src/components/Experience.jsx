import { useTranslation } from 'react-i18next'

function Experience() {
    const { t, i18n } = useTranslation()
    const currentLang = i18n.language
    const responsibilities = t(`experience.responsibilities`, { returnObjects: true })

    return (
        <section id="experience" className="experience-section">
            <div className="section-container">
                <h2 className="section-title">{t('experience.title')}</h2>
                <div className="experience-card">
                    <h3 className="experience-title">{t('experience.jobTitle')}</h3>
                    <div className="experience-details">
                        <span className="experience-company">🏢 {t('experience.company')}</span>
                        <span className="experience-date">📅 {t('experience.date')}</span>
                        <span className="experience-location">📍 {t('experience.location')}</span>
                    </div>
                    <ul className="experience-list">
                        {Array.isArray(responsibilities) && responsibilities.map((responsibility, index) => (
                            <li key={index}>{responsibility}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Experience
