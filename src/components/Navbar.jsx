import { useState } from 'react'
import { useTranslation } from 'react-i18next'

function Navbar() {
    const { t, i18n } = useTranslation()
    const [isOpen, setIsOpen] = useState(false)
    const language = i18n.resolvedLanguage || 'es'
    const closeMenu = () => setIsOpen(false)
    return (
        <nav className="navbar" aria-label={t('nav.label')} onKeyDown={(event) => {
            if (event.key === 'Escape') {
                closeMenu()
                document.getElementById('menu-toggle')?.focus()
            }
        }}>
            <div className="nav-container">
                <a className="nav-logo" href="#home" onClick={closeMenu}>
                    <span aria-hidden="true">&lt;/&gt;</span>
                    <span className="nav-brand">josemorenodev</span>
                </a>
                <button id="menu-toggle" className="menu-toggle" aria-expanded={isOpen} aria-controls="nav-links" onClick={() => setIsOpen(!isOpen)}>{t(isOpen ? 'nav.closeMenu' : 'nav.openMenu')}</button>
                <ul id="nav-links" className={`nav-links ${isOpen ? 'is-open' : ''}`}>
                    {['projects', 'experience', 'skills', 'about', 'youtube'].map((section) => (
                        <li key={section}><a href={`#${section}`} onClick={closeMenu}>{t(`nav.${section}`)}</a></li>
                    ))}
                </ul>
                <div className="nav-actions">
                    <button onClick={() => i18n.changeLanguage(language === 'es' ? 'en' : 'es')} className="lang-toggle" aria-label={t('nav.changeLanguage')}>
                        {language === 'es' ? 'EN' : 'ES'}
                    </button>
                    <a href="#contact" className="nav-contact-btn" onClick={closeMenu}>{t('nav.contactBtn')}</a>
                </div>
            </div>
        </nav>
    )
}
export default Navbar
