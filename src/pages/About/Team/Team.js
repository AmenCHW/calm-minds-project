import React from 'react';
import TeamObject from './TeamObject';

function Team() {
  return (
    <div className="mx-auto lg:max-w-7xl px-10 py-10">
      <h1 className="  pt-5 text-3xl md:text-5xl format-normal leading-normal">
        WE ARE HEALING, NICE TO MEET YOU!
      </h1>

      <div className="mt-32 px-4 ">
        <h4 className=" text-3xl  py-14    lg:mx-0  mx-2 pl-5 sm:ml-10 justify-center ">
          Meet the Team!
        </h4>
        {/* maping over the objects */}
        <div className="flex flex-wrap px-0 pb-24   lg:justify-between   ">
          {TeamObject.map((element) => {
            return (
              <div
                key={element.id}
                className="flex flex-col border-solid rounded-3xl bg-[#EAF8F9] justify-center
            pb-28  px-0 my-4 ml-10 lg:mx-2 sm:justify-center "
              >
                <img
                  className="w-35 h-40 "
                  src={element.src}
                  alt={element.alt}
                />
                <hr className="border-[#a3e635] border-4 bg-[#a3e635]" />
                <p className="text-center py-4  "> {element.Name}</p>
                <p className=" pl-4 max-w-[150px]  ">{element.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Team;
