import React from 'react';
import Communicate from './Communicate';
import BookingSection from '../Booking/BookingSectionHome';

import RecentBlogs from '../Blogs/RecentBlogs';
import Counselor from './Counselor';
import Ticket from './Ticket';
import Welcome from '../Welcome/welcome';

function Home() {
  return (
    <div>
      <Welcome />
      <BookingSection />
      <Communicate />
      <RecentBlogs />
      <Ticket />
      <Counselor />
    </div>
  );
}

export default Home;
