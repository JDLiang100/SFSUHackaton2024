export default function Home() {
  return (
    <main>
       <div className="App">
        <nav className="navbar">
          <div className="left-links">
            <a href="/" className="nav-link">Home</a>
          </div>
          <div className="right-links">
            <a href="/signup" className="nav-link">Sign Up</a>
            <a href="/login" className="nav-link">Log In</a>
          </div>
        </nav>
      </div>
      <h1>Find Parking!</h1>
      <div>
        <input placeholder="Your address"></input>
      </div>
    </main>
  )
}
