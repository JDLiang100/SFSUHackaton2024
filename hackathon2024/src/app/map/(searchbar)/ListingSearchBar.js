"use client"

import React, { useState } from 'react';
import { PiMagnifyingGlassDuotone } from 'react-icons/pi';
import { PiSlidersHorizontalDuotone } from 'react-icons/pi';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import GoogleAutoComplete from '../GoogleAutoComplete';
import Filters from './Filters';

const ListingSearchBar = () => {
  const [revealFilters, setRevealFilters] = useState(false);
  const [range, setRange] = useState(2);

  const onRangeChange = (e) => {
    const value = e.target.value;
    console.log(value);
    setRange(value);
    e.preventDefault();
  }

  return (
    <div className="listing-search">
      <div className="listing-search-input rounded-md px-4 py-2">
        <PiMagnifyingGlassDuotone className="icon purple-icon me-2 text-2xl" />
        <GoogleAutoComplete />
        {/* Your search input */}
        {/* <input type="text" placeholder="Search..." /> */}
        <button onClick={() => setRevealFilters(!revealFilters)} className='filters-button'>
          <PiSlidersHorizontalDuotone className="purple-icon text-2xl" />
        </button>
      </div>
      {revealFilters && <Filters range={range} onRangeChange={onRangeChange} />}
    </div>
  );
};

export default ListingSearchBar;


