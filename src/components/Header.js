import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaQuestionCircle } from 'react-icons/fa';
import './styles/header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Smart AgriTech</h1>
      </div>
      <nav className="navigation-menu">
        <ul>
          <li><Link to="/">Home <FaHome /></Link></li>
          <li><Link to="/about">About <FaInfoCircle /></Link></li>
          <li><Link to="/predict">Predict <FaQuestionCircle /></Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
