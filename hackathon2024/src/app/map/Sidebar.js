import ListingSearchBar from './ListingSearchBar';
import Listing from './Listing';


const Sidebar = () => {
  return (
    <div className="sidebar">
      <ListingSearchBar />
      <div className="listing">
        <Listing
          name={'123 Street by Hill'}
          streetAddress={'123 Street, San Francisco, CA, 94016'}
          priceRate={5.5}
          avgRating={4.5}
          numRatings={17}
          description={"Nice neighborhood where your car won't get jacked"}
          imgUrl={null}
          imgAlt={'Street picture'}
          listingId={1}
        />
        <Listing
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
        />
        <div className='remaining-space'></div>
      </div>
    </div>
  );
};

export default Sidebar;
