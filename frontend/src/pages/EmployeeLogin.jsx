
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

function EmployeeLogin() {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const navigate = useNavigate(); 
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/employees/login', { Email, Password });
      console.log(response.data); 
      const userEmail = response.data.email;
      localStorage.removeItem('userEmail');
      localStorage.setItem('userEmail', userEmail);
      navigate('/employeedashboard');
    } catch (error) {
      console.error('Error during login:', error);

    }
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
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={Password}
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
