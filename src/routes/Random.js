import React, { Component } from "react";
import API from "../utils/API";
// import Container from "../components/Container";
// import SearchForm from "../components/SearchForm";
// import SearchResults from "../components/SearchResults";
// import Alert from "../components/Alert";

class Random extends Component {
  state = {
    // search: "",
    // breeds: [],
    results: [],
    error: ""
  };

  // When the component mounts, get a list of ten random users and update this.state.results
  componentDidMount() {
    API.getRandomTen()
      // .then(res => this.setState({ results: res.data.results }))
      .then(res => console.log(res.data.results))
      // .then(res => document.write(res.data.results[0]))
      .catch(err => console.log(err));
  }

//   handleInputChange = event => {
//     this.setState({ search: event.target.value });
//   };

//   handleFormSubmit = event => {
//     event.preventDefault();
//     API.getDogsOfBreed(this.state.search)
//       .then(res => {
//         if (res.data.status === "error") {
//           throw new Error(res.data.message);
//         }
//         this.setState({ results: res.data.message, error: "" });
//       })
//       .catch(err => this.setState({ error: err.message }));
//   };
  render() {
    return (
        <p>Data in console</p>
    //   <div>
    //     <Container style={{ minHeight: "80%" }}>
    //       <h1 className="text-center">Search By Breed!</h1>
    //       <Alert
    //         type="danger"
    //         style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
    //       >
    //         {this.state.error}
    //       </Alert>
    //       <SearchForm
    //         handleFormSubmit={this.handleFormSubmit}
    //         handleInputChange={this.handleInputChange}
    //         breeds={this.state.breeds}
    //       />
    //       <SearchResults results={this.state.results} />
    //     </Container>
    //   </div>
    );
  }
}

export default Random;
