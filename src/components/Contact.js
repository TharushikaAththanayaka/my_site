import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_z3sp40j', // Replace with your service ID
        'template_jcpn94i', // Replace with your template ID
        formData,
        'AMG6T0bg2xPMizw1O' // Replace with your user ID
      )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setFormStatus('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      })
      .catch((err) => {
        console.log('FAILED...', err);
        setFormStatus('Failed to send message. Please try again later.');
      });
  };

  return (
    <section id="contact">
      <div className="contact-section">
        <div className="contact-header">
          <h1>Contact</h1>
          <p>Feel free to contact me for work inquiries or collaborations!</p>
        </div>
        <div className="contact-form-container">
          <h2>Send me an Email</h2>
          <form onSubmit={handleSubmit} className="contact-form">
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
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Send</button>
          </form>
          {formStatus && <p className="form-status">{formStatus}</p>}
        </div>
      </div>
    </section>
  );
};

export default Contact;