import React from 'react';
import { MDBContainer } from 'mdbreact';

import '../styles/InfoSection.css';

const InfoSection = (props) => {
  return (
    <MDBContainer fluid className="container text-center brown-text mt-3">
      <h1 className="title">{props.content.title}</h1>
      <p className="lead">{props.content.body}</p>
      <br />
      <p className="additional">{props.content.additionalContent || ""}</p>
    </MDBContainer>
  )
}

export default InfoSection;
