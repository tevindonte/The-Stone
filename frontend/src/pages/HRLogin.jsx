import React, { useState } from 'react';
import axios from 'axios';

function HRLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post('/api/login/hr', { username, password })
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
        <h1>HR Login</h1>
      </header>
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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

export default HRLogin;
