import React from 'react';
import Communicate from './Communicate';
import BookingSection from './BookingSectionHome';
import RecentBlogs from './RecentBlogs';
import Counselor from './Counselor';
import Ticket from './Ticket';
import Welcome from './Welcome';

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
