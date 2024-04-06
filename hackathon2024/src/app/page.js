import Navbar from './component/navbar';
export default function Home() {
  return (
    <main>
      <Navbar />
      <h1>Find Parking!</h1>
      <div>
        <input placeholder="Your address"></input>
      </div>
      <div>
      <a href="/looking" className="nav-link">Looking</a>
      <a href="/offering" className="nav-link">Offering</a>
      </div>
    </main>
  )
}
