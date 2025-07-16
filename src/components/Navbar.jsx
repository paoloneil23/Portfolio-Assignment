//Navbar jsx file, Paolo Caparas, 301116473, 2025/05/23
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { useState, useEffect } from 'react';

export default function Navbar({ user }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/signin');
    window.location.reload(); // optionally refresh to reset all state
  };

  return (
    <nav className="navbar">
      <h2>
        <span className="logo">PC</span> My Portfolio
      </h2>
      <div className="menu-icon" onClick={() => setOpen(!open)}>☰</div>

      <ul className={`nav-links ${open ? 'open' : ''}`}>
        <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setOpen(false)}>About</Link></li>
        <li><Link to="/projects" onClick={() => setOpen(false)}>Projects</Link></li>
        <li><Link to="/services" onClick={() => setOpen(false)}>Services</Link></li>
        <li><Link to="/contact" onClick={() => setOpen(false)}>Contact</Link></li>

        {!user ? (
          <>
            <li><Link to="/signin" onClick={() => setOpen(false)}>Sign In</Link></li>
            <li><Link to="/signup" onClick={() => setOpen(false)}>Sign Up</Link></li>
          </>
        ) : (
          <>
            <li><span className="welcome">Welcome, {user.name}</span></li>
            <li><button className="logout-btn" onClick={handleLogout}>Logout</button></li>
          </>
        )}
      </ul>
    </nav>
  );
};
