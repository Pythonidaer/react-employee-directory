import React from "react";

function TableRows({ image, first, last, email, phone, dob }) {
    return (
        <tr>
            <td>
                <img src={image} alt="Employee" />
            </td>
            <td>{first}{" "}{last}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td>{dob}</td>
        </tr>
    );
}

export default TableRows;