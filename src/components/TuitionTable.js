import React from 'react';
import { MDBTable, MDBTableBody } from 'mdbreact';

const TuitionTable = (props) => {

  return (
    <MDBTable>
      <MDBTableBody>
        <tr className="brown-text">
          <td className="mr-3">{props.content.title1}</td>
          <td className="mr-3">{props.content.list.Tuition}</td>
        </tr>
        <tr className="brown-text">
          <td className="mr-3">Supplies & Materials Fee</td>
          <td className="mr-3">{props.content.list.Supplies}</td>
        </tr>
        <tr className="brown-text">
          <td className="mr-3">Application fee</td>
          <td className="mr-3">{props.content.list.Application}</td>
        </tr>
      </MDBTableBody>
    </MDBTable>
  );
}

export default TuitionTable;
