import { useTranslation } from 'react-i18next'

function Navbar() {
    const { t, i18n } = useTranslation()

    const toggleLanguage = () => {
        const newLang = i18n.language === 'es' ? 'en' : 'es'
        i18n.changeLanguage(newLang)
    }

    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="nav-logo">
                    <span>&lt;/&gt;</span>
                    <span className="nav-brand">josemorenodev</span>
                </div>
                <ul className="nav-links">
                    <li><a href="#about">{t('nav.about')}</a></li>
                    <li><a href="#experience">{t('nav.experience')}</a></li>
                    <li><a href="#skills">{t('nav.skills')}</a></li>
                    <li><a href="#projects">{t('nav.projects')}</a></li>
                </ul>
                <div className="nav-actions">
                    <button
                        onClick={toggleLanguage}
                        className="lang-toggle"
                        title={`Cambiar a ${i18n.language === 'es' ? 'English' : 'Español'}`}
                    >
                        {i18n.language === 'es' ? '🇬🇧 EN' : '🇪🇸 ES'}
                    </button>
                    <a href="#contact" className="nav-contact-btn">{t('nav.contactBtn')}</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
