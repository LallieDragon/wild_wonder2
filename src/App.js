import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import NavbarContainer from './containers/NavbarContainer.js';
import Routes from './Routes.js';

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import './App.css';

function App() {
  return (
    <Router className="App">
      <NavbarContainer />
      <Routes />
    </Router>
  );
}

export default App;
