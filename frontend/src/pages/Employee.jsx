import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Travelers_share.jpg';
import './Employee.css';

function Employee() {
  const [employee, setEmployee] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');
    console.log("This is the email", userEmail);
    if (userEmail) {
      axios.get(`http://localhost:3000/employees/${userEmail}`)
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
      </header>
      {employee ? (
        <div className="employee-details">
          <p><strong>Name:</strong> {employee.Name}</p>
          <p><strong>Birth Date:</strong> {new Date(employee.Birth_Date).toLocaleDateString()}</p>
          <p><strong>Phone Number:</strong> {employee.Phone_Number}</p>
          <p><strong>Job Role:</strong> {employee.Job_Role}</p>
          <p><strong>Work Location:</strong> {employee.Work_Location}</p>
          <p><strong>Salary:</strong> {employee.Salary}</p>
          <p><strong>Email:</strong> {employee.Email}</p>
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

export default Employee;