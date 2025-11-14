import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

function Contact() {
    const form = useRef()
    const [isSending, setIsSending] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault()
        setIsSending(true)

        emailjs.sendForm(
            'service_eukuomd',      // Reemplaza con tu Service ID
            'template_razjdvn',     // Reemplaza con tu Template ID
            form.current,
            'OABxVZjClViYif4og'       // Reemplaza con tu Public Key
        ).then(
            () => {
                alert('Message sent successfully!')
                form.current.reset()
                setIsSending(false)
            },
            (error) => {
                alert('Failed to send message. Please try again.')
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
                        <h2 className="section-title left-align">Get in Touch</h2>
                        <p className="contact-text">
                            I'm currently open to new opportunities. If you have a project in mind, a question, or
                            just want to say hello, my inbox is always open.
                        </p>
                        <p className="contact-text">
                            Fill out the form and I'll get back to you as soon as possible.
                        </p>
                    </div>
                    <form className="contact-form" ref={form} onSubmit={sendEmail}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="user_name" id="name" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="user_email" id="email" placeholder="your.email@example.com" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" rows="5" placeholder="Tell me about your project or opportunity..." required></textarea>
                        </div>
                        <button type="submit" className="submit-btn" disabled={isSending}>
                            {isSending ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
