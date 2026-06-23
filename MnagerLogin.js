import React, { useState } from "react";

function ManagerLogin({ onLogin }) {
  const [managerId, setManagerId] = useState("");
  const [managerName, setManagerName] = useState("");
  const [email, setEmail] = useState("");
  const [team, setTeam] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!managerId || !managerName || !email || !team || !password) {
      setMessage("Please fill all Manager fields");
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
        <h1>Manager Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Manager ID"
            value={managerId}
            onChange={(e) => setManagerId(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Manager Name"
            value={managerName}
            onChange={(e) => setManagerName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Enter Manager Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Team Name"
            value={team}
            onChange={(e) => setTeam(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login as Manager</button>
          {message && <p className="message">{message}</p>}
        </form>
      </div>
    </div>
  );
}

export default ManagerLogin;
