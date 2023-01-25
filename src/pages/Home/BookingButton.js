import React from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';

function BookingButton() {
  const { user } = UserAuth();

  return (
    <div className="Booking">
      <button
        className="mt-16 bg-[#2DD3E3] hover:bg-blue-400 text-white text-md sm:text-xl
                   py-2 px-4 border-b-4 border-[#2DD3E3] hover:border-blue-500 rounded"
        type="button"
      >
        {user ? (
          <Link to="/bookingPage">BOOK AN APPOINTMENT</Link>
        ) : (
          <Link to="/signup" className="focus:text-[#FEE89E]">
            SIGN UP
          </Link>
        )}
      </button>
    </div>
  );
}

export default BookingButton;
