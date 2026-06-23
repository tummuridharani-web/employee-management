import React, { useState } from "react";
import "./App.css";
import RoleSelector from "./components/RoleSelector";
import HRLogin from "./components/HRLogin";
import ManagerLogin from "./components/ManagerLogin";
import EmployeeLogin from "./components/EmployeeLogin";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";

function App() {
  const [selectedRole, setSelectedRole] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [employees, setEmployees] = useState([]);

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setSelectedRole("");
  };

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  const deleteEmployee = (id) => {
    const updatedEmployees = employees.filter((emp) => emp.id !== id);
    setEmployees(updatedEmployees);
  };

  return (
    <div className="app">
      {!selectedRole ? (
        <RoleSelector onSelectRole={handleRoleSelect} />
      ) : !isLoggedIn ? (
        <>
          {selectedRole === "HR" && <HRLogin onLogin={handleLogin} />}
          {selectedRole === "Manager" && <ManagerLogin onLogin={handleLogin} />}
          {selectedRole === "Employee" && <EmployeeLogin onLogin={handleLogin} />}
        </>
      ) : (
        <>
          <div className="top-bar">
            <h1>{selectedRole} Dashboard</h1>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>

          {(selectedRole === "HR" || selectedRole === "Manager") && (
            <EmployeeForm addEmployee={addEmployee} />
          )}

          <EmployeeList employees={employees} deleteEmployee={deleteEmployee} role={selectedRole} />
        </>
      )}
    </div>
  );
}

export default App;
