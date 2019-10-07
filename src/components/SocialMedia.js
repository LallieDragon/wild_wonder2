import React from 'react';
import { MDBCol, MDBRow, MDBBtn, MDBIcon } from 'mdbreact';

const SocialMedia = (props) => {
    return(
      <MDBCol>
        <p className="h4 text-center mb-4 brown-text">Message us through Facebook!</p>
        <MDBRow style={{ display: "flex", justifyContent: "center" }}>
          <a target="_blank" rel="noopener noreferrer" href={props.content}>
            <MDBBtn size="md" color="indigo" style={{ width: "10rem" }}>
              <MDBIcon fab icon="facebook-f" className="ml-2" style={{ marginRight: "10px"}} />Facebook
            </MDBBtn>
          </a>
        </MDBRow>
      </MDBCol>
    )
  }

export default SocialMedia;
