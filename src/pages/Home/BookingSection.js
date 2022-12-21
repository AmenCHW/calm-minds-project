import React from 'react';

import BookingButton from './BookingButton';

import img1 from "../../img/chk.PNG"
import img2 from "../../img/img.PNG"
import img3 from "../../img/img2.PNG"
import img4 from "../../img/img3.PNG"
import img5 from "../../img/img4.PNG"


function BookingSection() {
  return (
    <div className="Booking bg-amber-200 mx-auto px-24 py-10">
      <header className="BookingHeader">
       <h1 className=" text-3xl md:text-6xl font-normal leading-normal mt-0 mb-2 text-slate-800">Professional, licensed, and vetted <br/>therapists that you can trust</h1>
       
      </header>
      <body>
        <div className='py-10 flex-wrap md:flex '>
          <img className='mx-2 rounded-full w-[7%] h-full border-solid border-4 border-blue-600' src={img1}   alt="therapiest"/>
          <img  className='mx-2 rounded-full w-[7%] h-full border-solid border-4 border-blue-600' src={img2}   alt="therapiest"/>
          <img className='mx-2 rounded-full w-[7%] border-solid border-4 border-blue-600' src={img3}   alt="therapiest"/>
          <img className='mx-2 rounded-full w-[7%] border-solid border-4 border-blue-600' src={img4}   alt="therapiest"/>
          <img className='mx-2 rounded-full w-[7%] border-solid border-4 border-blue-600' src={img5}   alt="therapiest"/>
        </div>
         
        <p   className="text-justify mt-2 ">
          Tap into the worlds largest network of licensed, accredited, and experienced therapists who can help you with<br/>
         a range of issues including depression, anxiety, relationships, trauma, grief, and more. with our therapists,<br/>
         you get the same professionalism and quality you would expect from an in-office therapist, but with the ability to<br/>
          communicate whenever and however you want.
        </p>

          <BookingButton  />
          
   

      </body>
    </div>
  );
}

export default BookingSection;
