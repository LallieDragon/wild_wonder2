import React, { Component } from 'react';
import { MDBBtn, MDBIcon } from 'mdbreact';

import InfoSection from '../components/InfoSection';
import Spinner from '../components/Spinner';
import TuitionTable from '../components/TuitionTable';
import { initClient } from '../contentful/contentfulClient';
import registration from '../files/WWPRegistration.pdf'

class RegistrationContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      enrollmentContent: null,
      applicationContent: null,
      tuition: null
    }
    this.getTuitionContent = this.getTuitionContent.bind(this);
    this.getEnrollmentContent = this.getEnrollmentContent.bind(this);
    this.getApplicationContent = this.getApplicationContent.bind(this);
  }

  getEnrollmentContent = () => {
    let client = initClient()

    client.getEntry('3kOMkYrzTK8LurhqYZqLm1')
    .then((entry) => this.setState({
      enrollmentContent: entry.fields
    }))
    .catch('Error: ' + console.error)
  }

  getTuitionContent = () => {
    let client = initClient()

    client.getEntry('O2l2nPCKdexoODiKmwnYi')
    .then((entry) => this.setState({
      tuition: entry.fields
    }))
    .catch('Error: ' + console.error)
  }

  getApplicationContent = () => {
    let client = initClient()

    client.getEntry('31cuOKkGyk7GF9QV28Ls5F')
    .then((entry) => this.setState({
      applicationContent: entry.fields
    }))
    .catch('Error: ' + console.error)
  }

  render() {
    if (this.state.enrollmentContent === null) {
      this.getEnrollmentContent();
      return <Spinner />
    } else if (this.state.applicationContent === null) {
      this.getApplicationContent();
      return <Spinner />
    } else if (this.state.tuition === null) {
      this.getTuitionContent();
      return <Spinner />
    } else {
      console.log(this.state)
      return (
        <div className="container">
          <InfoSection content={this.state.applicationContent} />
          <TuitionTable content={this.state.tuition} />
          <InfoSection content={this.state.enrollmentContent} />
          <p className="brown-text mt-3 h4">Download Application for Enrollment</p>
          <a href={registration} download className="text-center">
            <MDBBtn rounded size="lg" color="info" style={{ marginBottom: "2rem"}}><MDBIcon size="3x" icon="file-download" className="ml-2" /></MDBBtn>
          </a>
        </div>
      )
    }
  }
}

export default RegistrationContainer;
