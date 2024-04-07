import ListingSearchBar from './(searchbar)/ListingSearchBar';
import Listing from './Listing';
import { useContext, useState } from 'react';
import { DrivewayMapContext } from './DrivewayMapContext';
import { useMap } from '@vis.gl/react-google-maps';
import DrivewayModal from './DrivewayModal';


const Sidebar = () => {

  const { listings } = useContext(DrivewayMapContext);
  const map = useMap();
  const [activeId, setActiveId] = useState(null);

  const getListing = (listingId) => {
    const daListing = listings.find((listing) => listing.listingId = listingId);
    console.log(daListing);
    return daListing;
  }

  const handleClick = (listingId) => {
    // Look through listings
    
    console.log(listingId);

    if (!listings) return;
    if (!map) return;

    const driveway  = listings.find((listing) => listing.listingID == listingId);
    setActiveId(driveway.listingID);
    console.log(driveway);
    map.panTo({lat: driveway.lat, lng:driveway.lng});
  }

  return (
    <div className="sidebar">
      <ListingSearchBar />
      <div className="listing">
        {listings && listings.map(listing => 
            <Listing
            key={listing.listingID}
            name={listing.name}
            streetAddress={listing.address}
            priceRate={listing.price}
            avgRating={listing.rating}
            numRatings={listing.numRatings}
            description={listing.description}
            // imgUrl={listing.long}
            // imgAlt={listing.lat}
            listingId={listing.listingID}
            handleClick={handleClick}
            active={listing.listingID == activeId ? true : false}
          />
          )}
        
        {/* <Listing
          name={'4212 B Street by Park'}
          streetAddress={'123 Street, San Francisco, CA, 94016'}
          priceRate={2.5}
          avgRating={4.9}
          numRatings={5}
          description={'A little sketch, but well worth the price for what you get'}
          imgUrl={null}
          imgAlt={'Street picture'}
          listingId={2}
        />
        <Listing
          name={'42 Gregor Avenue'}
          streetAddress={'123 Street, San Francisco, CA, 94016'}
          priceRate={5.5}
          avgRating={4.5}
          numRatings={17}
          description={"Nice neighborhood where your car won't get jacked"}
          imgUrl={null}
          imgAlt={'Street picture'}
          listingId={3}
        /> */}
        <div className='remaining-space'></div>
      </div>
      {activeId ? <DrivewayModal 
          listing={getListing(activeId)} 
          handleClose={() => setActiveId(null)} /> :
          ""
      }
    </div>
  );
};

export default Sidebar;
