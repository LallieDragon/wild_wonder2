import React from 'react';
import { MDBCol, MDBRow } from 'mdbreact';

import { initClient } from '../contentful/contentfulClient';

import ContactForm from '../components/ContactForm';
import Spinner from '../components/Spinner';
import SocialMedia from '../components/SocialMedia';

class ContactContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      socialContent: null
    }
    this.getSocialContent = this.getSocialContent.bind(this);
  }

  getSocialContent = () => {
    let client = initClient()

    client.getEntry('7iC7TbhEqiJKolSVr7mDRN')
    .then((entry) => this.setState({
      socialContent: entry.fields
     }))
    .catch('Error: ' + console.error)
  }

  render() {
    if (this.state.socialContent === null) {
      this.getSocialContent()
      return <Spinner />
    }

    return(
      <MDBRow className="contact-container mt-3" style={{ color: "#3e2723"}}>
        <MDBCol md="6">
          <ContactForm email={this.state.socialContent.links[0]}/>
        </MDBCol>
        <MDBCol md="6">
          <SocialMedia content={this.state.socialContent.links[1]}/>
        </MDBCol>
      </MDBRow>
    )
  }
}

export default ContactContainer;
