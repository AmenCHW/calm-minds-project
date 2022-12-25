import React from 'react';
import constTeam from './ConstTeam';

function Team() {
  return (
    <div >
      <h1 className="mx-auto  text-5xl  py-16 px-10 lg:px-40">  
        WE ARE HEALING, NICE TO MEET YOU!
      </h1>
      
      <div className="mt-30 px-4">

      <h4 className=" text-4xl  py-14 px-1  lg:px-40">Meet the Team!</h4>
       {/* maping over the objects */}
      <div className="flex flex-wrap px-0 pb-20 lg:ml-40 ">
      {constTeam.map((element) => {
        return (
          <div
            key={element.id}
            className="flex flex-col border-solid rounded-lg bg-[#EAF8F9]
       pb-28  justify-center  mx-2  px-0 sm:mx-2 lg:mx-3"
          >
            <img className="w-35 h-45" src={element.src} alt={element.alt} />
            <p className="text-center py-4  text-2xl"> {element.Name}</p>
            <p   className="text-center " >{element.title}</p>
          </div>
        );
      })}</div></div>
    </div>
  );
}

export default Team;
