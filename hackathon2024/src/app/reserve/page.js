import React from 'react';
import Navbar from '../component/navbar';

const ReservePage = () => {
  return (
    <div>
      <Navbar />
      <div className="reserve-page-container">
        <h1 className="reserve-page-title text-center mb-4">Congratulations!</h1>
        <p className="reserve-page-message text-center">
          You have successfully reserved your first driveway. We appreciate your business and look forward to providing you with excellent service.
        </p>
      </div>
    </div>
  );
};

export default ReservePage;