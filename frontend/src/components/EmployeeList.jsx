import React from 'react';
import { Link } from 'react-router-dom';

function EmployeeList({ employees }) {
  return (
    <div>
      <h2>Employee Directory</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            <Link to={`/employee/${employee.id}`}>
              {employee.name} - {employee.jobRole}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;
