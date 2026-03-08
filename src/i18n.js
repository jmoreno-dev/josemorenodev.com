import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import esTranslations from './locales/es.json'
import enTranslations from './locales/en.json'

// Detectar idioma del navegador
const getBrowserLanguage = () => {
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

export default i18n
