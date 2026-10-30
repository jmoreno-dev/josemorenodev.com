import { useTranslation } from 'react-i18next'

function Hero() {
    const { t } = useTranslation()
    return (
        <section id="home" className="hero-section" aria-labelledby="hero-title">
            <div className="hero-container">
                <div className="hero-content">
                    <p className="hero-eyebrow">José Antonio Moreno Marín</p>
                    <h1 id="hero-title" className="hero-title">{t('hero.title')}</h1>
                    <p className="hero-subtitle">{t('hero.subtitle')}</p>
                    <p className="hero-description">{t('hero.description')}</p>
                    <div className="hero-buttons">
                        <a href="#projects" className="btn-download">{t('hero.viewProjects')} <span aria-hidden="true">↗</span></a>
                        <a href="#contact" className="btn-contact">{t('hero.contactMe')}</a>
                    </div>
                    <a href="/CV_Jose_Antonio_Moreno_Marin_06-26.pdf" download className="cv-link">{t('hero.downloadCV')} <span aria-hidden="true">↓</span></a>
                </div>
                <div className="hero-image">
                    <div className="profile-circle">
                        <img src="/foto-cv-25.jpg" alt="José Antonio Moreno Marín" width="400" height="400" fetchPriority="high" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero
