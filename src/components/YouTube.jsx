import { useTranslation } from 'react-i18next'
import './YouTube.css'

const CHANNEL_URL = 'https://www.youtube.com/@josemorenodevs'
const topics = [
    { id: 1, symbol: '</>', tag: 'Java / Spring Boot' },
    { id: 2, symbol: '{ }', tag: 'Docker / CI/CD' },
    { id: 3, symbol: '↗', tag: 'Career / Tech' },
]

function YouTubeIcon() {
    return (
        <svg aria-hidden="true" focusable="false" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
    )
}

function YouTube() {
    const { t } = useTranslation()

    return (
        <section id="youtube" className="yt-section" aria-labelledby="youtube-title">
            <div className="section-container">
                <div className="yt-panel">
                    <div className="yt-intro">
                        <span className="yt-eyebrow"><YouTubeIcon /> {t('youtube.tag')}</span>
                        <h2 id="youtube-title">{t('youtube.title')}</h2>
                        <p className="yt-summary">{t('youtube.subtitle')}</p>
                        <div className="yt-author">
                            <img src="/foto-cv-25.jpg" alt="" width="48" height="48" loading="lazy" decoding="async" />
                            <div>
                                <p className="yt-author-name">{t('youtube.channelName')}</p>
                                <p className="yt-handle">{t('youtube.channelHandle')}</p>
                            </div>
                        </div>
                        <div className="yt-actions">
                            <a className="yt-primary" href={`${CHANNEL_URL}/videos`} target="_blank" rel="noopener noreferrer">
                                <YouTubeIcon />{t('youtube.watchBtn')}<span aria-hidden="true">↗</span>
                            </a>
                            <a className="yt-secondary" href={CHANNEL_URL} target="_blank" rel="noopener noreferrer">
                                {t('youtube.subscribeBtn')}<span aria-hidden="true">↗</span>
                            </a>
                        </div>
                    </div>
                    <div className="yt-content">
                        <h3 className="yt-content-heading">{t('youtube.topicsTitle')}</h3>
                        <ul className="yt-topics">
                            {topics.map(({ id, symbol, tag }) => (
                                <li key={id} className="yt-topic">
                                    <span className="yt-topic-symbol" aria-hidden="true">{symbol}</span>
                                    <div>
                                        <h4>{t(`youtube.topic${id}Title`)}</h4>
                                        <p>{t(`youtube.topic${id}Desc`)}</p>
                                        <span className="yt-topic-tag">{tag}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <p className="yt-note"><span aria-hidden="true">//</span> {t('youtube.note')}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default YouTube
