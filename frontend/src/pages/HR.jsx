

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HRDetail from '../components/HRDetail';
import logo from '../assets/Travelers_share.jpg';
import { useNavigate } from 'react-router-dom';

function HR() {
  const [employee, setEmployee] = useState(null);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');
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

  const handleSearch = () => {
    axios.get(`http://localhost:3000/hr/search?query=${searchTerm}`)
      .then(response => {
        console.log('Search results:', response.data);
        setEmployee(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

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
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by name"
        />
        <button onClick={handleLogout}>Logout</button>
        <HRDetail employee={employee} />
      </header>
      <button onClick={handleSearch}>Search</button>
      <footer>
        &copy; 2024 Travelers Insurance
      </footer>
      <img src={logo} alt="Travelers Logo" className="logo" /> {/* Add the logo */}
    </div>
  );
}

export default HR;
