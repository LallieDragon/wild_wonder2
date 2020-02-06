import React, { Component } from 'react';
import { MDBRow } from 'mdbreact';

import InfoSection from '../components/InfoSection';
import Spinner from '../components/Spinner';
import List from '../components/List.js';

import { initClient } from '../contentful/contentfulClient';

class ProgramContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      approachContent: null,
      philosophyContent: null,
      philosophyListsContent: null,
      programContent: null
    }
    this.getProgramContent = this.getProgramContent.bind(this);
    this.getApproachContent = this.getApproachContent.bind(this);
    this.getPhilosophyContent = this.getPhilosophyContent.bind(this);
    this.getPhilosophyListsContent = this.getPhilosophyListsContent.bind(this);
  }

  getProgramContent = () => {
    let client = initClient()

    client.getEntry('2OYXJiAaxTwPExi2r7uiAr')
    .then((entry) => this.setState({
      programContent: entry.fields
     }))
    .catch('Error: ' + console.error)
  }

  getApproachContent = () => {
    let client = initClient()

    client.getEntry('5c5d4mLD1rVrUw87KJI52n')
    .then((entry) => this.setState({
      approachContent: entry.fields
     }))
    .catch('Error: ' + console.error)
  }

  getPhilosophyContent = () => {
    let client = initClient()

    client.getEntry('4qfPRdq4Lun5lNyZMAiZW0')
    .then((entry) => this.setState({
      philosophyContent: entry.fields
     }))
    .catch('Error: ' + console.error)
  }

  getPhilosophyListsContent = () => {
    let client = initClient()

    client.getEntry('5mrR3jQCpwfCtnD3Q0v11v')
    .then((entry) => this.setState({
      philosophyListsContent: entry.fields
     }))
    .catch('Error: ' + console.error)
  }

  render() {
    if (this.state.programContent === null) {
      this.getProgramContent();
      return <Spinner />
    } else if (this.state.approachContent === null) {
      this.getApproachContent();
      return <Spinner />
    } else if (this.state.philosophyContent === null) {
      this.getPhilosophyContent();
      return <Spinner />
    } else if (this.state.philosophyListsContent === null) {
      this.getPhilosophyListsContent();
      return <Spinner />
    } else {
      return (
        <div className="container">
          <InfoSection content={this.state.programContent} />
          <InfoSection content={this.state.approachContent} />
          <InfoSection content={this.state.philosophyContent} />
          <MDBRow>
            <List title={this.state.philosophyListsContent.title1} list={this.state.philosophyListsContent.list} />
            <List title={this.state.philosophyListsContent.title2} list={this.state.philosophyListsContent.listTwo} />
          </MDBRow>
        </div>
      )
    }
  }
}

export default ProgramContainer;
