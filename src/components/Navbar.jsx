//Navbar jsx file, Paolo Caparas, 301116473, 2025/05/23
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useState } from 'react';

export default function Navbar() {

    const [open, setOpen] = useState(false);

    return (
        <nav className="navbar">
            <h2>
                <span className="logo">PC</span> My Portfolio
            </h2>
            <div className="menu-icon" onClick={() => setOpen(!open)}>
        ☰
            </div>
            <ul className={`nav-links ${open ? 'open' : ''}`}>
                <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
                <li><Link to="/about" onClick={() => setOpen(false)}>About</Link></li>
                <li><Link to="/projects" onClick={() => setOpen(false)}>Projects</Link></li>
                <li><Link to="/services" onClick={() => setOpen(false)}>Services</Link></li>
                <li><Link to="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
            </ul>
        </nav>
  );
}