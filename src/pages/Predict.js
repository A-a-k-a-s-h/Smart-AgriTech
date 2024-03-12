import React, { useState } from 'react';
import axios from 'axios';
import parse from 'html-react-parser';
import './styles/predict.css'; // Import the CSS file

function Predict() {
  const [file, setFile] = useState(null);
  const [prediction, setPrediction] = useState('');
  const [details, setDetails] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    try {
      const response = await axios.post('http://127.0.0.1:5000/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      const { prediction, details, imageUrl } = response.data;
      setPrediction(prediction);
      setDetails(parse(details));
      setImageUrl(imageUrl);
    } catch (error) {
      console.error('Error predicting disease:', error);
    }
  };
  
  return (
    <div className="predict-container">
      <h1 className="predict-heading">Predict Disease</h1>
      <form className="predict-form" onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Predict</button>
      </form>
      {prediction && (
        <div className="predict-results">
          <h2>Result:</h2>
          <h2>Prediction: {prediction}</h2>
          {imageUrl && <img src={imageUrl} alt="Disease" className="result-image" />}
          <h3>Disease Details:</h3>
          <p>{details}</p>
        </div>
      )}
    </div>
  );
}

export default Predict;

