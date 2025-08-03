// Contact.jsx — Paolo Caparas, 301116473, 2025/05/23
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    message: ''
  });

  const navigate = useNavigate();

  // Handle form field changes
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  // Handle form submission
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to send contact form');
      }

      const result = await response.json();
      console.log('Success:', result);

      // Redirect to homepage or show success
      navigate('/');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit. Please try again later.');
    }
  }

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>

      <div className="contact-info">
        <p><strong>Email:</strong> pcapara1@centennialcollege.ca</p>
        <p><strong>Phone:</strong> (123) 456-7890</p>
        <p><strong>Location:</strong> Toronto, ON</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            value={formData.firstname}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
        </div>

        <input
          type="tel"
          name="phone"
          placeholder="Contact Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}