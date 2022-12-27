import React from 'react';
import image from './components/images/therapist.jpg';

function About() {

  const descriptionMain = "At Healing, we believe there is a better way to do things. A more valuable way where customers are earned rather than bought. We're obsessively passionate about it, and our mission is to help people achieve it. We focus on search engine optimization. It's one of the least understood and least transparent aspects of great marketing, and we see that as an opportunity. We're excited to simplify SEO for everyone through our software, education, and community."
  const descriptionFounder = "Healing was founded by Payam Abubakr in 2021. It was called Healing Online, and started as a blog and an online community where some of the world's therapists shared their research and ideas. We launched the Beginner's Guide to Therapy and our first study, and that hub of industry expertise transformed into a small consulting firm and led us to create the Online Therapist of today!"

  return <div className="">
     <div className='mx-auto text-center px-10 md:px-32 lg:px-48 sm:text-left bg-white font-poppins pt-12'>
        <h2 className='font-normal text-5xl pb-2'>HEALING!</h2>
        <h3 className='font-light text-2xl text-[#808080] pb-16 leading-6'>some cool one liner !</h3>
        <p className='font-normal leading-7 text-[#424A4F] text-xl pb-20 sm:pb-40'>{descriptionMain}</p>
     </div>
     <div className='mx-auto text-center px-10 md:px-32 lg:px-48 sm:text-left bg-[#EAF8F9] font-poppins pt-10 flex flex-col place-items-center sm:flex sm:flex-row sm:place-items-start'>
        <div className='w-2/5  sm:pr-14 pb-10'>
            <img src={image} alt="Founder Pic" className='rounded-md'/>
        </div>
        <div className='w-3/5 pb-10'>
            <h2 className='text-[#424A4F] font-normal text-5xl pb-7'>Our Founding</h2>
            <p className='text-xl'>{descriptionFounder}</p>
        </div>
     </div>
  </div>;
}

export default About;
