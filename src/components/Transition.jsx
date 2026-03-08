import { useTranslation } from 'react-i18next'

function Transition() {
    const { t } = useTranslation()

    return (
        <section className="transition-section">
            <div className="section-container">
                <h2 className="section-title">{t('transition.title')}</h2>
                <p className="section-subtitle">
                    {t('transition.subtitle')}
                </p>
                <div className="skills-grid">
                    <div className="skill-card">
                        <div className="skill-icon">🧩</div>
                        <h3 className="skill-card-title">{t('transition.card1Title')}</h3>
                        <p className="skill-card-text">
                            {t('transition.card1Text')}
                        </p>
                    </div>
                    <div className="skill-card">
                        <div className="skill-icon">🎓</div>
                        <h3 className="skill-card-title">{t('transition.card2Title')}</h3>
                        <p className="skill-card-text">
                            {t('transition.card2Text')}
                        </p>
                    </div>
                    <div className="skill-card">
                        <div className="skill-icon">⚙️</div>
                        <h3 className="skill-card-title">{t('transition.card3Title')}</h3>
                        <p className="skill-card-text">
                            {t('transition.card3Text')}
                        </p>
                    </div>
                    <div className="skill-card">
                        <div className="skill-icon">🎯</div>
                        <h3 className="skill-card-title">{t('transition.card4Title')}</h3>
                        <p className="skill-card-text">
                            {t('transition.card4Text')}
                        </p>
                    </div>
                    <div className="skill-card">
                        <div className="skill-icon">📚</div>
                        <h3 className="skill-card-title">{t('transition.card5Title')}</h3>
                        <p className="skill-card-text">
                            {t('transition.card5Text')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Transition
