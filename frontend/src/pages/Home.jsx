import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeList from "../components/EmployeeList";
import SearchFilter from "../components/SearchFilter";

import API from "../services/api";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Home() {
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    try {
      const res = await API.get("/employees");

      setEmployees(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div
      style={{
        background: "#f4f7fc",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <Navbar />

      <h1
        style={{
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        AI Employee Performance System
      </h1>

      <SearchFilter setEmployees={setEmployees} />

      <br />

      <EmployeeForm fetchEmployees={fetchEmployees} />

      <br />

      <h2>Performance Analytics</h2>

      <div
        style={{
          width: "100%",
          height: 300,
          background: "white",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <ResponsiveContainer>
          <BarChart data={employees}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="performanceScore" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <br />

      <EmployeeList
        employees={employees}
        fetchEmployees={fetchEmployees}
      />
    </div>
  );
}

export default Home;