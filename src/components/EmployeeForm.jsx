import React,{useEffect, useState} from "react";
import { createEmployee,updateEmployee } from "../services/employeeService";




const EmployeeForm=({currentEmployee,onEmployeeSaved})=> {
    const [name,setName]=useState('');
    const [choice,setChoice]=useState('');

    useEffect(()=>{
      console.log(currentEmployee);
      if(currentEmployee){
        setName(currentEmployee.name);
        setChoice(currentEmployee.choice)
      }
    },[currentEmployee])

    const handleSubmit=(e)=>{
        // e.preventDefault(); this is stopping from rendering
        const employee ={name,choice};
        if(currentEmployee){
          console.log(currentEmployee);
          updateEmployee(currentEmployee.id,employee).then(response =>{
            onEmployeeSaved(response.data);
          });
        }else{
          createEmployee(employee).then(response =>{
            onEmployeeSaved(response.data);
          });
        }
        
            setName('');
            setChoice('');

            
        };
    

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name" required/>
        <input type="text" value={choice} onChange={(e)=>setChoice(e.target.value)} placeholder="Choice" required/>
        <button type="submit">{currentEmployee?'update':'add'} employee</button>
      </form>
    </div>
  );
};

export default EmployeeForm
