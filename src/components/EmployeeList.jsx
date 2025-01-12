// src/components/EmployeeList.js
import React, { useState, useEffect } from 'react';
import { getEmployees, deleteEmployee } from '../services/employeeService';

const EmployeeList = ({onEdit}) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getEmployees().then(response => {
      setEmployees(response.data);
    });
  }, []);

  const handleDelete = (id) => {
    deleteEmployee(id).then(() => {
      setEmployees(employees.filter(employee => employee.id !== id));
    });
  };

  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map(employee => (
          <li key={employee.id}>
            {employee.name} - {employee.choice}
            <button onClick={() => handleDelete(employee.id)}>Delete</button>
            <button onClick={() => onEdit(employee)}>Edit</button>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
