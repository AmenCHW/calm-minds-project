import React from 'react';
import BookingButton from './BookingButton';
import image from './img/image5.svg';
import image2 from './img/image1.svg';

export default function welcome() {
  return (
    <div
      className="w-full bg-cover bg-no-repeat lg:h-[745px]"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="mx-auto lg:max-w-7xl px-10 py-10">
        <div className="flex-wrap lg:flex justify-between lg:mt-10">
          <div className='text-center my-auto'>
            <h1 className="text-2xl lg:text-4xl format-normal leading-normal">
              WE ARE HERE TO
            </h1>
            <h1 className="text-6xl -mt-3 lg:text-9xl format-normal leading-normal">HELP</h1>
            <BookingButton />
          </div>

          <img
            src={image2}
            alt="welcome"
            className="mx-auto mt-10 lg:mt-0 lg:mx-0"
          />
        </div>
      </div>
    </div>
  );
}
