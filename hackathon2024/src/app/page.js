import * as React from 'react';
import Navbar from './component/navbar';
import Link from 'next/link';
import TextField from '@mui/material/TextField';
import { SearchForParkingCard, BookYourSpotCard, ParkAndEnjoyCard } from './component/card'; // Adjust the import statement based on the actual file structure and component names

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="max-w-6xl w-full bg-white p-12 rounded-lg shadow-lg flex items-center mt-20"> {/* Added mt-20 to move the box up */}
          <div className="flex-1 mr-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold">Find Parking!</h1>
            </div>
            <div className="mb-8">
              <TextField
                label="Your address"
                variant="outlined"
                type="text"
                className="w-full"
              />
            </div>
            <div className="flex justify-between">
              <Link href="/looking">
                <button className="bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-purple-800 focus:outline-none">
                  Looking
                </button>
              </Link>
              <Link href="/offering">
                <button className="bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-purple-800 focus:outline-none">
                  Offering
                </button>
              </Link>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-gray-200 p-4 rounded-lg">
              <img src="https://media.istockphoto.com/id/1297933309/photo/asian-chinese-couple-unloading-luggage-with-their-daughter-from-their-car-at-their-house.jpg?s=612x612&w=0&k=20&c=uStLACesmxdyCHB9UKInOVPn0RosSEkiAUbRHog0P_E=" alt="Image Description" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <div className="max-w-6xl mx-auto flex justify-between">
          <div className="card-container">
            <SearchForParkingCard />
          </div>
          <div className="card-container">
            <BookYourSpotCard />
          </div>
          <div className="card-container">
            <ParkAndEnjoyCard />
          </div>
        </div>
      </div>
    </main>
  );
}
