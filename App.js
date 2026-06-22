import React, { useState } from "react";
import "./App.css";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";

function App() {
  const [employees, setEmployees] = useState([]);

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  const deleteEmployee = (id) => {
    const updatedEmployees = employees.filter((emp) => emp.id !== id);
    setEmployees(updatedEmployees);
  };

  return (
    <div className="app">
      <h1>Employee Management System</h1>
      <EmployeeForm addEmployee={addEmployee} />
      <EmployeeList employees={employees} deleteEmployee={deleteEmployee} />
    </div>
  );
}

export default App;
