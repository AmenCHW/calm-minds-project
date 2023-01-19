import React from 'react';
import Communicate from './Communicate';

import BookingSection from './BookingSectionHome';

import RecentBlogs from '../Blogs/RecentBlogs';
import Counselor from './Counselor';
import Ticket from './Ticket';
import Welcome from '../Welcome/welcome';

function Home({ t }) {
  return (
    <div>
      <Welcome t={t} />
      <BookingSection t={t} />
      <Communicate t={t} />
      <RecentBlogs t={t} />
      <Ticket t={t} />
      <Counselor t={t} />
    </div>
  );
}

export default Home;
