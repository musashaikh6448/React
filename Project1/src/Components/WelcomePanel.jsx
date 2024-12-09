// import React from 'react';
import '../assets/Css/WelcomePanel.css';

const WelcomePanel = ({ onSignUp }) => {
  return (
    <div className="welcome-panel">
      <h2>Welcome to Login</h2>
      <p>Dont have an account?</p>
      <button onClick={onSignUp}>Sign Up</button>
    </div>
  );
};

export default WelcomePanel;
