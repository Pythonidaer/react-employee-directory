// import React, { useEffect, useState } from "react";
import React, { Component } from "react";
// import TableRows from "../components/TableRows"
import TableRows from "../TableRows"
// eventually I might add a component here that includes search form or table map
import API from "../../utils/API";
// import "./style.css";

class SearchResults extends Component {
  state = {
    results: []
    // dob: {},
    // email: "",
    // name: {},
    // phone: "",
    // picture: {}
  };

  // When this component mounts, search for six Random API Users
  componentDidMount() {
    // this.loadEmployees();
    API.fetchEmployees()
    // res.data logs an object, including an array of six objects
      .then(res => console.log(res.data.results))
      .then(res => this.setState({ results: res.data.results }))
      .catch(err => console.log(err));
  }

  // loadEmployees = () => {
    // API.fetchEmployees()
      // .then(res => console.log(res.data.results[0]))
      // .then(res => console.log(res.data.results[0].picture.thumbnail))
      // .then(res => console.log(res.data))
      // .then(res => this.setState({ result: res.data.results[0] }))
      // .then(res => 
        // this.setState({ result: res.data.results }, console.log(res.data.results)))
      // .catch(err => console.log(err));
  // };

  render() {
    return (
        <TableRows results={this.state.results}/>
    );
  }
}

export default SearchResults;