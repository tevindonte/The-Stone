// src/pages/EmployeeDashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function EmployeeDashboard() {
  const [employeeData, setEmployeeData] = useState(null);

  useEffect(() => {
    // Fetch employee data from the server
    axios.get('/api/employee/data') // Adjust the endpoint as needed
      .then(response => {
        setEmployeeData(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the employee data!', error);
      });
  }, []);

  if (!employeeData) return <div>Loading...</div>;

  return (
    <div className="App">
      <header>
        <h1>Employee Dashboard</h1>
      </header>
      <div className="employee-details">
        <p><strong>Name:</strong> {employeeData.name}</p>
        <p><strong>Birth Date:</strong> {employeeData.birth_date}</p>
        <p><strong>Phone Number:</strong> {employeeData.phone_number}</p>
        <p><strong>Job Role:</strong> {employeeData.job_role}</p>
        <p><strong>Work Location:</strong> {employeeData.work_location}</p>
        <p><strong>Salary:</strong> {employeeData.salary}</p>
        <p><strong>Email:</strong> {employeeData.email}</p>
      </div>
      <footer>
        &copy; 2024 Travelers Insurance
      </footer>
    </div>
  );
}

export default EmployeeDashboard;
