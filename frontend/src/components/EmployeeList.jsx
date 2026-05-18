import API from "../services/api";

function EmployeeList({ employees, fetchEmployees }) {
  const deleteEmployee = async (id) => {
    try {
      await API.delete(`/employees/${id}`);

      alert("Employee Deleted");

      fetchEmployees();
    } catch (error) {
      console.log(error);
    }
  };

  const updatePerformance = async (id) => {
    const score = prompt("Enter New Performance Score");

    try {
      await API.put(`/employees/${id}`, {
        performanceScore: score,
      });

      alert("Performance Updated");

      fetchEmployees();
    } catch (error) {
      console.log(error);
    }
  };

  const sortedEmployees = [...employees].sort(
    (a, b) => b.performanceScore - a.performanceScore
  );

  return (
    <div>
      <h2>Employee Rankings</h2>

      {sortedEmployees.map((employee, index) => (
        <div
          key={employee._id}
          style={{
            background: "white",
            padding: "20px",
            marginBottom: "15px",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          }}
        >
          <h2>
            #{index + 1} - {employee.name}
          </h2>

          <p>Email: {employee.email}</p>

          <p>Department: {employee.department}</p>

          <p>Skills: {employee.skills.join(", ")}</p>

          <p>
            Performance Score:
            <strong> {employee.performanceScore}</strong>
          </p>

          <p>Experience: {employee.experience} years</p>

          <button
            onClick={() => updatePerformance(employee._id)}
            style={{
              marginRight: "10px",
              padding: "8px",
            }}
          >
            Update
          </button>

          <button
            onClick={() => deleteEmployee(employee._id)}
            style={{
              padding: "8px",
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default EmployeeList;