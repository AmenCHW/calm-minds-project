import React from 'react';
import { Link } from 'react-router-dom';

export default function Counselor() {
  return (
    <div className="mx-auto lg:max-w-7xl px-10 pb-24">
      <div className="  border-4 border-[#FBFBFB] shadow-2xl shadow-[#B2ABAB] rounded-3xl pb-30 mt-24 text-center justify-center items-center ">
        <h1 className="text-3xl sm:text-4xl md:text-5xl format-normal leading-normal pt-10">
          Are you a counselor?
        </h1>
        <p className="text-xl pt-10 px-10">
          Interested in joining our mental health platform? You decide your
          schedule and how much you want to work, we’ll take care of the client
          referrals and billing details!
        </p>

        <Link to="/RequirementPage" className="focus:text-[#FEE89E]">
          <button
            className="my-4 bg-[#2DD3E3] hover:bg-blue-400 text-white 
                  font-bold py-2 px-4 border-b-4 border-[#2DD3E3] hover:border-blue-500 rounded"
            type="button"
          >
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
}
