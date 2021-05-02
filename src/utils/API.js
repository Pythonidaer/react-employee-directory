/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

// export default {
//     getRandomSix: function () {
//         return axios.get("https://randomuser.me/api/?results=6&inc=picture,name,phone,email,dob");
//     }
// }

export default {
    fetchEmployees: function () {
        return axios
            .get("https://randomuser.me/api/?results=6&inc=picture,name,phone,email,dob")
            // .then(res => {
                // this is an object with key results
                // const employees = res.data.results;
                // console.log(employees);
                // return employees.map(employee => {
                    // console.log(employees)
                    // return {
                    //     picture: employee.picture,
                    //     name: employee.name,
                    //     phone: employee.phone,
                    //     email: employee.email,
                    //     dob: employee.dob
                    // };
                // });
            // });
    }
};

// export default {
//   getRandomDog: function() {
//     return axios.get("https://dog.ceo/api/breeds/image/random");
//   },
//   getDogsOfBreed: function(breed) {
//     return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
//   },
//   getBaseBreedsList: function() {
//     return axios.get("https://dog.ceo/api/breeds/list");
//   }
// };
