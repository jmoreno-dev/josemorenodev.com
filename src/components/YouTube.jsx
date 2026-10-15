import { useTranslation } from 'react-i18next'

// Puedes cambiar este enlace por la URL exacta de tu canal de YouTube
const YOUTUBE_CHANNEL_URL = 'https://www.youtube.com/@josemorenodevs'

function YouTube() {
    const { t } = useTranslation()

    const topics = [
        {
            id: 1,
            icon: '☕',
            titleKey: 'youtube.topic1Title',
            descKey: 'youtube.topic1Desc'
        },
        {
            id: 2,
            icon: '🐳',
            titleKey: 'youtube.topic2Title',
            descKey: 'youtube.topic2Desc'
        },
        {
            id: 3,
            icon: '🚀',
            titleKey: 'youtube.topic3Title',
            descKey: 'youtube.topic3Desc'
        }
    ]

    return (
        <section id="youtube" className="youtube-section">
            <div className="section-container">
                <div className="youtube-header-badge">
                    <span className="youtube-badge-dot"></span>
                    <svg className="youtube-mini-icon" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                    <span>{t('youtube.tag')}</span>
                </div>

                <h2 className="section-title">{t('youtube.title')}</h2>
                <p className="section-subtitle">
                    {t('youtube.subtitle')}
                </p>

                {/* Banner principal del canal */}
                <div className="youtube-banner-card">
                    <div className="youtube-banner-info">
                        <div className="youtube-channel-header">
                            <div className="youtube-avatar-ring">
                                <img src="/foto-cv-25.jpg" alt={t('youtube.channelName')} className="youtube-avatar" />
                                <div className="youtube-live-indicator">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="youtube-channel-titles">
                                <h3 className="youtube-channel-name">{t('youtube.channelName')}</h3>
                                <p className="youtube-channel-handle">{t('youtube.channelHandle')}</p>
                            </div>
                        </div>

                        <p className="youtube-description">
                            {t('youtube.channelDescription')}
                        </p>

                        <div className="youtube-stats-row">
                            <span className="youtube-stat-pill">
                                📹 {t('youtube.statsVideos')}
                            </span>
                            <span className="youtube-stat-pill">
                                💡 {t('youtube.statsTopics')}
                            </span>
                            <span className="youtube-stat-pill highlight">
                                ✨ {t('youtube.badge')}
                            </span>
                        </div>

                        <div className="youtube-actions">
                            <a
                                href={YOUTUBE_CHANNEL_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="youtube-subscribe-btn"
                            >
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                                {t('youtube.subscribeBtn')}
                            </a>
                        </div>
                    </div>

                    <a
                        href={YOUTUBE_CHANNEL_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="youtube-preview-card"
                        aria-label={t('youtube.subscribeBtn')}
                    >
                        <div className="youtube-preview-thumbnail">
                            <div className="youtube-thumbnail-overlay"></div>
                            <div className="youtube-play-btn">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                            <div className="youtube-thumbnail-content">
                                <span className="youtube-preview-tag">YouTube</span>
                                <span className="youtube-preview-title">{t('youtube.channelName')}</span>
                            </div>
                        </div>
                    </a>
                </div>

                {/* Tarjetas de temáticas del canal */}
                <div className="youtube-topics-section">
                    <h3 className="youtube-topics-header">{t('youtube.topicsTitle')}</h3>
                    <div className="youtube-topics-grid">
                        {topics.map((topic) => (
                            <a
                                key={topic.id}
                                href={YOUTUBE_CHANNEL_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="youtube-topic-card"
                            >
                                <div className="youtube-topic-icon">{topic.icon}</div>
                                <h4 className="youtube-topic-title">{t(topic.titleKey)}</h4>
                                <p className="youtube-topic-desc">{t(topic.descKey)}</p>
                                <span className="youtube-topic-link">
                                    {t('youtube.watchBtn')} →
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default YouTube
