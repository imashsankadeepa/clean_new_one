// src/pages/Contact.js
import React, { useState, useEffect } from 'react';
import './Contact.css';
import { FaFacebookF, FaYoutube } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';
import { Helmet } from 'react-helmet';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState(null);
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setStatusMessage('❌ Please fill in required fields: Name, Email, Message.');
      return;
    }

    const messageText = `
*New Contact Message*

Name: ${formData.name}
Company: ${formData.company}
Phone: ${formData.phone}
Email: ${formData.email}
Subject: ${formData.subject}
Message: ${formData.message}
    `.trim();

    const encodedMessage = encodeURIComponent(messageText);
    const whatsappNumber = '94701195794';
    const isMobile = /iPhone|Android|iPad|iPod/i.test(navigator.userAgent);

    const appURL = `whatsapp://send?phone=${whatsappNumber}&text=${encodedMessage}`;
    const webURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    if (isMobile) {
      window.location.href = appURL;
    } else {
      window.open(webURL, '_blank');
    }

    setFormData({
      name: '',
      company: '',
      phone: '',
      email: '',
      subject: '',
      message: '',
    });

    setStatus('success');
    setStatusMessage('✅ WhatsApp opened. You can send the message.');
  };

  return (
    <div className="contact">
      <Helmet>
        <title>Contact Us | Oak Roots Cleaning And Clearance</title>
        <meta name="description" content="Get in touch with Oak Roots Cleaning for professional cleaning services across the UK. Contact us via form, phone or social media." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Contact Oak Roots Cleaning" />
        <meta property="og:description" content="Professional cleaning services for schools, offices, and commercial properties in the UK." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://oakrootscleaning.uk/contact" />
      </Helmet>

      <main>
        <section className="contact-header">
          <h1>Contact Oak Roots Cleaning And Clearance</h1>
          <p>We’re here to provide expert cleaning solutions tailored to your needs.</p>
        </section>

        <section className="contact-content">
          <div className="contact-info">
            <h2>Reach Out to Us</h2>
        <p><strong>Email:</strong> <a href="mailto:info@oakrootscleaning.uk">info@oakrootscleaning.uk</a></p>

<p><strong>Phone:</strong><br />
  
  <a href="tel:+447721259573">+44 7721 259573</a><br />
  <a href="tel:+447557765488">+44 7557 765488</a><br />
  <a href="tel:+447741076669">+44 7741 076669</a>
</p>

            <div className="social-icons">
              <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href="https://tiktok.com/@yourprofile" target="_blank" rel="noopener noreferrer"><SiTiktok /></a>
              <a href="https://youtube.com/yourchannel" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            </div>
          </div>

          <div className="contact-form">
            <h2>Send a Message</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Name *" value={formData.name} onChange={handleChange} required />
              <input type="text" name="company" placeholder="Company" value={formData.company} onChange={handleChange} />
              <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
              <input type="email" name="email" placeholder="Email *" value={formData.email} onChange={handleChange} required />
              <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} />
              <textarea name="message" placeholder="Message *" value={formData.message} onChange={handleChange} required />
              <button type="submit" className="submit-button">Send via WhatsApp</button>
            </form>
            {status && <p className={`status-message ${status}`}>{statusMessage}</p>}
          </div>
        </section>

        <section className="map-section">
          <h2>Visit Our Location</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.655579521994!2d0.8688136761733207!3d51.143877279590875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47df11e3c7a0428f%3A0xe8fcb1f2b44d92bb!2sDesigner%20Outlet%20Ashford!5e0!3m2!1sen!2suk!4v1699778152345!5m2!1sen!2suk"
            width="100%" height="400" style={{ border: 0 }} loading="lazy"
            allowFullScreen title="Oak Roots Cleaning Map"
          />
        </section>
      </main>

      {/* Footer */}
        <footer className="footer" role="contentinfo">
          <div className="footer-content">
            <section className="footer-section" aria-label="About Clean and Clear">
              <h3>Clean and clearance </h3>
              <p>Professional cleaning and clearance services for schools and educational facilities.</p>
            </section>
            <section className="footer-section" aria-label="Services offered">
              <h4>Services</h4>
              <ul>
                <li>School Cleaning and Clearance </li>
                <li>Office Cleaning and Clearance </li>
                <li>Commercial Cleaning and Clearance </li>
                <li>Special Services and Clearance </li>
              </ul>
            </section>
            <section className="footer-section" aria-label="Contact information">
              <h4>Contact</h4>
              <address>
               <a href="mailto:info@cleanandcleaning.uk">info@cleanandcleaning.uk</a><br />
<a href="tel:+447721259573">+44 7721 259573</a><br />
<a href="tel:+447557765488">+44 7557 765488</a><br />
<a href="tel:+447741076669">+44 7741 076669</a>

              </address>
            </section>
            <section className="footer-section" aria-label="Opening hours">
              <h4>Hours</h4>
              <p>
                Monday - Friday: 8am - 8pm<br />
                Saturday: 9am - 5pm<br />
                Sunday: 9am - 5pm
              </p>
            </section>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Clean and Clearance. All rights reserved.</p>
          </div>
        </footer>
    </div>
  );
}
export default Contact;
