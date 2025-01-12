// src/pages/EmployeePage.js
import React, { useState,useEffect } from 'react';
import EmployeeForm from '../components/EmployeeForm';
import EmployeeList from '../components/EmployeeList';
import { getEmployees } from '../services/employeeService';
const EmployeePage = () => {
  const [employees, setEmployees] = useState([]);
  const[currentEmployee,setCurrentEmployee]=useState(null)

  useEffect(()=>{
    getEmployees().then(response =>{
      setEmployees(response.data);
    });
  },[]);
  const handleEmployeeSaved = (savedEmployee) => {
    if (currentEmployee) {
      setEmployees(employees.map(emp => emp.id === savedEmployee.id ? savedEmployee : emp));
    } else {
      setEmployees([...employees, savedEmployee]);
    }
    setCurrentEmployee(null);
  };

  const handleEdit = (employee) => {
    setCurrentEmployee(employee);
  };

  return (
    <div>
      <h1>Employee Management</h1>
      <EmployeeForm currentEmployee={currentEmployee} onEmployeeSaved={handleEmployeeSaved} />
      <EmployeeList onEdit={handleEdit} />
    </div>
  );
};

export default EmployeePage;
