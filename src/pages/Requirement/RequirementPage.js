import React from 'react';
import img1 from './Frame.png';

const RequiredsObject = [
  {
    id: 1,
    header:'RELIABLE INCOME',
    text: 'Over 10,000 people sign up on BetterHelp every day looking for a counselor to help with life’s challenges. BetterHelp can be your main source of income ("full time") or a supplement to your current work.',

  {
    id: 2,
    header:'FOCUS ON COUNSELING',
    text: 'No need to worry about costs from acquiring clients, billing, support or operations. Let us handle the fees and paperwork so you can focus on what you do best!',
  },
  {
    id: 3,
    header:'FOCUS ON COUNSELING',
    text: 'No need to worry about costs from acquiring clients, billing, support or operations. Let us handle the fees and paperwork so you can focus on what you do best!',
  },
];

export default function Requirement() {
  return (
    <div className="flex flex-wrap mx-auto lg:max-w-7xl px-10 py-10 font-[ 'Poppins']">
      <div >
        <h1 className='text-3xl sm:text-4xl md:text-5xl format-normal leading-normal pt-5'> WHY WORK WITH HEALING ?</h1>
        {RequiredsObject.map((element)=>{
          return ( <div className='mt-5'>
            <h3 className='mt-1 text-xs font-bold'>{element.header}</h3>
            <p className=" pr-10 max-w-lg text-[14px] text-gray-500 ">{element.text}</p>
            </div>);  
           })}  
            <div  className=" mt-6 text-xl font-semibold">REQUIRENMENTS</div>
            <ul className='list-disc list-inside text-black'>
            <li className=" mt-2 text-xs  text-gray-500 ">Licensed by a State Board to provide counseling</li>
            <li className=" mt-2 text-xs  text-gray-500 ">Experience in counseling for adults, couples, and/or teens</li>
            <li className=" mt-2 text-xs  text-gray-500 ">Excellent writing skills</li>
            <li className=" mt-2 text-xs  text-gray-500 ">Reliable Internet connection</li>
            <li className=" mt-2 text-xs  text-gray-500 ">Currently residing in the US</li>
            </ul>
            <button
            className="my-4 bg-[#2DD3E3] hover:bg-blue-400 text-white 
                  font-bold py-2 px-4 border-b-4 border-[#2DD3E3] hover:border-blue-500 rounded"
            type="button"
          >
           GET STARTED
          </button>
      </div>
      <div> 
         <img
          className="mt-3 md:mt-0 h-auto lg:h-96 xl:h-auto xl:w-auto"
          src={img1}
          alt="loading"
        />
        </div>
    </div>
  );
}
