import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from '../assets/Travelers_share.jpg';
import { useNavigate } from 'react-router-dom';

function HR() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');
    if (userEmail) {
      axios.get(`http://localhost:3000/hr/${userEmail}`)
        .then(response => {
          console.log('HR Employee data:', response.data);
          // No need to set HR employee details in state
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, []);

  const handleSearch = () => {
    axios.get(`http://localhost:3000/hr/search?query=${searchTerm}`)
      .then(response => {
        console.log('Search results:', response.data);
        setSearchResults(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleLogout = () => {
    localStorage.clear();
    localStorage.removeItem('userEmail');
    setSearchResults([]);
    navigate('/');
  };

  return (
    <div className="App">
      <header>
        <h1>HR Dashboard</h1>
        <button onClick={handleLogout}>Logout</button>
      </header>
      <div className="search-bar">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by name"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="search-results">
        <h2>Search Results</h2>
        {searchResults.length > 0 ? (
          searchResults.map((employee, index) => (
            <div key={index} className="employee-details">
              <p><strong>Name:</strong> {employee.Name}</p>
              <p><strong>Birth Date:</strong> {new Date(employee.Birth_Date).toLocaleDateString()}</p>
              <p><strong>Phone Number:</strong> {employee.Phone_Number}</p>
              <p><strong>Job Role:</strong> {employee.Job_Role}</p>
              <p><strong>Work Location:</strong> {employee.Work_Location}</p>
              <p><strong>Salary:</strong> {employee.Salary}</p>
              <p><strong>Email:</strong> {employee.Email}</p>
            </div>
          ))
        ) : (
          <p>No search results found</p>
        )}
      </div>
      <footer>
        &copy; 2024 Travelers Insurance
      </footer>
      <img src={logo} alt="Travelers Logo" className="logo" />
    </div>
  );
}

export default HR;
