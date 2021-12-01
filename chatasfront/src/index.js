import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

import App from './App.jsx';

import "./components/seccionProductos/src/index.css"
import "bootstrap/dist/css/bootstrap.min.css"; {/* npm install bootstrap */}

Axios.defaults.baseURL = 'http://localhost:4000';

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);
