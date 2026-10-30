import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import esTranslations from './locales/es.json'
import enTranslations from './locales/en.json'

// Detectar idioma del navegador
const getBrowserLanguage = () => {
    try {
        const savedLanguage = localStorage.getItem('portfolio-language')
        if (savedLanguage === 'es' || savedLanguage === 'en') return savedLanguage
    } catch { /* Storage may be unavailable in private browsing. */ }
    const browserLang = navigator.language || navigator.userLanguage
    // Si el navegador está en español, usar 'es', si no usar 'en'
    return browserLang.startsWith('es') ? 'es' : 'en'
}

i18n
    .use(initReactI18next)
    .init({
        resources: {
            es: { translation: esTranslations },
            en: { translation: enTranslations }
        },
        lng: getBrowserLanguage(), // Detecta el idioma del navegador automáticamente
        fallbackLng: 'en', // Si no hay traducción, usa inglés
        interpolation: {
            escapeValue: false // React ya protege contra XSS
        }
    })

const syncLanguage = (language) => {
    const lang = language.startsWith('es') ? 'es' : 'en'
    document.documentElement.lang = lang
    document.title = i18n.t('seo.title')
    const description = i18n.t('seo.description')
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description)
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', description)
    document.querySelector('meta[property="og:locale"]')?.setAttribute('content', lang === 'es' ? 'es_ES' : 'en_GB')
    try {
        localStorage.setItem('portfolio-language', lang)
    } catch { /* Language switching still works without storage. */ }
}
i18n.on('languageChanged', syncLanguage)
syncLanguage(i18n.language)

export default i18n
