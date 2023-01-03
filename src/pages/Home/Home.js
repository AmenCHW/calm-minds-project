import React from 'react';
import { useSelector } from 'react-redux';
import Communicate from './Communicate';
import BookingSection from '../Booking/BookingSectionHome';
import Counselor from './Counselor';
import Ticket from './Ticket';
import Welcome from '../Welcome/welcome';

function Home() {
  const { paragraph } = useSelector((state) => state);
  console.log(paragraph);
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
