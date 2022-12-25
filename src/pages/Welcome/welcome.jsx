import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../img/image5.svg';
import image2 from '../../img/image1.svg';

export default function welcome() {
  return (
    <div>
      <section
        className="w-full h-screen bg-cover bg-no-repeat bg-center "
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="md:flex hidden items-center lg:w-full h-screen justify-evenly ">
          <div>
            <h1 className="lg:text-[2vw]  text-[1vw]">We are Here to </h1>
            <h1 className="lg:text-[6vw]  text-[3vw] ">HELP</h1>

            <Link to="/bookingPage" className="focus:text-[#FEE89E]">
              <button
                className="mt-20 bg-[#2DD3E3] hover:bg-blue-400 text-white 
                  font-bold py-2 px-4 border-b-4 border-[#2DD3E3] hover:border-blue-500 rounded"
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
            className="object-cover mb-20 mx-auto w-[70vw] p-10"
          />
          <div>
            <h1 className="text-center text-[3vw]">We are Here to </h1>
            <h1 className="lg:text-[6vw] text-center  text-[9vw] mb-20">
              HELP
            </h1>
            <div className="w-full flex justify-center">
              <button type="button" className="btn btn-blue ">
                Button
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
