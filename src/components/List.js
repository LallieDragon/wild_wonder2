import React from 'react';
import { MDBCol } from 'mdbreact';

const List = (props) => {
  let content = [];

  if (Object.keys(props.list).length !== 6) {
    for(let i = 0; i < Object.keys(props.list).length; i++) {
    content.push(
      <p key={[i]} className="h4 brown-text info" style={{textAlign: "left", color: "#795548"}}>{props.list[i]}</p>
    )
  }
} else {
  for(let i = 0; i < Object.keys(props.list).length; i++) {
  content.push(
    <p key={[i]} className="h4 brown-text info" style={{textAlign: "center", color: "#795548"}}>{props.list[i]}</p>
  )}
}
  if (props.title === "Qualities Worth Cultivating") {
    return(
      <MDBCol>
        <p className="h2 text-center brown-text mt-3">{props.title}</p>
        { content }
      </MDBCol>
    )
  } else {
  return(
    <MDBCol style={{ paddingLeft: "30px" }}>
      <p className="h2 text-left brown-text mt-3">{props.title}</p>
      { content }
    </MDBCol>
  )}
}

export default List;
