import React from 'react';
import { Link } from 'react-router-dom';
import { WhyWorkWithHealingObject, RequirementsObject } from './RequirementObject';
import img1 from './Frame.png';

export default function Requirement() {
  return (
    <div className="mx-auto lg:max-w-7xl px-10 py-10 font-['Poppins']">
      <div className='lg:flex lg:justify-between' >
        <div className='lg:w-3/5'>
          <h1 className="mb-9 pt-5 text-3xl sm:text-4xl md:text-5xl format-normal leading-normal">
            WHY WORK WITH HEALING?
          </h1>

          {
            WhyWorkWithHealingObject.map(({ id, header, text }) => {
              return (
                <div key={id} className="mt-5 text-xl">
                  <h3 className="mt-1 font-medium">{header}</h3>
                  <p className="text-gray-500 ">
                    {text}
                  </p>
                </div>
              );
            })
          }

          <div className="mt-16 text-2xl lg:text-3xl font-bold">REQUIRENMENTS</div>
          <ul className="list-disc list-inside marker:text-black">
            {RequirementsObject.map(({ id, text }) => {
              return (
                <li key={id} className="mt-2 text-xl text-gray-500">
                  {text}
                </li>
              )
            })}
          </ul>

          <Link to="/therapist/create">
            <button
              className="my-7 bg-[#2DD3E3] hover:bg-[#6ae8f3] text-black text-xl
                  py-2 px-4 border-b-4 border-[#2DD3E3] hover:border-[#54deeb] rounded"
              type="button"
            >
              GET STARTED
            </button>
          </Link>
        </div >

        <img
          className="lg:h-80 lg:w-1/3 mt-6 lg:mt-16 mb-3 lg:mb-0"
          src={img1}
          alt="loading"
        />
      </div >
    </div >
  );
}
