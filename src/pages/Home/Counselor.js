import React from 'react';
import { Link } from 'react-router-dom';

export default function Counselor() {
  return (
    <div className="mx-auto lg:max-w-7xl px-10 py-14 mb-16">
      <div className="border-4 border-[#FBFBFB] shadow-lg shadow-[#B2ABAB] rounded-3xl text-center justify-center items-center lg:mx-5">
        <h1 className="text-3xl sm:text-4xl md:text-5xl format-normal leading-normal pt-10">
          ARE YOU A COUNSELOR?
        </h1>
        <p className="text-xl pt-10 px-10 md:px-24">
          Interested in joining our mental health platform? You decide your
          schedule and how much you want to work, we’ll take care of the client
          referrals and billing details!
        </p>

        <Link to="/RequirementPage" className="focus:text-[#FEE89E]">
          <button
            className="my-10 bg-[#2DD3E3] hover:bg-[#66e0eb] text-black text-xl
                 py-2 px-4 border-b-4 border-[#2DD3E3] hover:border-[#41d6e4] rounded"
            type="button"
          >
            LEARN MORE
          </button>
        </Link>
      </div>
    </div>
  );
}
