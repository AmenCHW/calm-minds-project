import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { counselingTypeObject1, relationshipStatusObject2, therapyBeforeObject3, SpecificQualitiesObject4, issuesObject5 } from './BookingFormsObject';


function BookingForms({ step, setStep, formData, setFormData, handleSubmit }) {
    const [checked, setChecked] = useState('')

    const ChangeFormQuestion = () => {
        let formQuestion;

        if (step === 1) {
            formQuestion = "What Type Of Counseling Are You Looking For?";
        } else if (step === 2) {
            formQuestion = "What Is Your Relationship Status?";
        } else if (step === 3) {
            formQuestion = "Have You Ever Been In Therapy Before?";
        } else if (step === 4) {
            formQuestion = "Are There Any Specific Qualities That You'd Like In A Counselor?";
        } else if (step === 5) {
            formQuestion = "Are There Any Issues You'd Like To Focus On?";
        } else if (step === 7) {
            formQuestion = "Submit Appointment?";
        } else if (step === 8) {
            formQuestion = "Request Submitted";
        }
        // eslint-disable-next-line
        // console.log(formQuestion)
        return formQuestion;
    }

    // eslint-disable-next-line
    // console.log("step", step)

    // eslint-disable-next-line
    // console.log("formData", formData)

    function FormStyle() {
        let formstyle;
        if (step < 6 || step > 6) {
            formstyle = 'p-6 mt-9 mb-12 mx-auto w-auto md:w-[700px] h-auto sm:h-[500px] border-2 border-[#E5E5E5] rounded-md shadow-lg bg-white'
        }
        return formstyle;
    }

    function FormButtton() {
        let button;
        if (step <= 6) {
            button = <button type="submit"
                disabled={step === 1 && formData.counseling_type === null || step === 2 && formData.relationship_status === null || step === 3 && formData.ever_been_in_therapy_before === null || step === 4 && formData.counselor_qualities === null || step === 5 && formData.issues === null || step === 6 && (formData.what_brings_you_here === null || !formData.what_brings_you_here.trim().length)}
                onClick={() => { setStep((currentStep) => currentStep + 1) }
                }
                className='bg-[#2DD3E3] text-1xl sm:text-2xl px-6 py-3 font-normal border-2 border-[#2DD3E3] rounded-md place-self-start mt-5' >
                NEXT
            </button >
        } else if (step === 7) {
            button = <button type="submit"
                onClick={() => { setStep((currentStep) => currentStep + 1) }}
                className='bg-[#2DD3E3] text-1xl sm:text-2xl px-12 sm:px-28 py-3 font-normal border-2 border-[#2DD3E3] place-self-center items-center justify-center mx-auto rounded-md mt-7 mb-1 sm:mb-0'>
                SUBMIT
            </button>
        } else if (step === 8) {
            button = <button type="submit"
                className='bg-[#2DD3E3] text-1xl sm:text-2xl px-8 sm:px-16 py-3 font-normal border-2 border-[#2DD3E3] rounded-md place-self-center items-center justify-center self-center mx-auto mt-7 mb-1 sm:mb-0'>
                <Link to="/"> BACK TO HOME </Link>
            </button>
        }
        return button;
    }

    useEffect(() => {
        FormStyle();
        FormButtton();
    }, [step]);

    function DisplayRadioButtons() {
        let radioButtons;
        if (step === 1) {
            radioButtons = counselingTypeObject1.map(({ id, value, label }) => {
                return (
                    <div className="form-check pt-4 text-2xl sm:text-3xl font-normal" key={id}>
                        <input
                            type="radio"
                            name="exampleRadios"
                            id={id}
                            value={value}
                            checked={value === checked}
                            onChange={() => { setChecked(value); setFormData({ ...formData, counseling_type: value }) }}
                        />
                        <label className="form-check-label" htmlFor={id}>
                            {label}
                        </label>
                    </div>
                )
            })
        } else if (step === 2) {
            radioButtons = relationshipStatusObject2.map(({ id, value, label }) => {
                return (
                    <div className="form-check pt-4 text-2xl sm:text-3xl font-normal" key={id}>
                        <input
                            type="radio"
                            name="exampleRadios"
                            id={id}
                            value={value}
                            checked={value === checked}
                            onChange={() => { setChecked(value); setFormData({ ...formData, relationship_status: value }) }}
                        />
                        <label className="form-check-label" htmlFor={id}>
                            {label}
                        </label>
                    </div>
                )
            })
        } else if (step === 3) {
            radioButtons = therapyBeforeObject3.map(({ id, value, label }) => {
                return (
                    <div className="form-check pt-4 text-2xl sm:text-3xl font-normal" key={id}>
                        <input
                            type="radio"
                            name="exampleRadios"
                            id={id}
                            value={value}
                            checked={value === checked}
                            onChange={() => { setChecked(value); setFormData({ ...formData, ever_been_in_therapy_before: value }) }}
                        />
                        <label className="form-check-label" htmlFor={id}>
                            {label}
                        </label>
                    </div>
                )
            })
        } else if (step === 4) {
            radioButtons = SpecificQualitiesObject4.map(({ id, value, text }) => {
                return (
                    <div key={id} className="flex py-3">
                        <input
                            key={id}
                            type="radio"
                            htmlFor="for"
                            id={id}
                            name="type"
                            value={value}
                            checked={value === checked}
                            onChange={() => { setChecked(value); setFormData({ ...formData, counselor_qualities: value }) }}
                        />
                        <p className="ml-3 text-lg sm:text-xl">{text}</p>
                    </div>
                );
            })
        } else if (step === 5) {
            radioButtons = issuesObject5.map(({ id, value, text }) => {
                return (
                    <div key={id} className="flex py-3">
                        <input
                            key={id}
                            type="radio"
                            htmlFor="for"
                            id={id}
                            name="type"
                            value={value}
                            checked={value === checked}
                            onChange={() => { setChecked(value); setFormData({ ...formData, issues: value }) }}
                        />
                        <p className="ml-3 text-lg sm:text-xl">{text}</p>
                    </div>
                );
            })
        } else if (step === 6) {
            radioButtons = <input
                type="text"
                name="paragraph"
                onChange={(e) => setFormData({ ...formData, what_brings_you_here: e.target.value })}
                className="border-2 border-[#E5E5E5] rounded-md p-2 w-full h-[360px] mx-auto"
                required
            />
        }
        return radioButtons;
    }


    return (

        <div>
            <form onSubmit={handleSubmit} className={FormStyle()}>
                <h1 className={`text-2xl sm:text-3xl font-normal pb-8 ${step > 6 ? "text-center sm:pt-16 sm:pb-10" : "text-left"}`} >
                    {ChangeFormQuestion()}
                </h1>

                {step > 6 && <p className='text-center text-xl sm:text-2xl px-2 sm:px-16 sm:py-10'>{step === 7 ? "Please Be Aware That This Action Will Cost You A Ticket!" : "You Will Receive A Confirmation Email Soon Please Keep An Eye On Your Mail."} </p>}

                <div className='flex flex-col'>
                    {DisplayRadioButtons()}
                    {FormButtton()}
                </div>

            </form>
        </div >

    )
}

export default BookingForms;

