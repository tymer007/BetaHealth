import React from 'react';
import './HealthApply.css';
import { Link } from 'lucide-react';

const HealthApply = () => {
  return (
    <div className="container">
      <h1>Become a Health content writer and get on consultations with patients</h1>
      <p className="intro-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="content">
        <div className="image-container">
          <img src="./images/Doctors.jpg" alt="Doctor" className="doctor-image" />
        </div>
        <div className="info">
          <div className="info-item">
            <img src="./images/Online doctor consultation.png" alt="Consultations" className="icon" />
            <div className="text">
              <h2>Accept Consultations</h2>
              <p>Lorem ipsum dolor sit amet, Integer malesuada turpis fringilla suscipit. Maecenas ultricies.</p>
            </div>
          </div>
          <div className="info-item">
            <img src="./images/Notebook, pen and stickers.png" alt="Write Articles" className="icon" />
            <div className="text">
              <h2>Write Health Related Articles</h2>
              <p>Lorem ipsum dolor sit amet, Integer malesuada turpis fringilla suscipit. Maecenas ultricies.</p>
            </div>
          </div>
          <Link to="/SignUpExpert1"><button className="apply-button">Apply Now</button></Link>
        </div>
      </div>
    </div>
  );
};

export default HealthApply;
