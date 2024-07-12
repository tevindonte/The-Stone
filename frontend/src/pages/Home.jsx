import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Travelers_share.jpg'; // Import the logo


function Home() {
  return (
    <div className="App">
      <header>
        <h1>Enterprise Directory</h1>
      </header>
      <div className="login-buttons">
        <Link to="/login/employee">
          <button>Employee Login</button>
        </Link>
        <Link to="/login/manager">
          <button>Manager Login</button>
        </Link>
        <Link to="/login/hr">
          <button>HR Login</button>
        </Link>
      </div>
      <footer>
        &copy; 2024 Travelers Insurance
      </footer>
      <img src={logo} alt="Travelers Logo" className="logo" /> {/* Add the logo */}
    </div>
  );
}

export default Home;