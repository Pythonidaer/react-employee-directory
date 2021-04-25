// We need to import React in order to use it.
import React from 'react';
// Entry point to the DOM and server renderers for React.
import ReactDOM from 'react-dom';
// When we need to import an App.js
import App from './App';
// import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(<App />, document.getElementById('root'));
