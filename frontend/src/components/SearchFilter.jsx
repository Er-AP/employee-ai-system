import { useState } from "react";
import API from "../services/api";

function SearchFilter({ setEmployees }) {
  const [department, setDepartment] = useState("");

  const handleSearch = async () => {
    try {
      const res = await API.get(
        `/employees/search?department=${department}`
      );

      setEmployees(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Search by Department</h2>

      <input
        type="text"
        placeholder="Department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchFilter;