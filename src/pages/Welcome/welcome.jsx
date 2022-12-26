import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../img/image5.svg';
import image2 from '../../img/image1.svg';

export default function welcome() {
  return (
    <div>
      <div
        className="w-full lg:h-screen md:h-[60vw] sm:h-screen bg-cover bg-no-repeat bg-center "
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="lg:h-40 md:h-40" />
        <div className="md:flex hidden items-start   lg:w-full h-screen justify-evenly ">
          <div>
            <h1 className="lg:text-[2vw] md:text-[2.5vw] text-[1vw]">
              We are Here to{' '}
            </h1>
            <h1 className="lg:text-[6vw] md:text-[6.5vw]  text-[3vw] ">HELP</h1>

            <Link to="/bookingPage" className="focus:text-[#FEE89E]">
              <button
                className="lg:mt-10 md:mt-5 bg-[#2DD3E3] hover:bg-blue-400 text-white 
                  font-bold py-2 text-[1vw] px-4 border-b-4 border-[#2DD3E3] hover:border-blue-500 rounded"
                type="button"
              >
                Book an appointment
              </button>
            </Link>
          </div>
          <img
            src={image2}
            alt=""
            className="object-cover mb-20 "
            style={{ width: '45%' }}
          />
        </div>
        <div className="md:hidden justify-center ">
          <img
            src={image2}
            alt=""
            className="object-cover mb-10 mx-auto w-[80vw] "
          />
          <div>
            <h1 className="text-center text-[5vw]">We are Here to </h1>
            <h1 className=" text-center  text-[14vw] ">HELP</h1>
            <div className="w-full flex justify-center">
              <button
                className="lg:mt-10 sm:mt-4 bg-[#2DD3E3] hover:bg-blue-400 text-white 
                  font-bold py-2 text-[3vw] mt-4 px-4 border-b-4 border-[#2DD3E3] hover:border-blue-500 rounded"
                type="button"
              >
                Book an appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
