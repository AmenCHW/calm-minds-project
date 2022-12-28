import React from 'react'

function TherapistCreate() {
  return (
    <div className='m-8 sm:m-8 flex-col'>
        <h2 className='mb-8 font-normal text-3xl text-center sm:text-left sm:text-5xl'>CREATE AN ACCOUNT</h2>
        <div>
            <div className='mb-4'>
                <h2 className=' font-normal text-2xl text-gray-500 ml-1 mb-1'>Username</h2>
                <input type='text' className='border rounded-md p-2 w-full h-12 sm:w-96'/>
            </div>
            <div className='mb-4'>
                <h2 className=' font-normal text-2xl text-gray-500 ml-1 mb-1'>Email</h2>
                <input type='text' className='border rounded-md p-2 w-full h-12 sm:w-96'/>
            </div>
            <div className='mb-4'>
                <h2 className=' font-normal text-2xl text-gray-500 ml-1 mb-1'>City</h2>
                <input type='text' className='border rounded-md p-2 w-full h-12 sm:w-96'/>
            </div>
            <div className='mb-4'>
                <h2 className=' font-normal text-2xl text-gray-500 ml-1 mb-1'>License Number</h2>
                <input type='text' className='border rounded-md p-2 w-full h-12 sm:w-96'/>
            </div>
            <div className='mb-4'>
                <h2 className=' font-normal text-2xl text-gray-500 ml-1 mb-1'>Create Password</h2>
                <input type='text' className='border rounded-md p-2 w-full h-12 sm:w-96'/>
            </div>
            <div className='mb-4'>
                <h2 className=' font-normal text-2xl text-gray-500 ml-1 mb-1'>Confirm Password</h2>
                <input type='text' className='border rounded-md p-2 w-full h-12 sm:w-96'/>
            </div>
        </div>
        <div>
             <button className=' mt-12 w-48 h-16 bg-[#2dd3e3] rounded-md hover:bg-[#4dd9e9] font-normal text-2xl' type='button'>CREATE</button>
        </div>
    </div>
  )
}

export default TherapistCreate