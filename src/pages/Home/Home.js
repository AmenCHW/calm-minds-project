import React from 'react';
import Communicate from './Communicate';
import BookingSection from '../Booking/BookingSectionHome';
import Welcome from '../Welcome/welcome';

function Home() {
  return (
    <div>
      <Welcome />
      <BookingSection />
      <Communicate />
    </div>
  );
}

export default Home;
