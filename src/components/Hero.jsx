function Hero() {
    return (
        <main className="hero-section">
            <div className="hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">JOSÉ ANTONIO MORENO MARÍN</h1>
                    <h2 className="hero-subtitle">Full Stack Developer</h2>
                    <p className="hero-description">
                        Passionate about technology and software development, focused on
                        creating efficient and maintainable solutions. Experienced in the full
                        development cycle with a strong ability to learn and adapt.
                    </p>
                    <div className="hero-buttons">
                        <a href="/CV Jose Antonio Moreno Marin 11-25.pdf" download className="btn-download">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 13L6 9h3V3h2v6h3l-4 4zm-7 4h14v2H3v-2z" fill="currentColor" />
                            </svg>
                            Download CV
                        </a>
                        <button className="btn-contact">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 3l1.5 1.5L10 11l6.5-6.5L18 3v12l-8 4-8-4V3z" fill="currentColor" />
                            </svg>
                            Contact Me
                        </button>
                    </div>
                </div>
                <div className="hero-image">
                    <div className="profile-circle">
                        <img src="/foto-cv-25.jpg" alt="Profile" />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Hero
