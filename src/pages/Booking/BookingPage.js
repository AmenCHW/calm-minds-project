import React, { useState } from 'react';
import FirstSecondThirdForm from './FirstSecondThirdForm';
import "./BookingRadioButtonStyle.css"

function Booking() {
  // const [checked, setChecked] = useState('')
  // const isChecked = (value) => value === checked;
  // const onSelect = ({ target: { value } }) => {
  //   setChecked(value)
  // }

  const [step, setStep] = useState(1)

  const [formData, setFormData] = useState({
    counseling_type: "",
    relationship_status: "",
    ever_been_in_therapy_before: "",
    counselor_qualities: "",
    issues: "",
    what_brings_you_here: "",
  })

  const ChangePageTitle = () => {
    let pageTitle;

    if (step === 1 || step === 2 || step === 3 || step === 4 || step === 5) {
      pageTitle = "LET'S MATCH YOU WITH THE RIGHT THERAPIST";
    } else if (step === 6) {
      pageTitle = "WHAT BRINGS YOU HERE?";
    } else if (step === 7) {
      pageTitle = "SUBMIT YOUR APPOINTMENT";
    } else if (step === 8) {
      pageTitle = "YOUR REQUEST HAS BEEN SUBMITTED";
    }
    // eslint-disable-next-line
    // console.log(pageTitle)
    return pageTitle;
  }

  const ChangePageText = () => {
    let pageText;

    if (step === 1 || step === 2 || step === 3 || step === 4 || step === 5) {
      pageText = "Please fill out this short questionnaire to provide some general and anonymous background about you and the issues you'd like to deal with in online therapy. It would help us match you with the most suitable therapist for you.";
    } else if (step === 6) {
      pageText = "Please specify (in a few sentences) why you'd like counseling.This will give your counselor a good understanding of where to start.";
    } else if (step === 7) {
      pageText = "Click Submit if you are sure of all your choices.";
    } else if (step === 8) {
      pageText = "You will receive an email guiding you to book a date and time soon.";
    }
    // eslint-disable-next-line
    // console.log(pageText)
    return pageText;
  }

  // const ChangeFormQuestion = () => {
  //   let formQuestion;

  //   if (step === 1) {
  //     formQuestion = "What Type Of Counseling Are You Looking For?";
  //   } else if (step === 2) {
  //     formQuestion = "What Is Your Relationship Status?";
  //   } else if (step === 3) {
  //     formQuestion = "Have You Ever Been In Therapy Before?";
  //   } else if (step === 4) {
  //     formQuestion = "Are There Any Specific Qualities That You'd Like In A Counselor?";
  //   } else if (step === 5) {
  //     formQuestion = "Are There Any Issues You'd Like To Focus On?";
  //   }
  //   // eslint-disable-next-line
  //   // console.log(formQuestion)
  //   return formQuestion;
  // }


  // eslint-disable-next-line
  console.log("Form Data", formData)

  return (
    <div className='mx-auto lg:max-w-7xl px-10 py-10'>

      <h1 className='pt-5 text-3xl md:text-5xl format-normal leading-normal'>
        {ChangePageTitle()}
      </h1>

      <p className='mt-2 text-2xl text-gray-500'>
        {ChangePageText()}
      </p>

      <div>
        <FirstSecondThirdForm step={step} setStep={setStep} formData={formData} setFormData={setFormData} />
      </div>

    </div>
  );
}

export default Booking;
