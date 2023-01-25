import React from 'react';
import BackToHomeButton from '../../components/BackToHomeButton';

function TherapistThanks() {
  return (
    <div className="mx-auto py-14 px-10 lg:max-w-7xl h-[65vh] sm:h-[70vh] md:h-[63vh] lg:h-[80vh]">
      <h1 className="text-3xl sm:text-4xl md:text-5xl format-normal leading-normal">
        THANK YOU!
      </h1>

      <p className="mt-6 text-gray-500 text-lg md:text-xl lg:w-4/5 xl:pr-[145px] ">
        Thank you for your interest in working with Healing, we have recieved
        your application. You will receive an email guiding you for the next
        steps soon after your information is reviewed.
      </p>

      <BackToHomeButton />
    </div>
  );
}

export default TherapistThanks;
