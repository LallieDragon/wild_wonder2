import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';

import '../styles/ContactForm.css';

const ContactForm = (props) => {
  return (
    <MDBContainer>
      <MDBRow className="contact-form">
        <MDBCol>
          <form id="contact-form" action={`https://formspree.io/${props.email}`} method="POST">
            <p className="h4 text-center mb-4 brown-text">Write us!</p>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" className="form-control" />

            <br />

            <label htmlFor="email">Email</label>
            <input type="email" name="replyto" className="form-control" />

            <br />

            <label htmlFor="subject">Subject</label>
            <input type="text" name="subject" className="form-control" />

            <br />

            <label htmlFor="message">Message</label>
            <textarea type="text" name="message" id="message" className="form-control" rows="3" required="" />

            <div className="text-center mt-4">
              <MDBBtn style={{ marginBottom: "2rem" }} color="light-green" outline type="submit" value="Send">
                Send
                <MDBIcon far icon="paper-plane" className="ml-2" />
              </MDBBtn>
            </div>
          </form>
        </MDBCol>

      </MDBRow>
    </MDBContainer>
  );
};


export default ContactForm;
