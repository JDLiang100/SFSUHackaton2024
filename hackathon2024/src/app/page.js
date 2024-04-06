import Navbar from './component/navbar';
export default function Home() {
  return (
    <main>
      <Navbar />
      <h1>Find Parking!</h1>
      <div>
        <input placeholder="Your address"></input>
      </div>
    </main>
  )
}
