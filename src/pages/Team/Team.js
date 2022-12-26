import React from 'react';
import constTeam from './ConstTeam';

function Team() {
  return (
    <div >
      <h1 className="mx-auto  text-5xl  py-16 px-10 lg:px-40">  
        WE ARE HEALING, NICE TO MEET YOU!
      </h1>
      
      <div className="mt-30 px-4 ">

      <h4 className=" text-4xl  py-14   lg:px-28 pl-8 sm:ml-10 justify-center ">Meet the Team!</h4>
       {/* maping over the objects */}
      <div className="flex flex-wrap px-0 pb-24  lg:ml-32   ">
      {constTeam.map((element) => {
        return (
          <div
            key={element.id}
            className="flex flex-col border-solid rounded-3xl bg-[#EAF8F9] justify-center
            pb-28  px-0 my-4 ml-10 lg:mx-2 sm:justify-center "
          >
            <img className="w-35 h-40 " src={element.src} alt={element.alt} />
            <hr className='border-[#a3e635] border-4 bg-[#a3e635]'/>
            <p className="text-center py-4  "> {element.Name}</p>
            <p   className=" pl-4 max-w-[150px]  " >{element.title}</p>
          </div>
        );
      })}</div></div>
    </div>
  );
}

export default Team;
