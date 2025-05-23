//Home jsx file, Paolo Caparas, 301116473, 2025/05/23
import './Home.css';
import { Link } from 'react-router-dom';
import profilePic from '../assets/profilepic.jpg';

export default function Home(){
  return (
    <div className="card">
      <img className="card-image" src={profilePic} alt="Profile" />
      <h2 className="card-title">Paolo Caparas</h2>
      <p className="card-text">
        I'm a student at Centennial College passionate about web development and technology.
      </p>

      <h3 className="welcome-message">Welcome to my portfolio website!</h3>
      <p className="mission">
        My mission is to build clean, responsive, and user-friendly websites that solve real problems.
      </p>

      <Link to="/about" className="btn">Learn More About Me</Link>
    </div>
  );
}