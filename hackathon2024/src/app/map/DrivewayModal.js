import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { DrivewayMapContext } from './DrivewayMapContext';
import { PiX } from 'react-icons/pi';
import Image from 'next/image';

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
        <p>{listing}</p>
        <p></p>

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
