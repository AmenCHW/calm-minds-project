import React from 'react';
import constTeam from './ConstTeam';

function Team() {
  return (
    <div >
      <h1 className="mx-auto text-center text-5xl">
        WE ARE HEALING, NICE TO MEET YOU!
      </h1>
      <h4 className="mx-auto text-center text-3xl">Meet the Team!</h4>
      <div className="flex flex-wrap mt-44">
       
      {constTeam.map((element) => {
        return (
          <div
            key={element.id}
            className="flex flex-col border-1 
       p-3 text-center justify-center items-center mx-1"
          >
            <img className="w-16 h-16" src={element.src} alt={element.alt} />
            <h4> {element.Name}</h4>
            <h5>{element.title}</h5>
          </div>
        );
      })}</div>
    </div>
  );
}

export default Team;
