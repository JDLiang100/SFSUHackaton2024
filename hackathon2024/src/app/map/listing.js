import React from 'react'
import Image from "next/image"
import streetPic from "./street.jpg"

const Listing = () => {
  return (
    <div className="listing-item">
        <p className="street-address text-3xl font-bold underline">123 Street</p>
        <p className="parking-rating text-right-md">4.5/5</p>
        <p className="parking-status">Available</p>
        <Image 
            className='parking-image'
            src={streetPic}
            width={128}
            height={128}
            alt="Picture of the street"
        />
        <p className="price">$5/hr</p>
    </div>
  )
}

export default Listing