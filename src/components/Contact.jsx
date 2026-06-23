import { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import emailjs from '@emailjs/browser'
import { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } from '/.env'

function Contact() {
    const form = useRef()
    const [isSending, setIsSending] = useState(false)
    const { t } = useTranslation()

    const sendEmail = (e) => {
        e.preventDefault()
        setIsSending(true)

        emailjs.sendForm(
            SERVICE_ID,
            TEMPLATE_ID,
            form.current,
            PUBLIC_KEY
        ).then(
            () => {
                alert(t('contact.success'))
                form.current.reset()
                setIsSending(false)
            },
            (error) => {
                alert(t('contact.error'))
                console.error('EmailJS error:', error)
                setIsSending(false)
            }
        )
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
                            Fill out the form and I'll get back to you as soon as possible.
                        </p>
                    </div>
                    <form className="contact-form" ref={form} onSubmit={sendEmail}>
                        <div className="form-group">
                            <label htmlFor="name">{t('contact.name')}</label>
                            <input type="text" name="user_name" id="name" placeholder={t('contact.name')} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">{t('contact.email')}</label>
                            <input type="email" name="user_email" id="email" placeholder={t('contact.email')} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">{t('contact.message')}</label>
                            <textarea name="message" id="message" rows="5" placeholder={t('contact.message')} required></textarea>
                        </div>
                        <button type="submit" className="submit-btn" disabled={isSending}>
                            {isSending ? 'Sending...' : t('contact.button')}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
