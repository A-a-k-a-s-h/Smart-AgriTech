import React from 'react';
import { Link } from 'react-router-dom';
import './styles/home.css'; // Importing the CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h2 className="home-title">Welcome to Plant Disease Classification</h2>
        <p className="home-description">
          Plant Disease Classification is a powerful tool that helps farmers and gardeners identify and manage plant diseases effectively. By analyzing images of plants, our advanced deep learning algorithms can accurately diagnose various diseases, providing users with valuable insights and treatment recommendations.
        </p>
        <div className="home-buttons">
          <Link to="/predict" className="home-button predict-button">Predict Disease</Link>
          <Link to="/about" className="home-button about-button">Learn More</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
