// This is the React package, required for the framework!
import React from "react";
// We are using ES6 modules, so destructuring and renaming is allowed.
// A <Router> that uses the HTML5 history API to keep UI in sync with the URL
// <Route> is the most important component, as it renders some UI when its path matches the current URL.
import { BrowserRouter as Router, Route } from "react-router-dom";
// These are our routes and components... they don't exist yet!
// import Discover from "./pages/Discover";
// import About from "./pages/About";
// import Search from "./pages/Search";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Wrapper from "./components/Wrapper";
import Wrapper from "./components/Wrapper";
import Home from "./routes/Home";
import Random from "./routes/Random";

function App() {
    return (
        <Router>
            <div>
                {/* <Navbar /> */}
                <Wrapper>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/random" component={Random} />
                </Wrapper>
            </div>
        </Router>
    );
}


// function App() {
//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <Wrapper>
//           <Route exact path="/" component={About} />
//           <Route exact path="/about" component={About} />
//           <Route exact path="/discover" component={Discover} />
//           <Route exact path="/search" component={Search} />
//         </Wrapper>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

export default App;
