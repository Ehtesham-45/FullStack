import React from 'react'
import Student from '../data/Student'

function StudentList() {
  return (
    <div>
      <h1>Student List</h1>

      {Student.map((student) => (
        <div key={student.id}>
          <h3>{student.name}</h3>
          <p>Roll No: {student.rollNo}</p>
          <p>Course: {student.course}</p>
        </div>
      ))}
    </div>
  )
}

export default StudentList