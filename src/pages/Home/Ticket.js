import React from 'react';
import { TicketsObject } from './TicketsObject';

export default function Ticket() {
  return (
    <div className="mx-auto pt-14 pb-3 px-10 lg:max-w-7xl">
      <h1 className="text-3xl sm:text-4xl md:text-5xl format-normal leading-normal">
        PURCHASE TICKETS
      </h1>
      <h3 className="pt-5 text-xl md:text-2xl">
        PURCHASE TICKETS THAT CAN BE USED TO BOOK APPOINTMENTS!
      </h3>

      <div className="flex flex-wrap">
        {TicketsObject.map(({ id, numberOfTickets, price }) => {
          return (
            <div
              key={id}
              className="flex flex-col w-96 lg:w-[40%] xl:w-[30%] border-4 border-[#FBFBFB] shadow-lg shadow-[#B2ABAB] rounded-3xl p-10 mt-8 text-center justify-center items-center mx-4"
            >
              <h1 className="pt-5 text-3xl md:text-5xl format-normal leading-normal">
                {numberOfTickets}
              </h1>
              <p className="pt-5 text-gray-500 text-2xl md:text-3xl">{price}</p>
              <button
                className="my-4 bg-[#2DD3E3] hover:bg-[#7decf6] text-black text-xl
                   py-2 px-4 border-b-4 border-[#2DD3E3] hover:border-[#42e4f3] rounded"
                type="button"
              >
                PURCHASE
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
