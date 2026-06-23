import React, { useState } from "react";

function HRLogin({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setMessage("Please fill username and password");
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
        <h1>HR Login</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter HR Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login as HR</button>

          {message && <p className="message">{message}</p>}
        </form>
      </div>
    </div>
  );
}

export default HRLogin;
