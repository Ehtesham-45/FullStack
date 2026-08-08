import React from 'react'
import { Link } from 'react-router'

function Dashboard() {
  const studentList = []
  return (
    <div>
      <h4>Dashboard</h4>
      <h6>Total Students {studentList.length}</h6>
      <Link to="/studentlist">View Students</Link>
    </div>
  )
}

export default Dashboard