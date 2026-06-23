import React, { useState } from "react";

function EmployeeForm({ addEmployee }) {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [department, setDepartment] = useState("");
  const [salary, setSalary] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !position || !department || !salary) {
      alert("Please fill all fields");
      return;
    }

    const newEmployee = {
      id: Date.now(),
      name,
      position,
      department,
      salary,
    };

    addEmployee(newEmployee);

    setName("");
    setPosition("");
    setDepartment("");
    setSalary("");
  };

  return (
    <div className="form-container">
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter employee name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
}

export default EmployeeForm;
