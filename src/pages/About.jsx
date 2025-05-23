//About jsx file, Paolo Caparas, 301116473, 2025/05/23
import profilePic from '../assets/profilePic.jpg';
import './About.css';

export default function About() {
  return (
    <div className="about-container">
      <img className="about-image" src={profilePic} alt="Paolo Caparas" />
      <h1 className="about-name">Paolo Caparas</h1>
      <p className="about-description">
        I'm a Software Engineer Technician student at Centennial College with a passion for building modern,
        user-friendly web applications. I enjoy solving problems with code and continuously strive to
        improve my skills in front-end and back-end development. Outside of school, I enjoy Bouldering and do
        food hopping.
      </p>
    </div>
  );
}