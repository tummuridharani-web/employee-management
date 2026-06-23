import React, { useState } from "react";

function EmployeeLogin({ onLogin }) {
  const [employeeId, setEmployeeId] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!employeeId || !employeeName || !email || !department || !password) {
      setMessage("Please fill all Employee fields");
      return;
    }

    if (password.length < 6) {
      setMessage("Password must be at least 6 characters");
      return;
    }

    setMessage("");
    onLogin();
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Employee Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Employee ID"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Employee Name"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Enter Employee Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login as Employee</button>
          {message && <p className="message">{message}</p>}
        </form>
      </div>
    </div>
  );
}

export default EmployeeLogin;
