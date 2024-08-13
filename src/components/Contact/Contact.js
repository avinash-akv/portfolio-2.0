import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs.sendForm('service_8rxhbyv', 'template_09jrykp', e.target, '1xun-zu3vU6oZzKy6')
      .then((result) => {
        setSending(false);
        setSent(true);
        setFormData({ name: '', email: '', message: '' });
      }, (error) => {
        setSending(false);
        setError(error.text);
      });
  };

  return (
    <section className="contact-section" id="contact">
      <h2>Contact Me</h2>
      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button" disabled={sending}>
            {sending ? 'Sending...' : 'Send Message'}
          </button>
          {sent && <p className="success-message">Message sent successfully!</p>}
          {error && <p className="error-message">Error: {error}</p>}
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
