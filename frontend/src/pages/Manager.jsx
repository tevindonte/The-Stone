import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Travelers_share.jpg';
import './Manager.css';

function Manager() {
  const [manager, setManager] = useState(null);
  const [employee, setEmployee] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');
    console.log(userEmail)
    if (userEmail) {
      axios.get(`http://localhost:3000/manager/${userEmail}`)
        .then(response => {
          console.log('Response data:', response.data); 

          setManager(response.data.manager);
          setEmployee(response.data.employee); 
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
    setEmployee(null);
    navigate('/');
  };

  return (
    <div className="App">
      <header>
        <h1>Manager and Employee Details</h1>
        <button onClick={handleLogout}>Logout</button>
      </header>
      <div className="details-container">
        {manager ? (
          <div className="manager-details">
            <h2>Manager Details</h2>
            <p><strong>Name:</strong> {manager.Name}</p>
            <p><strong>Birth Date:</strong> {new Date(manager.Birth_Date).toLocaleDateString()}</p>
            <p><strong>Phone Number:</strong> {manager.Phone_Number}</p>
            <p><strong>Job Role:</strong> {manager.Job_Role}</p>
            <p><strong>Work Location:</strong> {manager.Work_Location}</p>
            <p><strong>Salary:</strong> {manager.Salary}</p>
            <p><strong>Email:</strong> {manager.Email}</p>
          </div>
        ) : (
          <p>Loading manager details...</p>
        )}
        {employee ? (
          <div className="employee-details">
            <h2>Employee Details</h2>
            <p><strong>Name:</strong> {employee.Name}</p>
            <p><strong>Birth Date:</strong> {new Date(employee.Birth_Date).toLocaleDateString()}</p>
            <p><strong>Phone Number:</strong> {employee.Phone_Number}</p>
            <p><strong>Job Role:</strong> {employee.Job_Role}</p>
            <p><strong>Work Location:</strong> {employee.Work_Location}</p>
            <p><strong>Salary:</strong> {employee.Salary}</p>
            <p><strong>Email:</strong> {employee.Email}</p>
          </div>
        ) : (
          <p>Loading employee details...</p>
        )}
      </div>
      <footer>
        &copy; 2024 Travelers Insurance
      </footer>
      <img src={logo} alt="Travelers Logo" className="logo" /> {/* Add the logo */}
    </div>
  );
}

export default Manager;
