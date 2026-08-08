import React from "react";

function StudentCard(props) {
  return (
    <div className="card">
      <h2>{props.studentdata.name}</h2>
      <p>Age: {props.studentdata.age}</p>
      <p>Course: {props.studentdata.course}</p>
      <p>Grade: {props.studentdata.grade}</p>
    </div>
  );
}

export default StudentCard;