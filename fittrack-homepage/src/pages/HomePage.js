import React, { useState } from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = () => {
    if (!height || !weight || height <= 0 || weight <= 0) {
      setBmi(null);
      setCategory('Please enter valid height and weight.');
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBmi(bmiValue.toFixed(1));

    if (bmiValue < 18.5) setCategory('Underweight');
    else if (bmiValue < 25) setCategory('Normal weight');
    else if (bmiValue < 30) setCategory('Overweight');
    else setCategory('Obese');
  };

  return (
    <div className="homepage">

      <nav className="navbar">
        <h2>FitTrack</h2>
      </nav>

      <div className="hero">
        <div className="hero-blob blob-1"></div>
        <div className="hero-blob blob-2"></div>

        <span className="hero-badge">Your fitness companion</span>
        <h1>Track Your Fitness Journey</h1>
        <p>Log workouts, monitor your progress, and reach your fitness goals with FitTrack.</p>
        <div className="hero-buttons">
          <Link to="/user/101"><button>Get Started</button></Link>
          <Link to="/payment"><button className="btn-outline">Go Premium</button></Link>
        </div>
      </div>

      <div className="bmi-section">
        <div className="bmi-card">
          <h3>BMI Calculator</h3>
          <p className="bmi-subtext">Check where your Body Mass Index stands.</p>

          <label>Height (cm)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="e.g. 165"
          />

          <label>Weight (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="e.g. 58"
          />

          <button onClick={calculateBMI}>Calculate BMI</button>

          {bmi && (
            <div className="bmi-result">
              <span className="bmi-value">{bmi}</span>
              <span className="bmi-category">{category}</span>
            </div>
          )}
          {!bmi && category && (
            <p className="bmi-error">{category}</p>
          )}
        </div>
      </div>

      <div className="features">
        <div className="feature-box">
          <div className="feature-icon icon-1">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 12h16M4 12a2 2 0 100-4M4 12a2 2 0 100 4M20 12a2 2 0 100-4M20 12a2 2 0 100 4"/></svg>
          </div>
          <h3>Workout Logging</h3>
          <p>Keep a record of every workout you complete.</p>
        </div>
        <div className="feature-box">
          <div className="feature-icon icon-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18M7 15l4-4 3 3 5-6"/></svg>
          </div>
          <h3>Progress Tracking</h3>
          <p>See your weight and fitness progress over time.</p>
        </div>
        <div className="feature-box">
          <div className="feature-icon icon-3">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 17.75l-6.16 3.24 1.18-6.88L2 9.24l6.92-1L12 2l3.08 6.24 6.92 1-5.02 4.87 1.18 6.88z"/></svg>
          </div>
          <h3>Goal Setting</h3>
          <p>Set fitness goals and track how close you are.</p>
        </div>
      </div>

      <footer>
        <p>&copy; 2026 FitTrack</p>
      </footer>

    </div>
  );
}