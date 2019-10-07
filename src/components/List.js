import React from 'react';
import { MDBCol } from 'mdbreact';

const List = (props) => {

  let content = [];
  for(let i = 0; i < Object.keys(props.list).length; i++) {
  content.push(
    <p key={props.list[i]} className="h4 brown-text" style={{textAlign: "left", color: "#795548"}} className="info">{props.list[i]}</p>
  )
}

  return(
    <MDBCol>
      <p className="h2 text-left brown-text mt-3">{props.title}</p>
      { content }
    </MDBCol>
  )
}

export default List;
