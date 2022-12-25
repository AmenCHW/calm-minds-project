import React from 'react';
import contactimage from "./contactimage.png"

function Contact() {
  return (
    <div className="mx-auto py-14 px-10 lg:px-44">
      <h1 className="pt-5 text-3xl md:text-5xl format-normal leading-normal">
      SEND US YOUR REQUEST!
      </h1>
      
      <p className=" mt-2 text-2xl">
      Do you have a question, concern, idea, feedback, or problem?  
      If you need assistance, please fill out the form below and we&apos;d be happy to help!
      </p>

      <div className='flex flex-wrap pt-10 justify-between'>
        <div>
           <p className='text-xl font-bold'>Type of contact</p>
           <div className="flex flex-col">
              <div className="py-4 text-xl">
              <input type="checkbox" id="" name="" value="" /> I have a question about the service.
              </div>
              
              <input type="checkbox" shape="round" id="" name="" value="" /> I&apos;m a registered client and I need support.
              <input type="checkbox" id="" name="" value="" /> I&apos;m a counselor interested in joining.
              <input type="checkbox" id="" name="" value="" /> I&apos;m a registered counselor and I need support.
              <input type="checkbox" id="" name="" value="" /> I have a business-related inquiry.
              <input type="checkbox" id="" name="" value="" /> I&apos;m interested in Healing Online for my organization.
              <input type="checkbox" id="" name="" value="" /> I have a billing related question.
           </div>
        </div>

        <img src={contactimage} alt="contactimage" />
      </div>
    </div>
  )
}

export default Contact;
