// This is the React package, required for the framework!
// import React, { useState, useEffect } from 'react';
import React from 'react';
// We are using ES6 modules, so destructuring and renaming is allowed.
// A <Router> that uses the HTML5 history API to keep UI in sync with the URL
// <Route> is the most important component, as it renders some UI when its path matches the current URL.
import { BrowserRouter as Router, Route } from "react-router-dom";
// These are our routes and components... they don't exist yet!
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import Home from "./routes/Home";
import Random from "./routes/Random";
import SearchResults from "./components/SearchResults";

function App() {
    return (
        <Router>
            <Header />
            <SearchInput />
            {/* <Wrapper> */}
            <Route exact path="/" component={Home} />
            <Route exact path="/random" component={Random} />
            {/* </Wrapper> */}
            {/* <!-- Container is holding the table --> */}
            <div className="container-lg">
                {/* <!-- Optional JavaScript; choose one of the two! --> */}
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Email</th>
                            <th scope="col">DOB</th>
                        </tr>
                    </thead>
                    <SearchResults></SearchResults>
                    {/* Table Rows */}
                </table>
            </div>
        </Router>
    );
}

export default App;
