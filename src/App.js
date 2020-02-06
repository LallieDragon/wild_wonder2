import React from 'react';
import { HashRouter } from 'react-router-dom';

import NavbarContainer from './containers/NavbarContainer.js';
import Routes from './Routes.js';

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import './App.css';

function App() {
  return (
    <HashRouter basename={"/"} className="App">
      <NavbarContainer />
      <Routes />
    </HashRouter>
  );
}

export default App;
