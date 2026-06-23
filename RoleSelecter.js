import React from "react";

function RoleSelector({ onSelectRole }) {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Employee Management System</h1>
        <h2>Select Login Role</h2>

        <div className="role-buttons">
          <button onClick={() => onSelectRole("HR")}>HR Login</button>
          <button onClick={() => onSelectRole("Manager")}>Manager Login</button>
          <button onClick={() => onSelectRole("Employee")}>Employee Login</button>
        </div>
      </div>
    </div>
  );
}

export default RoleSelector;
