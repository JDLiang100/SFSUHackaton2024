import React from 'react'
import Image from "next/image"
import streetPic from "./street.jpg"
import { PiStarDuotone } from "react-icons/pi";

const Listing = () => {
  return (
    <div className="listing-item rounded-lg">
        <Image 
            className='parking-image rounded-lg'
            src={streetPic}
            width={128}
            height={128}
            alt="Picture of the street"
        />
        <div className="parking-spot-info">
            <div className="primary-info">
                <p className="street-address font-bold text-2xl">123 Street by Hill</p>
                <p className="price text-right font-bold text-2xl">$5/hr</p>
            </div>
            <p className="parking-rating"><PiStarDuotone className='icon purple-icon me-1 text-lg'/>4.5/5 (17)</p>
            <p className="parking-status">Street Parking. Weekend and overnight parking available.</p>
        </div>
    </div>
  )
}

export default Listing