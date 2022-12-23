import React from 'react';
import { Link } from 'react-router-dom';

function BookingButton() {
  return (
    <div className="Booking">
      <Link to="/bookingPage" className="focus:text-[#FEE89E]">
        <button
          className="mt-20 bg-[#2DD3E3] hover:bg-blue-400 text-white 
                  font-bold py-2 px-4 border-b-4 border-[#2DD3E3] hover:border-blue-500 rounded"
          type="button"
        >
          BOOK AN APPOINTMENT
        </button>
      </Link>
    </div>
  );
}

export default BookingButton;