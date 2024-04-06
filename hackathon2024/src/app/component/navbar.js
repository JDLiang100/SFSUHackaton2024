import React from 'react';


function Navbar() {
  return (
    <nav className="navbar">
      <div className="left-links">
        <a href="/" className="home-link">
          Home
        </a>
      </div>
      <div className="right-links">
        <a href="/signup" className="nav-link">Sign Up</a>
        <a href="/login" className="nav-link">Log In</a>
      </div>
    </nav>
  );
}

export default Navbar;
