import React from 'react';
import Communicate from './Communicate';
import BookingSection from '../Booking/BookingSectionHome';

import RecentBlogs from '../Blogs/RecentBlogs';
import Counselor from './Counselor';
import Ticket from './Ticket';

function Home() {
  return (
    <div>
      <h1 className="mx-auto text-center text-7xl">Home</h1>
      <BookingSection />
      <Communicate />
      <RecentBlogs />
      <Ticket />
      <Counselor />
    </div>
  );
}

export default Home;
