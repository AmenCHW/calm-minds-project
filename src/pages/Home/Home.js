import React from 'react';
import Communicate from './Communicate';
import BookingSection from '../Booking/BookingSectionHome';

function Home() {
  return (
    <div>
      <h1 className="mx-auto text-center text-7xl">Home</h1>
      <BookingSection />
      <Communicate />
    </div>
  );
}

export default Home;
