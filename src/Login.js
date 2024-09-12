import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function Login() {
  const [enrollment, setEnrollment] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (enrollment === 'IIT2023052' && password === '7/4/2004') {
      navigate('/admin');
    } else if (enrollment === 'IIT2023063' && password === '1/11/2005') {
      navigate('/student');
    } else if (enrollment === 'IIT2023156' && password === '8/29/2005') {
      navigate('/student');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="App">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>Enrollment No.</label>
            <input
              type="text"
              value={enrollment}
              onChange={(e) => setEnrollment(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
