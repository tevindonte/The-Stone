// src/pages/HRLogin.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

function HRLogin() {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [isHR, setIsHR] = useState(false); 
  const navigate = useNavigate(); 

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/hr/login', { Email, Password, isHR })
      .then(response => {
        console.log(response.data);
        navigate('/hrdashboard');
      })
      .catch(error => {
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
        /><div>
     <p>Are you hr?</p>
          <input
            type="checkbox"
            checked={isHR}
            
            onChange={() => setIsHR(!isHR)}
          /></div>
          
        <button type="submit">Login</button>
      </form>
      <footer>
        &copy; 2024 Travelers Insurance
      </footer>
    </div>
  );
}

export default HRLogin;
