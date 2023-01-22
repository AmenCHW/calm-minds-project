import React from 'react';
import BackToHomeButton from '../../components/BackToHomeButton';

function SignUpThanks() {
    return (
        <div className="mx-auto py-14 px-10 lg:max-w-7xl h-[65vh] sm:h-[70vh] md:h-[60vh] lg:h-[80vh]">
            <h1 className="text-3xl sm:text-4xl md:text-5xl format-normal leading-normal">
                THANK YOU!
            </h1>

            <p className='mt-6 text-gray-500 text-lg md:text-xl xl:w-4/5 lg:pr-56'>Your Sign Up request has been received, you will soon receive a confirmation email.
                Please follow the steps in the email to complete and activate your account.</p>

            <div>
                <BackToHomeButton />
            </div>

        </div>
    )
}

export default SignUpThanks;