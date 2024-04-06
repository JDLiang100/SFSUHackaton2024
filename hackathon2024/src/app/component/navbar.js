import React from 'react';

function Navbar() {
  return (
    <nav className="navbar" style={{ fontFamily: 'Arial, sans-serif', fontSize: '16px', height: '80px', backgroundColor: 'white' }}>
      <div className="left-links">
        <a href="/" className="home-link">
          <img src="https://media.istockphoto.com/id/1144092062/vector/car-flat-icon.jpg?s=1024x1024&w=is&k=20&c=VGCElWctg6Sd2zUl5BYX09KjRscy_zCD4yjEEOyLdvU=" alt="Home" style={{ width: '72px', height: '72px' }} />
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
