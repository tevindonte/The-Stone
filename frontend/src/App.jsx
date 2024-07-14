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
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/employee" element={<EmployeeLogin />} />
          <Route path="/login/manager" element={<ManagerLogin />} />
          <Route path="/login/hr" element={<HRLogin />} />

          <Route path="/employeedashboard" element={<Employee />} />
          <Route path="managerdashboard" element={<Manager />} />
          <Route path="hrdashboard" element={<HR />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
