import React from 'react';
import Communicate from './Communicate';
import BookingSection from '../Booking/BookingSectionHome';
import Counselor from './Counselor';
import Ticket from './Ticket';
import Welcome from '../Welcome/welcome';

function Home() {
  return (
    <div>
      <Welcome />
      <BookingSection />
      <Communicate />
      <Ticket />
      <Counselor />
    </div>
  );
}

export default Home;
