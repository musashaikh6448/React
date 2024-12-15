// import './assets/css/Contact.css';
import '../assets/css/Contact.css'

const Contact = () => {
    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <p>We love to hear from you! Reach out to us through the following channels:</p>
            <p><strong>Email:</strong> contact@tekisky.com</p>
            <p><strong>Phone:</strong> +123 456 7890</p>
            <p><strong>Address:</strong> 123 Tekisky Avenue, Tech City, TC 56789</p>
            <form className="contact-form">
                <input type="text" placeholder="Your Name" className="form-input" required />
                <input type="email" placeholder="Your Email" className="form-input" required />
                <textarea placeholder="Your Message" className="form-textarea" required></textarea>
                <button type="submit" className="form-button">Send Message</button>
            </form>
        </div>
    );
};


export default Contact;