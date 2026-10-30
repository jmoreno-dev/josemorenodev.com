import { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import emailjs from '@emailjs/browser'
const SERVICE_ID = import.meta.env.VITE_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY
const isConfigured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY)

function Contact() {
    const form = useRef()
    const [isSending, setIsSending] = useState(false)
    const [status, setStatus] = useState('')
    const { t } = useTranslation()

    const sendEmail = async (e) => {
        e.preventDefault()
        if (isSending || !isConfigured) return
        setIsSending(true)
        setStatus('')

        try {
            await emailjs.sendForm(
                SERVICE_ID,
                TEMPLATE_ID,
                form.current,
                PUBLIC_KEY
            )
            setStatus('success')
            form.current.reset()
        } catch {
            setStatus('error')
        } finally {
            setIsSending(false)
        }
    }

    return (
        <section id="contact" className="contact-section">
            <div className="section-container">
                <div className="contact-grid">
                    <div className="contact-info">
                        <h2 className="section-title left-align">{t('contact.title')}</h2>
                        <p className="contact-text">
                            {t('contact.subtitle')}
                        </p>
                        <p className="contact-text">
                            {t('contact.text')}
                        </p>
                        <a className="contact-direct" href="https://www.linkedin.com/in/joseantonio-morenomarin/" target="_blank" rel="noopener noreferrer">{t('contact.direct')} <span aria-hidden="true">↗</span></a>
                    </div>
                    <form className="contact-form" ref={form} onSubmit={sendEmail} aria-busy={isSending}>
                        <div className="form-group">
                            <label htmlFor="name">{t('contact.name')}</label>
                            <input type="text" name="user_name" id="name" autoComplete="name" maxLength={120} placeholder={t('contact.name')} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">{t('contact.email')}</label>
                            <input type="email" name="user_email" id="email" autoComplete="email" maxLength={254} placeholder={t('contact.email')} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">{t('contact.message')}</label>
                            <textarea name="message" id="message" rows="5" maxLength={5000} placeholder={t('contact.message')} required></textarea>
                        </div>
                        <button type="submit" className="submit-btn" disabled={isSending || !isConfigured}>
                            {isSending ? t('contact.sending') : t('contact.button')}
                        </button>
                        <p className={`form-status ${status}`} role="status" aria-live="polite" aria-atomic="true">
                            {!isConfigured ? t('contact.unavailable') : status ? t(`contact.${status}`) : ''}
                        </p>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
