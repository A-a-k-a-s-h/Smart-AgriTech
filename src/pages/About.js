// About.js
import React from 'react';
import { FaInfoCircle, FaCogs, FaBrain } from 'react-icons/fa';
import './styles/about.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-section" tabIndex="0">
        <div className="about-text">
          <h2 className="about-heading"><FaInfoCircle /> About Plant Disease Classification</h2>
          <p className="about-content">
            Plant Disease Classification is a website dedicated to helping farmers and gardeners identify and manage diseases affecting their plants. Using state-of-the-art machine learning technology, we provide accurate and efficient disease diagnosis for a wide range of plant species.
          </p>
        </div>
      </div>
      <div className="about-section" tabIndex="0">
        <div className="about-text">
          <h3 className="service-heading"><FaCogs /> Our Services</h3>
          <ul className="service-list">
            <li>Plant Disease Identification: Our platform uses advanced image recognition algorithms to analyze plant images uploaded by users and identify potential diseases.</li>
            <li>Information and Resources: We offer comprehensive information on various plant diseases, including their symptoms, causes, and recommended treatments. Users can access helpful resources to learn more about managing plant health.</li>
            <li>Community Support: Our website fosters a community of plant enthusiasts, where users can share their experiences, ask questions, and collaborate on solving plant health issues.</li>
          </ul>
        </div>
      </div>
      <div className="about-section" tabIndex="0">
        <div className="about-text">
          <h3 className="model-heading"><FaBrain /> Our Classification Model</h3>
          <p className="model-description">
            At Plant Disease Classification, we utilize a deep learning model trained on a large dataset of labeled plant images. This model has been fine-tuned to accurately classify different types of plant diseases with high precision and recall. By leveraging the power of artificial intelligence, we aim to revolutionize plant disease management and promote sustainable agriculture practices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
