import React from 'react'

function AboutText({title, slogan, description}) {
  return (
    <div className='mx-auto text-center px-10 md:px-32 lg:px-48 sm:text-left bg-white font-poppins pt-12'>
        <h2 className='font-normal text-5xl pb-2'>{title}</h2>
        <h3 className='font-light text-2xl text-[#808080] pb-16 leading-6'>{slogan}</h3>
        <p className='font-normal leading-7 text-[#424A4F] text-xl pb-20 sm:pb-40'>{description}</p>
    </div>
  )
}

export default AboutText