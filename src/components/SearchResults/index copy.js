import React, { useEffect, useState } from "react";
import API from "../../utils/API";
// import "./style.css";

function SearchResults(props) {

  const [employee, setEmployee] = useState({});

  useEffect(() => {
    loadEmployees();
  }, []);

  function loadEmployees() {
    API.fetchEmployees()
      .then(employees => {
        setEmployee(employees);
        console.log(employee.picture);
      })
      .catch(err => console.log(err));

  }


  return (
    <tbody>
      <tr>
        <td scope="row">
          <img src={employee.picture} alt="Employee" />
        </td>
        <td>{employee.name}</td>
        <td>{employee.email}</td>
        <td>{employee.phone}</td>
        <td>{employee.dob}</td>
      </tr>
    </tbody>
    // <ul className="list-group search-results">
    //   {props.results.map(result => (
    //     <li key={result} className="list-group-item">
    //       <img alt="Dog" src={result} className="img-fluid" />
    //     </li>
    //   ))}
    // </ul>

    /*
        {props.results.map(result => (
            <tr>
                <th scope="row"><img src={picture} alt="Employee"></th>
                <td>{name}</td>
                <td>{phone}</td>
                <td>{email}</td>
                <td>{dob}</td>
            </tr>
        ))}

                //     <tr>
                //     <th scope="row"><img src="https://randomuser.me/api/portraits/thumb/men/26.jpg" alt="Employee"></th>
                //     <td>Ernest Henderson</td>
                //     <td>08-1173-6736</td>
                //     <td>ernest.henderson@example.com</td>
                //     <td>1984-05-04T04:37:26.938Z</td>
                // </tr>
*/
  );
}

export default SearchResults;
