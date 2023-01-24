import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase-config';
import contactimage from './contactimage.png';
import { addressObject, radioObject } from './ContactObjects';

export default function Contact() {

  const [checked, setChecked] = useState('')

  const [formData, setFormData] = useState({
    type_of_contact: null,
    fullname: null,
    email: null,
    details: null,
  })

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addDoc(collection(db, "contact"), {
      fullname: formData.fullname,
      email: formData.email,
      details: formData.details,
      type_of_contact: formData.type_of_contact,
    })

    navigate('/contact-thanks')
  };


  return (
    <div className="mx-auto lg:max-w-7xl px-10 py-10">
      <h1 className="pt-5 text-3xl sm:text-4xl md:text-5xl format-normal leading-normal">
        SEND US YOUR REQUEST!
      </h1>

      <p className="mt-2 text-xl md:text-2xl">
        Do you have a question, concern, idea, feedback, or problem? If you need
        assistance, please fill out the form below and we&apos;d be happy to
        help!
      </p>

      <div className="flex flex-wrap justify-center lg:flex-nowrap lg:justify-between mt-8 md:mt-16">
        <div>
          <form onSubmit={handleSubmit}>
            <p className="text-xl md:text-2xl font-semibold mb-4">Type of contact</p>

            <div className="flex flex-col">
              {radioObject.map(({ id, value }) => {
                return (
                  <div key={id} className="flex py-3">
                    <label className="text-xl" htmlFor={id}>
                      <input
                        type="radio"
                        name="type-of-contact"
                        value={value}
                        checked={value === checked}
                        onChange={() => { setChecked(value); setFormData({ ...formData, type_of_contact: value }) }}
                        htmlFor={id}
                        className="mr-4"
                      />
                      {value}</label>
                  </div>
                );
              })}
            </div>

            <label className=" flex flex-col mt-8 lg:mt-20" htmlFor="name">
              <span className="mb-5 text-xl md:text-2xl font-normal">Full Name:</span>
              <input
                type="text"
                name="name"
                onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
                id="name"
                placeholder="Enter your full name here..."
                className="border-2 rounded-lg h-16 w-auto border-[#E5E5E5] pl-4
           placeholder:pl-1 "
              />
            </label>

            <label className=" flex flex-col" htmlFor="email">
              <span className="mb-5 text-xl md:text-2xl font-normal pt-5">Email:</span>
              <input
                type="email"
                name="email"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                id="email"
                placeholder="Enter your email address here..."
                className="border-2 rounded-lg h-16 w-auto border-[#E5E5E5] pl-4
           placeholder:pl-1"
              />
            </label>

            <label className=" flex flex-col" htmlFor="details">
              <span className="mb-5 text-xl md:text-2xl font-normal pt-5">Details:</span>
              <input
                type="text"
                name="details"
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                id="details"
                placeholder="Enter your details here..."
                className="border-2 rounded-lg h-40 w-auto sm:w-[500px] lg:w-[604px] border-[#E5E5E5] pl-4
           placeholder:pl-1"
              />
            </label>

            <button
              type="submit"
              className="bg-[#2DD3E3] my-5 border-2 rounded-md px-10 py-2 border-[#2DD3E3] text-xl font-normal"
            >
              SUBMIT
            </button>

          </form>
        </div>

        <div className="flex flex-col">
          <img
            className="mt-3 md:mt-0 h-auto lg:h-96 xl:h-auto xl:w-auto"
            src={contactimage}
            alt="contactimage"
          />

          <div className="mx-auto mt-9 lg:my-auto lg:align-middle">
            <div className="flex flex-col bg-[#EAF8F9] border-2 border-[#EAF8F9] rounded-xl h-70 lg:h-auto p-8 w-auto sm:w-96 lg:w-80 xl:w-96 text-2xl sm:ml-2 ">
              <h1 className="font-normal pb-3">Find Us At:</h1>
              {addressObject.map((address) => {
                return (
                  <p key={address.id} className="text-gray-500">
                    {address.text}
                  </p>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </div >
  );
}
