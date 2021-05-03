import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function SearchInput() {
    return (
        <div className="p-4 mb-4">
            <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="This does nothing"
                />
        </div>
  );
}

export default SearchInput;










