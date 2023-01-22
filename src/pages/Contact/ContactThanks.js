import React from 'react';
import BackToHomeButton from '../../components/BackToHomeButton';

function ContactThanks() {
    return (
        <div className="mx-auto py-14 px-10 lg:max-w-7xl h-[65vh] sm:h-[70vh] md:h-[60vh] lg:h-[80vh]">
            <h1 className="text-3xl sm:text-4xl md:text-5xl format-normal leading-normal">
                THANK YOU!
            </h1>

            <p className='mt-6 text-gray-500 text-lg md:text-xl'>Your request has been sent, a member of the support team will get in contact with you through the email you provided as soon as possible.</p>

            <BackToHomeButton />

        </div>
    )
}

export default ContactThanks;