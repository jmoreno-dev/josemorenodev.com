import { useTranslation } from 'react-i18next'

function Transition() {
    const { t } = useTranslation()
    const steps = t('transition.steps', { returnObjects: true })

    return (
        <div className="about-journey" aria-labelledby="journey-title">
            <h3 id="journey-title">{t('transition.title')}</h3>
            <ol className="about-timeline">
                {Array.isArray(steps) && steps.map((step, index) => (
                    <li key={step.title} className={index === steps.length - 1 ? 'is-current' : ''}>
                        <span className="about-step-marker" aria-hidden="true" />
                        <p className="about-step-period">{step.period}</p>
                        <h4>{step.title}</h4>
                        <p className="about-step-description">{step.description}</p>
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default Transition
