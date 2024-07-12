// src/pages/ManagerLogin.js
import React, { useState } from 'react';
import axios from 'axios';

function ManagerLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post('/api/login/manager', { email, password })
      .then(response => {
        // handle login success
        console.log(response.data);
      })
      .catch(error => {
        // handle login error
        console.error(error);
      });
  };

  return (
    <div className="App">
      <header>
        <h1>Manager Login</h1>
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

export default ManagerLogin;
