import React from 'react';

const TherapistCreateObj = [
    {
        id: 1,
        title: "Username",
        type: "text",
        value: "username"
    }, {
        id: 2,
        title: "Email",
        type: "email",
        value: "email"
    }, {
        id: 3,
        title: "City",
        type: "text",
        value: "city"
    }, {
        id: 4,
        title: "License Number",
        type: "number",
        value: "license number"
    }, {
        id: 5,
        title: "Create Password",
        type: "password",
        value: "create password"
    }, {
        id: 6,
        title: "Confirm Password",
        type: "password",
        value: "confirm password"
    }
]


function TherapistCreate() {

    return (
        <div className=' flex-col mx-auto lg:max-w-7xl px-10 py-10'>
            <form>
                <h2 className='mb-8 font-normal text-3xl text-center sm:text-left sm:text-5xl'>CREATE AN ACCOUNT</h2>
                <div>
                    {TherapistCreateObj.map(input => {
                        return (
                            <div key={input.id} className='mb-4'>
                                <h2 className=' font-normal text-2xl text-gray-500 ml-1 mb-1'>{input.title}</h2>
                                <input type={input.type} className='border rounded-md p-2 w-full h-12 sm:w-96' />
                            </div>
                        )
                    })}
                </div>
                <div>
                    <button type='submit' className=' mt-12 w-48 h-16 bg-[#2dd3e3] rounded-md hover:bg-[#4dd9e9] font-normal text-2xl' >CREATE</button>
                </div>
            </form>
        </div>


    )
}

export default TherapistCreate