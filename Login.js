import React, { useState } from "react";

function Login({ onLogin }) {
  const [employeeId, setEmployeeId] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [role, setRole] = useState("Employee");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !employeeId ||
      !employeeName ||
      !email ||
      !department ||
      !role ||
      !password ||
      !confirmPassword
    ) {
      setMessage("Please fill all fields");
      return;
    }

    if (password.length < 6) {
      setMessage("Password must be at least 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Password and Confirm Password do not match");
      return;
    }

    setMessage("Login successful!");
    onLogin();
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Employee Management System</h1>
        <h2>Login Page</h2>

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
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="text"
            placeholder="Enter Department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />

          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option>Employee</option>
            <option>Admin</option>
            <option>HR</option>
            <option>Manager</option>
          </select>

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <div className="login-options">
            <label>
              <input
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
              />
              Show Password
            </label>

            <label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              Remember Me
            </label>
          </div>

          <button type="submit">Login</button>

          {message && <p className="message">{message}</p>}
        </form>
      </div>
    </div>
  );
}

export default Login;
