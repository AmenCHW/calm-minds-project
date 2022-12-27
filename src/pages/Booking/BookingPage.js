import React from 'react';

function Booking() {
  return (
    <div className='mx-auto lg:max-w-7xl px-10 py-10'>

      <h1 className='pt-5 text-3xl md:text-5xl format-normal leading-normal'>
        LET&apos;S MATCH YOU WITH THE RIGHT THERAPIST
      </h1>

      <p className='mt-2 text-2xl text-gray-500'>
        Please fill out this short questionnaire to provide some general and anonymous background about you and the issues you&apos;d like
        to deal with in online therapy. It would help us match you with the most suitable therapist for you.
      </p>

      <div className='p-6 mt-9 mb-12 mx-auto w-[700px] h-[557px] border-2 border-[#E5E5E5] rounded-md shadow-lg bg-white'>
        <form >
          <h1 className='text-3xl font-normal pb-12 text-center'>
            What Type Of Counseling Are You Looking For?
          </h1>

          {/* <div className='text-3xl font-normal border-2 border-[#E5E5E5] rounded-md py-3'>
            <label htmlFor="exampleRadios1">
              <input
                type="radio"
                name=""
                id=""
                value=""
              />
              Individual Counseling
            </label>
          </div>

          <div className='text-3xl font-normal border-2 border-[#E5E5E5] rounded-md py-3 mt-5'>
            <label htmlFor="exampleRadios1">
              <input
                type="radio"
                name=""
                id=""
                value=""
              />
              Teen Counseling (For My Child)
            </label>
          </div> */}

          <div className='flex mt-10'>
            <input type="radio" htmlFor="for" id="for" name="type" value="" className='' />
            <p className="text-3xl">Individual Counseling</p>
          </div>

        </form>
      </div>

    </div>
  );
}

export default Booking;
