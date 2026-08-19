import React from 'react'
import {Link, useLocation} from 'react-router'
function NavBar() {
  const location = useLocation()
  return (
      <header className="app-header">
        <Link className="brand" to="/"><span className="brand-mark">S</span><span>Student<span className="brand-muted">ly</span></span></Link>
        <nav className="app-nav" aria-label="Main navigation">
          <Link className={location.pathname === '/' ? 'is-active' : ''} to='/'>Home</Link>
          <Link className={location.pathname === '/dashboard' ? 'is-active' : ''} to='/dashboard'>Dashboard</Link>
          <Link className={location.pathname === '/studentlist' ? 'is-active' : ''} to='/studentlist'>Students</Link>
        </nav>
        <Link className="profile-chip" to="/dashboard"><span>AD</span><strong>Admin</strong><small>⌄</small></Link>
      </header>
  )
}

export default NavBar