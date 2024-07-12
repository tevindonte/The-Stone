import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import EmployeeList from '../components/EmployeeList';
import axios from 'axios';

function Home() {
  const [employees, setEmployees] = useState([]);

  const handleSearch = (query) => {
    axios.get(`/api/employees?search=${query}`)
      .then(response => setEmployees(response.data))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <header>
        <h1>Enterprise Directory</h1>
      </header>
      <SearchBar onSearch={handleSearch} />
      <EmployeeList employees={employees} />
      <footer>
        &copy; 2024 Travelers Insurance
      </footer>
    </div>
  );
}

export default Home;
