import React from 'react';
import Communicate from './Communicate';

import BookingSection from './BookingSectionHome';

import RecentBlogs from '../Blogs/RecentBlogs';
import Counselor from './Counselor';
import Ticket from './Ticket';
import Welcome from './welcome';

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
