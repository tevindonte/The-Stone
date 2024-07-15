import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Travelers_share.jpg';
import './Manager.css';

function Manager() {
  const [manager, setManager] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');
    console.log(userEmail);
    if (userEmail) {
      axios.get(`http://localhost:3000/manager/${userEmail}`)
        .then(response => {
          console.log('Response data:', response.data);
          setManager(response.data);
          console.log("This is manager:", manager)
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    localStorage.removeItem('userEmail');
    setManager(null);
    navigate('/');
  };

  return (
    <div className="App">
      <header>
        <h1>Manager Detail</h1>
        <button onClick={handleLogout}>Logout</button>
      </header>
      {manager ? (
        <div className="manager-details">
          <p><strong>Name:</strong> {manager.Name}</p>
          <p><strong>Birth Date:</strong> {new Date(manager.Birth_Date).toLocaleDateString()}</p>
          <p><strong>Phone Number:</strong> {manager.Phone_Number}</p>
          <p><strong>Job Role:</strong> {manager.Job_Role}</p>
          <p><strong>Work Location:</strong> {manager.Work_Location}</p>
          <p><strong>Salary:</strong> {manager.Salary}</p>
          <p><strong>Email:</strong> {manager.Email}</p>
          <p><strong>Managed Employee:</strong> {manager.managerEmployee}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <footer>
        &copy; 2024 Travelers Insurance
      </footer>
      <img src={logo} alt="Travelers Logo" className="logo" />
    </div>
  );
}

export default Manager;
