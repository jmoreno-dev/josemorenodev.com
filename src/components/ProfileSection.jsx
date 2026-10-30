import { useTranslation } from 'react-i18next'
import Transition from './Transition'
import './ProfileSection.css'

function ProfileSection() {
    const { t } = useTranslation()

    return (
        <section id="about" className="about-section" aria-labelledby="about-title">
            <div className="section-container">
                <div className="about-layout">
                    <div className="about-story">
                        <p className="about-eyebrow">{t('profile.title')}</p>
                        <h2 id="about-title">{t('profile.headline')}</h2>
                        <p className="about-lead">{t('profile.description')}</p>
                        <p className="about-detail">{t('profile.today')}</p>
                        <p className="about-detail">{t('profile.beyondWork')}</p>
                        <a className="about-contact" href="#contact">{t('profile.contact')} <span aria-hidden="true">↗</span></a>
                    </div>
                    <Transition />
                </div>
            </div>
        </section>
    )
}

export default ProfileSection
