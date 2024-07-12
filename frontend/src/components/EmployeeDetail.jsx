// src/components/EmployeeDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function EmployeeDetail() {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    axios.get(`/api/employees/${id}`)
      .then(response => setEmployee(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!employee) return <div>Loading...</div>;

  return (
    <div className="employee-detail">
      <h2>{employee.name}</h2>
      <p>Phone: {employee.phone}</p>
      <p>Job Role: {employee.jobRole}</p>
      <p>Work Location: {employee.workLocation}</p>
      <p>Salary: {employee.salary}</p>
    </div>
  );
}

export default EmployeeDetail;
