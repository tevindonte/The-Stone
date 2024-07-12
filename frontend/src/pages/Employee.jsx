// src/pages/Employee.js
import React from 'react';
import EmployeeDetail from '../components/EmployeeDetail';
import logo from '../assets/Travelers_share.jpg'; // Import the logo

function Employee() {
  return (
    <div className="App">
      <header>
        <h1>Employee Detail</h1>
      </header>
      <EmployeeDetail />
      <footer>
        &copy; 2024 Travelers Insurance
      </footer>
      <img src={logo} alt="Travelers Logo" className="logo" /> {/* Add the logo */}
    </div>
  );
}

export default Employee;
