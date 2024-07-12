// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Adjust the base URL as necessary
});

export const fetchEmployees = (query) => {
  return api.get(`/employees?search=${query}`);
};

export const fetchEmployeeById = (id) => {
  return api.get(`/employees/${id}`);
};

export const login = (credentials) => {
  return api.post('/login', credentials);
};

export default api;
