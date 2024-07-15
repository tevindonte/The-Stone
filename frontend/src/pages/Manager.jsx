

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ManagerDetail from '../components/ManagerDetail';
import logo from '../assets/Travelers_share.jpg';
import { useNavigate } from 'react-router-dom';

function Manager() {
  const [employee, setEmployee] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');
    console.log(userEmail)
    if (userEmail) {
      axios.get(`http://localhost:3000/manager/${userEmail}`)
        .then(response => {
          console.log('Response data:', response.data); 

          setEmployee(response.data); 
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    localStorage.removeItem('userEmail');
    setEmployee(null);
    navigate('/');
  };


  return (
    <div className="App">
      <header>
        <h1>Employee Detail</h1>
        <button onClick={handleLogout}>Logout</button>

        <ManagerDetail employee={employee} />
      </header>
      <footer>
        &copy; 2024 Travelers Insurance
      </footer>
      <img src={logo} alt="Travelers Logo" className="logo" /> {/* Add the logo */}
    </div>
  );
}

export default Manager;
