import { useTranslation } from 'react-i18next'

function ProfileSection() {
    const { t } = useTranslation()

    return (
        <section id="about" className="profile-section">
            <div className="section-container">
                <h2 className="section-title">{t('profile.title')}</h2>
                <p className="profile-text">
                    {t('profile.description')}
                </p>
            </div>
        </section>
    )
}

export default ProfileSection
