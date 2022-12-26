import React from 'react';
import contactimage from './contactimage.png';

const checkboxObject = [
  {
    id: 1,
    text: 'I have a question about the service.',
  },
  {
    id: 2,
    text: "I'm a registered client and I need support.",
  },
  {
    id: 3,
    text: "I'm a counselor interested in joining.",
  },
  {
    id: 4,
    text: "I'm a registered counselor and I need support.",
  },
  {
    id: 5,
    text: 'I have a business-related inquiry.',
  },
  {
    id: 6,
    text: "I'm interested in Healing Online for my organization.",
  },
  {
    id: 7,
    text: 'I have a billing related question.',
  },
];

export default function Contact() {
  return (
    <div className="mx-auto lg:max-w-7xl px-10 py-10">
      <h1 className="pt-5 text-3xl md:text-5xl format-normal leading-normal">
        SEND US YOUR REQUEST!
      </h1>

      <p className="mt-2 text-2xl">
        Do you have a question, concern, idea, feedback, or problem? If you need
        assistance, please fill out the form below and we&apos;d be happy to
        help!
      </p>

      <div className="flex flex-wrap pt-14 justify-center lg:justify-between">
        <div>
          <p className="text-2xl font-semibold mb-4">Type of contact</p>
          <div className="flex flex-col">
            {checkboxObject.map((item) => {
              return (
                <label key={item.id} className="py-3 text-xl" htmlFor="for">
                  <input type="checkbox" id="for" name="type" value="" />
                  <span className="ml-2">{item.text}</span>
                </label>
              );
            })}
          </div>
        </div>

        <img
          className="mt-3 md:mt-0 w-auto h-auto lg:pl-3"
          src={contactimage}
          alt="contactimage"
        />
      </div>

      <div className="flex flex-wrap justify-center lg:justify-between mt-12">
        <form>
          <label className=" flex flex-col" htmlFor="name">
            <span className="mb-5 text-2xl font-normal">Full Name:</span>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name here..."
              className="border-2 rounded-lg h-16 w-auto border-[#E5E5E5] pl-4
           placeholder:pl-1 "
            />
          </label>

          <label className=" flex flex-col" htmlFor="email">
            <span className="mb-5 text-2xl font-normal pt-5">Email:</span>
            <input
              type="text"
              id="email"
              placeholder="Enter your email address here..."
              className="border-2 rounded-lg h-16 w-auto border-[#E5E5E5] pl-4
           placeholder:pl-1"
            />
          </label>

          <label className=" flex flex-col" htmlFor="details">
            <span className="mb-5 text-2xl font-normal pt-5">Details:</span>
            <input
              type="text"
              id="details"
              placeholder="Enter your details here..."
              className="border-2 rounded-lg h-40 w-[260px] sm:w-[500px] lg:w-[604px] border-[#E5E5E5] pl-4
           placeholder:pl-1"
            />
          </label>

          <button
            type="submit"
            value="Submit"
            className="bg-[#2DD3E3] my-5 border-2 rounded-md px-10 py-2 border-[#2DD3E3] text-xl font-normal"
          >
            SUBMIT
          </button>
        </form>

        <div className="mx-auto my-auto flex justify-center">
          <div className="flex flex-col bg-[#EAF8F9] border-2 border-[#EAF8F9] rounded-xl h-70 lg:h-auto p-8 w-auto sm:w-96 text-2xl sm:ml-2 ">
            <h1 className="font-normal">Find Us At:</h1>
            <p className="text-gray-500 pt-3">Nergiz Plaza</p>
            <p className="text-gray-500">3rd Floor</p>
            <p className="text-gray-500">Bakhtiyari Street 40m</p>
            <p className="text-gray-500">Erbil, Iraq</p>
            <p className="text-gray-500">44001</p>
          </div>
        </div>
      </div>
    </div>
  );
}
