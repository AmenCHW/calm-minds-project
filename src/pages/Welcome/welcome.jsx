import React from 'react';
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
            <h1 className="lg:text-[6vw]  text-[3vw] mb-20">HELP</h1>
            <button type="button" className="btn btn-blue">
              Button
            </button>
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
