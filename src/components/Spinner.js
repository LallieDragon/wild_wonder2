import React from 'react';
import { MDBIcon } from 'mdbreact';

const Spinner = () => {
  return (
    <div className="text-center" style={{ minHeight: "100vh"}}>
      <MDBIcon icon="spinner" spin size="3x" fixed style={{ position: "absolute", top: "20rem",  height: "2rem" }} />
    </div>
  )
}

export default Spinner;
