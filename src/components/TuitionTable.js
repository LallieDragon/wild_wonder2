import React from 'react';
import { MDBTable, MDBTableBody } from 'mdbreact';

const TuitionTable = (props) => {
  return (
    <MDBTable>
      <MDBTableBody>
        <tr className="brown-text">
          <td className="mr-3">Full-Time Tuition for children in diapers: </td>
          <td className="mr-3">{props.content.list.diaperTuition}</td>
        </tr>
        <tr className="brown-text">
          <td className="mr-3">Full-Time Tuition for children who are diaper-free:</td>
          <td className="mr-3">{props.content.list.freedomTuition}</td>
        </tr>
        <tr className="brown-text">
          <td className="mr-3">Supplies & Materials Fee</td>
          <td className="mr-3">{props.content.list.supplies}</td>
        </tr>
      </MDBTableBody>
    </MDBTable>
  );
}

export default TuitionTable;
