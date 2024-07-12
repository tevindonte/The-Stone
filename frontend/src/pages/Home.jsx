import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import EmployeeList from '../components/EmployeeList';
import axios from 'axios';
import logo from '../assets/Travelers_share.jpg';

function Home() {
  const [employees, setEmployees] = useState([]);

  const handleSearch = (query) => {
    axios.get(`/api/employees?search=${query}`)
      .then(response => setEmployees(response.data))
      .catch(error => console.error(error));
  };

  return (
    <div className="App">
      <header>
        <h1>Enterprise Directory</h1>
      </header>
      <SearchBar onSearch={handleSearch} />
      <EmployeeList employees={employees} />
      <footer>
        &copy; 2024 Travelers Insurance
      </footer>
      <img src={logo} alt="Travelers Logo" className="logo" /> {/* Add the logo */}
    </div>
  );
}

export default Home;
