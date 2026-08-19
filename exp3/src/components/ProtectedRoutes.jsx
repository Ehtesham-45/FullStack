import React from 'react'

function ProtectedRoutes({ children }) {
  const loggedin = localStorage.getItem("loggedIn")
  if (!loggedin) {
    window.location.href="/login"
  }
  else {
    return children
  }
  
}
export default ProtectedRoutes