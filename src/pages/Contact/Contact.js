import React from 'react';
import contactimage from "./contactimage.png"

const radioObject = [
  {
    id: 1,
    text: "I have a question about the service."
  },
  {
    id: 2,
    text: "I'm a registered client and I need support."
  },
  {
    id: 3,
    text: "I'm a counselor interested in joining."
  },
  {
    id: 4,
    text: "I'm a registered counselor and I need support."
  },
  {
    id: 5,
    text: "I have a business-related inquiry."
  },
  {
    id: 6,
    text: "I'm interested in Healing Online for my organization."
  },
  {
    id: 7,
    text: "I have a billing related question."
  },



]

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

      <div className='flex flex-wrap pt-14 justify-between'>

        <div>
          <p className='text-2xl font-semibold mb-4'>Type of contact</p>
          <div className="flex flex-col">
            {radioObject.map((item) => {
              return (
                <label key={item.id} className="py-3 text-xl" htmlFor="for">
                  <input type="radio" id="for" name="" value="" />
                  <span className="ml-2">{item.text}</span>
                </label>
              )
            })}
          </div>
        </div>

        <img className='mt-3 md:mt-0' src={contactimage} alt="contactimage" />
      </div>

      <div className='flex flex-wrap justify-between mt-12'>

        <form>

          <label className=' flex flex-col' htmlFor="name">
            <span className="mb-5 text-2xl font-normal">Full Name:</span>
            <input type="text" id="name" placeholder="Enter your full name here..." className='border-2 rounded-lg h-16 w-[220px] md:w-[604px] border-[#E5E5E5] pl-4
          placeholder:md:pl-4 placeholder:pl-1' />
          </label>

        </form>

        <div className='mx-auto my-5 md:my-32'>
          <div className="flex flex-col bg-[#EAF8F9] border-2 border-[#EAF8F9] rounded-xl p-8 w-52 md:w-96 text-2xl ">
            <h1 className='font-normal'>
              Find Us At:
            </h1>
            <p className='text-gray-500'>
              Nergiz Plaza
            </p>
            <p className='text-gray-500'>
              3rd Floor
            </p>
            <p className='text-gray-500'>
              Bakhtiyari Street 40m
            </p>
            <p className='text-gray-500'>
              Erbil, Iraq
            </p>
            <p className='text-gray-500'>
              44001
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact;
