import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Kontakt.css'

const Kontakt = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  
    const [status, setStatus] = useState(null); 
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await fetch('https://formspree.io/f/mnnddvwe', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' }); 
      } else {
        setStatus('There was an error sending your message.');
      }
  
      
      setTimeout(() => {
        setStatus(null);
      }, 2000);
    };
  
    return (
      <div className="container1">
        <h1>Kontaktirajte nas</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Ime:* <span className="required">(obavezno)</span></label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            onInvalid={(e) => e.target.setCustomValidity('Molimo unesite svoje ime')}
            onInput={(e) => e.target.setCustomValidity('')}
          />
  
          <label htmlFor="email">Email:* <span className="required">(obavezno)</span></label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            onInvalid={(e) => e.target.setCustomValidity('Molimo unesite ispravnu email adresu')}
            onInput={(e) => e.target.setCustomValidity('')}
          />
  
          <label htmlFor="subject">Tema:* <span className="required">(obavezno)</span></label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            onInvalid={(e) => e.target.setCustomValidity('Molimo unesite temu poruke')}
            onInput={(e) => e.target.setCustomValidity('')}
          />
  
          <label htmlFor="message">Poruka:* <span className="required">(obavezno)</span></label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            onInvalid={(e) => e.target.setCustomValidity('Molimo unesite poruku')}
            onInput={(e) => e.target.setCustomValidity('')}
          ></textarea>
  
          <button type="submit">Pošaljite Mail</button>
        </form>
        {status && (
          <p 
            className='status'
            data-status={status.includes('success') ? 'success' : 'error'}
          >
            {status}
          </p>
        )}
      </div>
    );
  };
  
  export default Kontakt;