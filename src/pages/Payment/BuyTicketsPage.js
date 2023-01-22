import React from 'react';
import img1 from "./img/Ticket1.PNG"
import img2 from "./img/ticket2.PNG"
import img3 from "./img/ticket3.PNG"

  

export default function BuyTicket() {


  return (
    <div className="flex flex-wrap mx-auto lg:max-w-7xl px-5 py-10 font-[ 'Poppins']">
      <div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl format-normal leading-normal pt-5">
        SELECT CARD
        </h1>
        <p className='mt-2 text-2xl  text-gray-500'>Please select the card you want to buy the tickets with</p>
        <div className='py-1 flex mx-0 md:mx-0 my-10'>
                <img
                  src={img1}
                  className=""
                  alt="..."
                />
                <img
                  src={img2}
                  className=""
                  alt="..."
                />
                <img
                src={img3}
                className=""
                alt="..."
              />
        </div>
        <div>
        <h1 className="text-xl sm:text-2xl md:text-4xl format-normal leading-normal pt-5">
        Click confirm to use the selected card to purchase 5 tickets for 10$
        </h1>
        </div>
        <button
          className="my-4 bg-[#2DD3E3] hover:bg-[#6ae8f3] text-white justify-center
                  font-bold py-2 px-4 border-b-4 border-[#2DD3E3] hover:border-[#54deeb] rounded"
          type="button"
        >
          CONFIRM PURCHASE
        </button>
      </div>
    </div>
  );
}
