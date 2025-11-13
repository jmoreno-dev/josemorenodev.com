function Contact() {
    return (
        <section className="contact-section">
            <div className="section-container">
                <div className="contact-grid">
                    <div className="contact-info">
                        <h2 className="section-title left-align">Get in Touch</h2>
                        <p className="contact-text">
                            I'm currently open to new opportunities. If you have a project in mind, a question, or
                            just want to say hello, my inbox is always open.
                        </p>
                        <p className="contact-text">
                            Fill out the form and I'll get back to you as soon as possible.
                        </p>
                    </div>
                    <form className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="your.email@example.com" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows="5" placeholder="Tell me about your project or opportunity..." required></textarea>
                        </div>
                        <button type="submit" className="submit-btn">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
