import React from 'react';

import BookingButton from './BookingButton';

import img1 from "../../img/chk.PNG"
import img2 from "../../img/img.PNG"
import img3 from "../../img/img2.PNG"
import img4 from "../../img/img3.PNG"
import img5 from "../../img/img4.PNG"


function BookingSection() {
  return (
    <div className="Booking bg-amber-200">
      <header className="BookingHeader">
       <h1 className="ml-80  text-6xl font-normal leading-normal mt-0 mb-2 text-slate-800   ">Professional, licensed, and vetted <br/>therapists that you can trust</h1>
       
      </header>
      <body>
        <div className='h-56 ml-64  flex px-0 items-stretch  '>
          <img className='rounded-full  scale-50 border-solid border-4 border-blue-600' src={img1}   alt="therapiest"/>
          <img  className='rounded-full scale-50  border-solid border-4 border-blue-600' src={img2}   alt="therapiest"/>
          <img className='rounded-full scale-50 border-solid border-4 border-blue-600' src={img3}   alt="therapiest"/>
          <img className='rounded-full scale-50 border-solid border-4 border-blue-600' src={img4}   alt="therapiest"/>
          <img className='rounded-full scale-50 border-solid border-4 border-blue-600' src={img5}   alt="therapiest"/>
        </div>
         
        <p   className="text-justify ml-72 mt-2 ">
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
