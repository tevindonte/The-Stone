// src/pages/EmployeeLogin.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function EmployeeLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post('/api/login/employee', { email, password })
      .then(response => {
        // handle login success
        console.log(response.data);
        navigate('/dashboard/employee'); // Navigate to Employee Dashboard
      })
      .catch(error => {
        // handle login error
        console.error(error);
      });
  };

  return (
    <div className="App">
      <header>
        <h1>Employee Login</h1>
      </header>
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <footer>
        &copy; 2024 Travelers Insurance
      </footer>
    </div>
  );
}

export default EmployeeLogin;
