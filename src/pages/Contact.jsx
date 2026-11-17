import { Mail, Phone, MapPin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <main className="contact-page">
      <section className="page-hero">
        <h1>Get in <span className="title-red">touch</span></h1>
        <p>We’d love to hear from you.</p>
      </section>

      <section className="contact-grid">
        <div className="contact-info">
          <div className="info-item">
            <Phone size={24} />
            <span>+234 800 123 4567</span>
          </div>
          <div className="info-item">
            <Mail size={24} />
            <span>hello@drivemaster.ng</span>
          </div>
          <div className="info-item">
            <MapPin size={24} />
            <span>Lekki Phase 1, Lagos, Nigeria</span>
          </div>
        </div>

        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="Your name" required />
          </div>
          <div className="form-row">
            <input type="email" placeholder="Email address" required />
          </div>
          <div className="form-row">
            <textarea rows="5" placeholder="Your message" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </section>
    </main>
  );
};

export default Contact;