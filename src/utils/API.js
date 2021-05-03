/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

async function fetchEmployees() {
    return await axios.get('https://randomuser.me/api/?results=6&inc=picture,name,phone,email,dob').then(res => {
        const employees = res.data.results;
        return employees.map(employee => {
            return {
                first: employee.name.first,
                last: employee.name.last,
                email: employee.email,
                phone: employee.phone,
                image: employee.picture.thumbnail,
                dob: employee.dob.date
            }
        });
    });
}

export default fetchEmployees;