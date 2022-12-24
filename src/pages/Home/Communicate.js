import React from 'react';
import CommunicateObject from './CommunicateObject';

function Communicate() {
  return (
    <div className="mx-auto py-14 px-10 lg:px-44">
      <h1 className="text-3xl sm:text-4xl md:text-5xl format-normal leading-normal">
        WE CAN COMMUNICATE THROUGH
      </h1>

      <div className="flex flex-wrap">
        {CommunicateObject.map( item => {
          return (
            <div
              key={item.id}
              className="flex flex-col w-96 lg:w-[40%] xl:w-[30%] border-4 border-[#FBFBFB] shadow-2xl shadow-[#B2ABAB] rounded-3xl p-10 mt-24 text-center justify-center items-center mx-4"
            >
              <img className="w-16 h-16" src={item.src} alt={item.alt} />
              <h1 className="pt-5 text-3xl md:text-5xl format-normal leading-normal">
                {item.title}
              </h1>
              <p className="pt-5 text-gray-500"> {item.text} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Communicate;
