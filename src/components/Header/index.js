import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Header() {
  return (
    <header className="text-white text-center py-5 border-bottom border-5 border-danger">
        <h1>Employee Directory</h1>
        {/* <h3 className="mb-0">Click on carrots to filter by heading or use the search box to narrow your results</h3> */}
    </header>
  );
}

export default Header;
