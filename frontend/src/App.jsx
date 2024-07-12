import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Employee from './pages/Employee';
import EmployeeLogin from './pages/EmployeeLogin';
import ManagerLogin from './pages/ManagerLogin';
import HRLogin from './pages/HRLogin';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employee/:id" element={<Employee />} />
          <Route path="/login/employee" element={<EmployeeLogin />} />
          <Route path="/login/manager" element={<ManagerLogin />} />
          <Route path="/login/hr" element={<HRLogin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
