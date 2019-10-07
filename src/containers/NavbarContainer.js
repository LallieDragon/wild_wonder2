import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse } from "mdbreact";

import { initClient } from '../contentful/contentfulClient';
import Spinner from '../components/Spinner';

import logo from '../logo.jpg'
import '../styles/Navbar.css';

class NavbarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      tabNames: null
    }
    this.getContent = this.getContent.bind(this);
    this.toggleCollapse = this.toggleCollapse.bind(this);
  }

getContent = () => {
  let client = initClient()

  client.getEntry('3zouiAjgy8RAs72I3aNmEN')
  .then((entry) => this.setState({
    tabNames: entry.fields
   }))
  .catch('Error: ' + console.error)
}

toggleCollapse = () => {
  const currentlyOpen = this.state.isOpen;
  this.setState({ isOpen: !currentlyOpen });
}

render() {
  if (this.state.tabNames === null) {
    this.getContent();
    return <Spinner />
  } else if (this.state.tabNames !== null) {
    let content = this.state.tabNames.tabNames.map((tabName) =>
      <MDBNavItem key={tabName}>
        <MDBNavLink className="nav-links" to={`/${tabName}`}>{tabName}</MDBNavLink>
      </MDBNavItem>
    )
    return (
      <div>
        <MDBNavbar color="light-green darken-1" dark expand="md">
          <MDBNavbarBrand>
            <img alt="logo" href="/" src={ logo } style={{ height: '150px'}}/>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
              { content }
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </div>
      );
  }
  }
}

export default NavbarContainer;
