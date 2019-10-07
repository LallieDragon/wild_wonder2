import React from 'react';
import { MDBContainer } from 'mdbreact';

const InfoSection = (props) => {
  return (
    <MDBContainer fluid className="container text-center brown-text mt-3">
      <h2 className="title">{props.content.title}</h2>
      <p className="body lead">{props.content.body}</p>
      <br />
      <p className="body additional">{props.content.additionalContent || ""}</p>
    </MDBContainer>
  )
}

export default InfoSection;
