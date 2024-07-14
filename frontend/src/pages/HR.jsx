// src/pages/Employee.js
import React from 'react';
import HRDetail from '../components/HRDetail';
import logo from '../assets/Travelers_share.jpg'; // Import the logo

function HR() {
  return (
    <div className="App">
      <header>
        <h1>Employee Detail</h1>
        <HRDetail />
      </header>
      <footer>
        &copy; 2024 Travelers Insurance
      </footer>
      <img src={logo} alt="Travelers Logo" className="logo" /> {/* Add the logo */}
    </div>
  );
}

export default HR;
