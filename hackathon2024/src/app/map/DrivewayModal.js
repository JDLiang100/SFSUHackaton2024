import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { DrivewayMapContext } from './DrivewayMapContext';
import { PiX } from 'react-icons/pi';
import Image from 'next/image';
import Link from 'next/link';
const DrivewayModal = ({ listing, handleClose }) => {
  return (
    <div className="driveway-modal-container">
      <div className="driveway-modal">
        <Image
          className="listing-image rounded-lg"
          src={
            listing.listingId % 9 === 0
              ? listing.imgUrl ?? '/streetDefault.jpg'
              : listing.listingId % 9 === 1
              ? listing.imgUrl ?? '/parking1.jpeg'
              : listing.listingId % 9 === 2
              ? listing.imgUrl ?? '/parking2.jpeg'
              : listing.listingId % 9 === 3
              ? listing.imgUrl ?? '/parking3.jpeg'
              : listing.listingId % 9 === 4
              ? listing.imgUrl ?? '/parking4.jpeg'
              : listing.listingId % 9 === 5
              ? listing.imgUrl ?? '/parking5.jpeg'
              : listing.listingId % 9 === 6
              ? listing.imgUrl ?? '/parking6.jpeg'
              : listing.listingId % 9 === 7
              ? listing.imgUrl ?? '/parking7.jpeg'
              : listing.listingId % 9 === 8
              ? listing.imgUrl ?? '/parking8.jpeg'
              : listing.imgUrl ?? '/parking9.jpeg'
          }
          width={256}
          height={256}
          alt={listing.imgAlt ?? 'Picture of the street'}
        />
        <button className="driveway-close" onClick={handleClose}>
          <PiX className="purple-icon" />
        </button>
        <div className='listing-information'>
        <div>
          <h1>Address: {listing.address}</h1>
          <h2>Rating: {listing.rating}({listing.numRatings})</h2>

          <Link href="/reserve">
              <div className="group relative flex items-center justify-center h-9 w-36 overflow-hidden rounded-2xl bg-green-500 text-lg font-bold text-white">
                Reserve
                <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
              </div>
            </Link>
      
        </div>

        </div>
        {/* <div className="parking-spot-info">
          <div className="primary-info">
            <p className="street-address font-bold text-2xl">{name}</p>
            <p className="price text-right font-bold text-2xl">${priceRate}/hr</p>
          </div>
          <p className="parking-rating">
            <PiStarDuotone className="icon purple-icon me-1 text-lg" />
            {avgRating}/5 ({numRatings})
          </p>
          <p className="parking-status">{description}</p>
        </div>
        <button>Reserve</button>*/}
      </div>
    </div>
  );
};

export default DrivewayModal;
