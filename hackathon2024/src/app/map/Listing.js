import React from 'react'
import Image from "next/image"
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
  listingId
}) => {
  return (
    <div className="listing-item rounded-lg">
        <Image 
            className='parking-image rounded-lg'
            src={imgUrl ?? "/streetDefault.jpg"}
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
  )
}

export default Listing