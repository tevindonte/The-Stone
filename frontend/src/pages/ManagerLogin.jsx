// src/pages/ManagerLogin.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

function ManagerLogin() {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [isManager, setIsManager] = useState(false); 
  const navigate = useNavigate(); 

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/manager/login', { Email, Password, isManager })
      .then(response => {

        console.log(response.data);
        const userEmail = Email;
        localStorage.removeItem('userEmail');
        localStorage.clear();
        localStorage.setItem('userEmail', userEmail);
        navigate('/managerdashboard');
      })
      .catch(error => {

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
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
     <p>Are you Manager?</p>
          <input
            type="checkbox"
            checked={isManager}
            
            onChange={() => setIsManager(!isManager)}
          /></div>
        <button type="submit">Login</button>
      </form>
      <footer>
        &copy; 2024 Travelers Insurance
      </footer>
    </div>
  );
}

export default ManagerLogin;
