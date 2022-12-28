import React, { useState } from 'react';
import "./BookingRadioButtonStyle.css"

function Booking() {
  const [checked, setChecked] = useState('')
  const isChecked = (value) => value === checked;
  const onSelect = ({ target: { value } }) => {
    // eslint-disable-next-line
    console.log(value)
    setChecked(value)
  }

  const radioButtons = [{
    id: 'exampleRadios1',
    value: 'option1',
    label: 'Individual Counseling'
  },
  {
    id: 'exampleRadios2',
    value: 'option2',
    label: 'Teen Counseling (For My Child)'
  },
  ]

  return (
    <div className='mx-auto lg:max-w-7xl px-10 py-10'>

      <h1 className='pt-5 text-3xl md:text-5xl format-normal leading-normal'>
        LET&apos;S MATCH YOU WITH THE RIGHT THERAPIST
      </h1>

      <p className='mt-2 text-2xl text-gray-500'>
        Please fill out this short questionnaire to provide some general and anonymous background about you and the issues you&apos;d like
        to deal with in online therapy. It would help us match you with the most suitable therapist for you.
      </p>

      <div className='p-6 mt-9 mb-12 mx-auto w-[700px] h-[500px] border-2 border-[#E5E5E5] rounded-md shadow-lg bg-white'>
        <form >
          <h1 className='text-3xl font-normal pb-8 text-center'>
            What Type Of Counseling Are You Looking For?
          </h1>

          {radioButtons.map(({ id, value, label }) => {
            return (
              <div className="form-check pt-4 text-3xl font-normal" key={id}>
                <input
                  className='checked:bg-[#2DD3E3] checked:text-white checked:border-[#2DD3E3]'
                  type="radio"
                  name="exampleRadios"
                  id={id}
                  value={value}
                  checked={isChecked(value)}
                  onChange={onSelect}
                />
                <label className="form-check-label" htmlFor={id}>
                  {label}
                </label>
              </div>
            )
          })}

        </form>
      </div>

    </div>
  );
}

export default Booking;
