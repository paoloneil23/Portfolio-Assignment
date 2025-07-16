//Contact jsx file, Paolo Caparas, 301116473, 2025/05/23
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

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

const handleSubmit = async (e) => {
  e.preventDefault();

  const { firstname, lastname, email, phone, message } = formData;

  const contactData = {
    firstname,
    lastname,
    email,
    phone,
    message
  };

  const token = "REMOVED";

  try {
    const response = await fetch('http://localhost:5000/api/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(contactData)
    });

    const data = await response.json();
    console.log('Success:', data);
    navigate('/');
  } catch (error) {
    console.error('Error:', error);
  }
};

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