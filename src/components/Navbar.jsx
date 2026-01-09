function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="nav-logo">
                    <span>&lt;/&gt;</span>
                    <span className="nav-brand">josemorenodev</span>
                </div>
                <ul className="nav-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                </ul>
                <a href="#contact" className="nav-contact-btn">Contact Me</a>
            </div>
        </nav>
    )
}

export default Navbar
