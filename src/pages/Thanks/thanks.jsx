import React from 'react';
import { Link } from 'react-router-dom';

export default function thanks() {
  return (
    <div className="h-[63vw] lg:h-[34vw] md:h-[50]">
      <h1 className="lg:text-[5vw] md:text-[6vw] text-[6vw] lg:mx-auto uppercase w-full place-items-center pt-8 pl-20">
        Thank you!
      </h1>
      <p className="lg:text-[2vw] md:text-[4vw] text-[4vw] md:pl-20 lg:pl-20 pl-20 opacity-50">
        You purchase has been submitted, you should receive an email with the
        receipt soon.
      </p>
      <Link to="/" className="focus:text-[#FEE89E]">
        <button
          className="lg:mt-10 md:mt-5 bg-[#2DD3E3] hover:bg-blue-400 text-white  ml-20 mt-10
                  font-bold py-2 lg:text-[1vw] md:[4vw] px-4 border-b-4 border-[#2DD3E3] hover:border-blue-500 rounded"
          type="button"
        >
          Back to home
        </button>
      </Link>
    </div>
  );
}
