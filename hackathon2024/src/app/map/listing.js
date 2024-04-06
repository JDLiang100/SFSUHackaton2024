import React from 'react'
import Image from "next/image"
import streetPic from "./street.jpg"

const Listing = () => {
  return (
    <div className="listing-item rounded-lg">
        <p className="street-address font-bold text-2xl">123 Street</p>
        <p className="price text-right text-xl">$5/hr</p>
        <p className="parking-rating">4.5/5</p>
        <p className="parking-status">Available</p>
        <Image 
            className='parking-image rounded-lg'
            src={streetPic}
            width={128}
            height={128}
            alt="Picture of the street"
        />
    </div>
  )
}

export default Listing