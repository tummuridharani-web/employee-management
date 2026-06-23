import React from "react";

function EmployeeList({ employees, deleteEmployee, role }) {
  return (
    <div className="list-container">
      <h2>Employee List</h2>

      {employees.length === 0 ? (
        <p>No employees added yet</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Department</th>
              <th>Salary</th>
              {(role === "HR" || role === "Manager") && <th>Action</th>}
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.name}</td>
                <td>{emp.position}</td>
                <td>{emp.department}</td>
                <td>{emp.salary}</td>
                {(role === "HR" || role === "Manager") && (
                  <td>
                    <button onClick={() => deleteEmployee(emp.id)}>Delete</button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default EmployeeList;
