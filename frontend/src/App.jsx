// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Employee from './pages/Employee';
import EmployeeLogin from './pages/EmployeeLogin';
import ManagerLogin from './pages/ManagerLogin';
import HRLogin from './pages/HRLogin';
import Manager from './pages/Manager';
import HR from './pages/HR';

import './App.css';

function App() {
  const isLoggedIn = !!localStorage.getItem('userEmail');

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/employee" element={isLoggedIn ? <Navigate to="/" /> : <EmployeeLogin />} />
          <Route path="/login/manager" element={isLoggedIn ? <Navigate to="/" /> : <ManagerLogin />} />
          <Route path="/login/hr" element={isLoggedIn ? <Navigate to="/" /> : <HRLogin />} />

          <Route path="/employeedashboard" element={<Employee />} />
          <Route path="/managerdashboard" element={<Manager />} />
          <Route path="/hrdashboard" element={<HR />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
