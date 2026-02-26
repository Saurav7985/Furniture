import React from 'react'
import '../styles/Navbar.scss'

const Navbar = () => {
  return (
    
   <header className="navbar">
      <div className="navbar__logo">
        <h2>MyWebsite</h2>
      </div>

      <nav className="navbar__links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>

      <div className="navbar__actions">
        <input
          type="text"
          placeholder="Search..."
          className="navbar__search"
        />
        <button className="btn login">Login</button>
        <button className="btn signup">Sign Up</button>
      </div>
    </header>
  
  )
}

export default Navbar