import React from 'react';
import Navbar from '../component/navbar';

const ReservePage = () => {
  return (
    <div>
      <Navbar />
      <div className="reserve-page-container">
        <h1 className="reserve-page-title">Congratulations!</h1>
        <p className="reserve-page-message">
          You have successfully reserved your first driveway. We appreciate your business and look forward to providing you with excellent service.
        </p>
      </div>
    </div>
  );
};


export default ReservePage;