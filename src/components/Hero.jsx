import { useTranslation } from 'react-i18next'

function Hero() {
    const { t } = useTranslation()

    return (
        <main className="hero-section">
            <div className="hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">{t('hero.title')}</h1>
                    <h2 className="hero-subtitle">{t('hero.subtitle')}</h2>
                    <p className="hero-description">
                        {t('hero.description')}
                    </p>
                    <div className="hero-buttons">
                        <a href="/Jose_Antonio_Moreno_Marin_03-26 (ES).pdf" download className="btn-download">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path fill="currentColor" d="M10 13 6 9h3V3h2v6h3zm-7 4h14v2H3z" /></svg>
                            {t('hero.downloadCV')}
                        </a>
                        <button className="btn-contact">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path fill="currentColor" d="m2 3 1.5 1.5L10 11l6.5-6.5L18 3v12l-8 4-8-4z" /></svg>
                            <a href="#contact">{t('hero.contactMe')}</a>
                        </button>
                    </div>
                </div>
                <div className="hero-image">
                    <div className="profile-circle">
                        <img src="/foto-cv-25.jpg" alt="Profile" />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Hero
