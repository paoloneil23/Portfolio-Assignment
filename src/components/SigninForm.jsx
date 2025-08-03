// SignInForm.jsx — Paolo Caparas, 301116473
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignInForm() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {

      const API = import.meta.env.VITE_API_BASE_URL;
      if (!API) throw new Error('API base URL is not defined');

      const response = await fetch(`${API}/api/auth/signin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const text = await response.text();
      console.log('Raw response from server:', text);

      let data;
      try {
        data = JSON.parse(text);
      } catch (err) {
        throw new Error('Response is not valid JSON');
      }

    if (!response.ok) {
      throw new Error(data.message || 'Login failed');
    }

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      //Save JWT token to localStorage
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user)); // optional

      alert('Login successful!');
      navigate('/'); // Redirect after login
    } catch (err) {
      console.error('Login error:', err);
      alert('Login failed. Please check your credentials.');
    }
  }

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}
