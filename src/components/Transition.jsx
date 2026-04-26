import { useTranslation } from 'react-i18next'

function Transition() {
    const { t } = useTranslation()

    const transitionCards = [
        { id: 1, icon: "🧩", title: 'transition.card1Title', text: 'transition.card1Text' },
        { id: 2, icon: "👥", title: 'transition.card2Title', text: 'transition.card2Text' },
        { id: 3, icon: "⚙️", title: 'transition.card3Title', text: 'transition.card3Text' },
        { id: 4, icon: "🎯", title: 'transition.card4Title', text: 'transition.card4Text' },
        { id: 5, icon: "📚", title: 'transition.card5Title', text: 'transition.card5Text' }
    ]

    return (
        <section className="transition-section">
            <div className="section-container">
                <h2 className="section-title">{t('transition.title')}</h2>
                <p className="section-subtitle">
                    {t('transition.subtitle')}
                </p>
                <div className="skills-grid">
                    {transitionCards.map((card) => (
                        <div key={card.id} className="skill-card">
                            <div className="skill-icon">{card.icon}</div>
                            <h3 className="skill-card-title">{t(card.title)}</h3>
                            <p className="skill-card-text">
                                {t(card.text)}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Transition
