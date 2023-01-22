import React from 'react';
import BackToHomeButton from './BackToHomeButton';

function SubscribeThanks() {
    return (
        <div className="mx-auto py-14 px-10 lg:max-w-7xl h-[65vh] sm:h-[70vh] md:h-[63vh] lg:h-[80vh]">
            <h1 className="text-3xl sm:text-4xl md:text-5xl format-normal leading-normal">
                THANK YOU!
            </h1>

            <p className='mt-6 text-gray-500 text-lg md:text-xl xl:w-4/5 lg:pr-56'>Your email has been added to the mailing list successfully!</p>

            <BackToHomeButton />

        </div>
    )
}

export default SubscribeThanks;