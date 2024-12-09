// import React from 'react';
import '../assets/Css/LoginForm.css';

const LoginForm = ({ onLogin, rememberMeHandler }) => {
  return (
    <div className="login-form">
      <h2>Sign In</h2>
      <form onSubmit={onLogin}>
        <label htmlFor="">USERNAME</label>
        <input type="text" placeholder="Username" required />
        <label htmlFor="">PASSWORD</label>
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign In</button>
      </form>
      <div className="options">
        <label>
          <input type="checkbox" onChange={rememberMeHandler} />
          Remember Me
        </label>
        {/* <a href="#forgot-password">Forgot Password</a> */}
        <p>Forgot Password</p>
      </div>
    </div>
  );
};

export default LoginForm;

