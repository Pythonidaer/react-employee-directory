import React, { useState, useEffect } from 'react';
import TableRows from "../TableRows"
import fetchEmployees from "../../utils/API";

function SearchResults() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  function loadUsers() {
    fetchEmployees().then(res => setEmployees(res));
  }

  return (
    <tbody>
      {employees.map(employee => {
        return(
          <TableRows
            key={Math.random()}
            image={employee.image}
            first={employee.first}
            last={employee.last}
            phone={employee.phone}
            email={employee.email}
            dob={employee.dob}
          />
        )
      })}
    </tbody>
  );
}

export default SearchResults;