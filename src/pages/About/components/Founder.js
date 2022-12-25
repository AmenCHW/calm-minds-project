import React from 'react'

function Founder({image, title="Our Founding", description}) {
  return (
    <div className='mx-auto text-center sm:px-10 md:px-32 lg:px-48 sm:text-left bg-[#EAF8F9] font-poppins pt-10 flex flex-col place-items-center sm:flex sm:flex-row sm:place-items-start'>
        <div className='w-2/5  sm:pr-14 pb-10'>
            <img src={image} alt="Founder Pic" className='rounded-md'/>
        </div>
        <div className='w-3/5 pb-10'>
            <h2 className='text-[#424A4F] font-normal text-5xl pb-7'>{title}</h2>
            <p className='text-xl'>{description}</p>
        </div>
    </div>
  )
}

export default Founder