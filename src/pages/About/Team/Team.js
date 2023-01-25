import React from 'react';
import TeamObject from './TeamObject';

function Team() {
  return (
    <div className="mx-auto lg:max-w-7xl px-10 py-10">
      <h1 className="pt-5 text-3xl sm:text-4xl md:text-5xl format-normal leading-normal">
        WE ARE HEALING, NICE TO MEET YOU!
      </h1>

      <h4 className="text-[#424A4F] text-2xl md:text-3xl py-14 md:mt-32">
        Meet the Team!
      </h4>

      <div className="flex flex-wrap pb-24">
        {TeamObject.map(({ id, src, alt, Name, title }) => {
          return (
            <div
              key={id}
              className="flex flex-col border-solid rounded-3xl bg-[#EAF8F9] max-w-[160px]
            pb-28 my-4 mx-7 sm:ml-0 lg:mr-14"
            >
              <img
                className="h-full border-b-8 border-[#a3e635]"
                src={src}
                alt={alt}
              />
              <p className="text-center py-4 px-2"> {Name}</p>
              <p className="text-center px-1">{title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Team;
