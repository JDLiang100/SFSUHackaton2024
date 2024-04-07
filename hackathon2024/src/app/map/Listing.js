import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { PiStarDuotone } from "react-icons/pi";

const Listing = ({
  name,
  streetAddress,
  priceRate,
  avgRating,
  numRatings,
  description,
  imgUrl,
  imgAlt,
  listingId,
}) => {
  const count = Math.floor(Math.random() * 1000);

  return (
    <div className="listing-item rounded-lg">
      <Image 
        className='parking-image rounded-lg'
        src={
          count % 9 === 0 ? (imgUrl ?? "/streetDefault.jpg") :
          count % 9 === 1 ? (imgUrl ?? "/parking1.jpeg") :
          count % 9 === 2 ? (imgUrl ?? "/parking2.jpeg") :
          count % 9 === 3 ? (imgUrl ?? "/parking3.jpeg") :
          count % 9 === 4 ? (imgUrl ?? "/parking4.jpeg") :
          count % 9 === 5 ? (imgUrl ?? "/parking5.jpeg") :
          count % 9 === 6 ? (imgUrl ?? "/parking6.jpeg") :
          count % 9 === 7 ? (imgUrl ?? "/parking7.jpeg") :
          count % 9 === 8 ? (imgUrl ?? "/parking8.jpeg") :
          (imgUrl ?? "/parking9.jpeg")
        }
        width={128}
        height={128}
        alt={imgAlt ?? "Picture of the street"}
      />
      <div className="parking-spot-info">
        <div className="primary-info">
          <p className="street-address font-bold text-2xl">{name}</p>
          <p className="price text-right font-bold text-2xl">${priceRate}/hr</p>
        </div>
        <p className="parking-rating"><PiStarDuotone className='icon purple-icon me-1 text-lg'/>{avgRating}/5 ({numRatings})</p>
        <p className="parking-status">{description}</p>
      </div>
    </div>
  );
}

export default Listing;
