import React from "react";
// import "./style.css";

function TableRows(props) {
    return (
        <tbody>
            {props.results.map(result => (
                <tr key={result}>
                    <td>
                        <img src={result.picture.thumbnail} alt="Employee" />
                    </td>
                </tr>
            ))}
        </tbody>
    );
}

export default TableRows;