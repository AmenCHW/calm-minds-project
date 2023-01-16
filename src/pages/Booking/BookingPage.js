import React, { useState, useEffect } from 'react';
import BookingForms from './BookingForms';
import "./BookingRadioButtonStyle.css"

function Booking() {
  // const [checked, setChecked] = useState('')
  // const isChecked = (value) => value === checked;
  // const onSelect = ({ target: { value } }) => {
  //   setChecked(value)
  // }

  const [step, setStep] = useState(1)
  const [pageTitle, setPageTitle] = useState('')
  const [pageText, setPageText] = useState('')

  const [formData, setFormData] = useState({
    counseling_type: null,
    relationship_status: null,
    ever_been_in_therapy_before: null,
    counselor_qualities: null,
    issues: null,
    what_brings_you_here: null,
  })

  const handleSubmit = (e) => {
    e.preventDefault();
  }


  useEffect(() => {
    if (step === 1 || step === 2 || step === 3 || step === 4 || step === 5) {
      setPageTitle("LET'S MATCH YOU WITH THE RIGHT THERAPIST");
      setPageText("Please fill out this short questionnaire to provide some general and anonymous background about you and the issues you'd like to deal with in online therapy. It would help us match you with the most suitable therapist for you.");
    } else if (step === 6) {
      setPageTitle("WHAT BRINGS YOU HERE?");
      setPageText("Please specify (in a few sentences) why you'd like counseling.This will give your counselor a good understanding of where to start.")
    } else if (step === 7) {
      setPageTitle("SUBMIT YOUR APPOINTMENT");
      setPageText("Click Submit if you are sure of all your choices.");
    } else if (step === 8) {
      setPageTitle("YOUR REQUEST HAS BEEN SUBMITTED");
      setPageText("You will receive an email guiding you to book a date and time soon.");
    }
  }, [step]);



  return (
    <div className='mx-auto lg:max-w-7xl px-10 py-10'>

      <h1 className='pt-5 text-3xl md:text-5xl format-normal leading-normal'>
        {pageTitle}
      </h1>

      <p className='mt-2 text-2xl text-gray-500'>
        {pageText}
      </p>

      <div>
        <BookingForms step={step} setStep={setStep} formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />
      </div>

    </div>
  );
}

export default Booking;
