import Navbar from './component/navbar';

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4">Find Parking!</h1>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Your address"
              className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="flex justify-between">
            <a href="/looking" className="text-indigo-500 hover:text-indigo-600">Looking</a>
            <a href="/offering" className="text-indigo-500 hover:text-indigo-600">Offering</a>
          </div>
        </div>
      </div>
    </main>
  );
}
