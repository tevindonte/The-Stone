
import React from 'react';
import ManagerDetail from '../components/ManagerDetail';
import logo from '../assets/Travelers_share.jpg';

function Manager() {
  return (
    <div className="App">
      <header>
        <h1>Employee Detail</h1>
        <ManagerDetail />
      </header>
      <footer>
        &copy; 2024 Travelers Insurance
      </footer>
      <img src={logo} alt="Travelers Logo" className="logo" /> {/* Add the logo */}
    </div>
  );
}

export default Manager;
