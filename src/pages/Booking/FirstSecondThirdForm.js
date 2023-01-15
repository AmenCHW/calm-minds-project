import React, { useState } from 'react';
import "./BookingRadioButtonStyle.css"




function FirstSecondThirdForm({ step, setStep, formData, setFormData }) {
    const [checked, setChecked] = useState('')

    const radioButtons1 = [{
        id: 1,
        value: 'Individual',
        label: 'Individual Counseling',
        title: 'counseling_type',
    },
    {
        id: 2,
        value: 'Teen',
        label: 'Teen Counseling (For My Child)',
        title: 'counseling_type',
    },
    ]

    const radioButtons2 = [{
        id: 3,
        value: 'Single',
        label: 'Single',
        title: 'relationship_status',
    },
    {
        id: 4,
        value: 'Married',
        label: 'Married',
        title: 'relationship_status',
    },
    {
        id: 5,
        value: 'Divorced',
        label: 'Divorced',
        title: 'relationship_status',

    },
    ]

    const radioButtons3 = [{
        id: 6,
        value: 'Yes',
        label: 'Yes',
        title: 'ever_been_in_therapy_before'
    },
    {
        id: 7,
        value: 'No',
        label: 'No',
        title: 'ever_been_in_therapy_before'
    },
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
    }


    const ChangeFormQuestion = () => {
        let formQuestion;

        if (step === 1) {
            formQuestion = "What Type Of Counseling Are You Looking For?";
        } else if (step === 2) {
            formQuestion = "What Is Your Relationship Status?";
        } else if (step === 3) {
            formQuestion = "Have You Ever Been In Therapy Before?";
        }
        // } else if (step === 4) {
        //   formQuestion = "Are There Any Specific Qualities That You'd Like In A Counselor?";
        // } else if (step === 5) {
        //   formQuestion = "Are There Any Issues You'd Like To Focus On?";
        // }
        // eslint-disable-next-line
        console.log(formQuestion)
        return formQuestion;
    }

    // eslint-disable-next-line
    console.log("step", step)

    function DisplayRadioButtons() {
        let radioButtons;
        if (step === 1) {
            radioButtons = radioButtons1
        } else if (step === 2) {
            radioButtons = radioButtons2
        } else if (step === 3) {
            radioButtons = radioButtons3
        }
        return radioButtons.map(({ id, value, label, title }) => {
            // eslint-disable-next-line
            console.log(title)
            return (
                <div className="form-check pt-4 text-1xl sm:text-3xl font-normal" key={id}>
                    <input
                        type="radio"
                        name="exampleRadios"
                        id={id}
                        value={value}
                        checked={value === checked}
                        onChange={() => { setChecked(value); setFormData({ ...formData, title: value }) }}
                    />
                    <label className="form-check-label" htmlFor={id}>
                        {label}
                    </label>
                </div>
            )
        });
    }

    return (

        <div className='p-6 mt-9 mb-12 mx-auto w-auto md:w-[700px]  h-[500px] border-2 border-[#E5E5E5] rounded-md shadow-lg bg-white'>
            <form onSubmit={handleSubmit}>
                <h1 className='text-1xl sm:text-3xl font-normal pb-8 text-center md:text-left'>
                    {ChangeFormQuestion()}
                </h1>

                <div className='flex flex-col'>
                    {DisplayRadioButtons()}

                    <button type="submit"
                        disabled={step > 3}
                        onClick={() => { setStep((currentStep) => currentStep + 1) }}
                        className='bg-[#2DD3E3] text-1xl sm:text-2xl px-6 py-3 font-normal border-2 border-[#2DD3E3] rounded-md place-self-start relative left-0 top-[12em] sm:top-[7em] md:top-[8em] lg:top-[8.5em]'>
                        NEXT
                    </button>
                </div>
            </form>
        </div>

    )
}

export default FirstSecondThirdForm;



