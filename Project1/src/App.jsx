// import React from 'react';
import './App.css';
import LoginForm from './Components/LoginForm';
import WelcomePanel from './Components/WelcomePanel';

const App = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    alert('Login submitted!');
  };

  const handleSignUp = () => {
    alert('Redirecting to sign-up!');
  };

  const handleRememberMe = (e) => {
    console.log(`Remember me: ${e.target.checked}`);
  };

  return (
    <div className="app">
      <div className="login-container">
        <LoginForm onLogin={handleLogin} rememberMeHandler={handleRememberMe} />
        <WelcomePanel onSignUp={handleSignUp} />
      </div>
    </div>
  );
};

export default App;
