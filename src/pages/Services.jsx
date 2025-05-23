//Services jsx file, Paolo Caparas, 301116473, 2025/05/23

import Python from '../assets/python.png';
import Csharp from '../assets/csharp.png';
import JavaScript from '../assets/JavaScript.png';
import './Services.css';

export default function Services() {
  return (
    <div className="services-container">
      <h1>My Services</h1>
      <div className="service-list">
        <div className="service-card">
          <img src={Python} alt="Python" />
          <h3>Python</h3>
          <p>I know a little about python and sometimes use for leetcode.</p>
        </div>
        <div className="service-card">
          <img src={Csharp} alt="Mobile App Development" />
          <h3>C#</h3>
          <p>My main programming language is C# as i learned it in Centennial College</p>
        </div>
        <div className="service-card">
          <img src={JavaScript} alt="Database Management" />
          <h3>JavaScript</h3>
          <p>I create responsive website useing JavaScript.</p>
        </div>
      </div>
    </div>
  );
}