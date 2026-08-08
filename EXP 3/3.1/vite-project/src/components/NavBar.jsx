import React from 'react'
import { Link } from 'react-router'

function NavBar() {
  return (

    <div>
        <nav>
            <h5>Student Management System</h5>
           <Link to="/">Home</Link>
              <Link to="/login">Login</Link>
           <Link to="/dashboard">Dashboard</Link>
    
          
        </nav>
    </div>
  )
}

export default NavBar