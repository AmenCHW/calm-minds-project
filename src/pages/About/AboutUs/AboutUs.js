import React from 'react';
import image from '../img/therapist.jpg';

function AboutUs() {
  const descriptionMain =
    "At Healing, we believe there is a better way to do things. A more valuable way where customers are earned rather than bought. We're obsessively passionate about it, and our mission is to help people achieve it. We focus on search engine optimization. It's one of the least understood and least transparent aspects of great marketing, and we see that as an opportunity. We're excited to simplify SEO for everyone through our software, education, and community.";
  const descriptionFounder =
    "Healing was founded by Payam Abubakr in 2021. It was called Healing Online, and started as a blog and an online community where some of the world's therapists shared their research and ideas. We launched the Beginner's Guide to Therapy and our first study, and that hub of industry expertise transformed into a small consulting firm and led us to create the Online Therapist of today!";

  return (
    <div className="">

      <div className="lg:max-w-7xl mx-auto py-10 px-10 sm:text-left bg-white font-poppins pt-12">
        <h2 className="format-normal leading-normal text-3xl sm:text-4xl md:text-5xl pb-2">HEALING!</h2>
        <h3 className="font-light text-xl sm:text-2xl text-[#808080] pb-16 leading-6">
          some cool one liner !
        </h3>
        <p className="font-normal leading-7 text-[#424A4F] text-xl pb-20 sm:pb-40">
          {descriptionMain}
        </p>
      </div>

      <div className='bg-[#EAF8F9]'>
        <div className="lg:max-w-7xl mx-auto py-10 px-10 text-left font-poppins pt-10 flex-wrap sm:flex">

          <div className="sm:w-2/5 pb-10 sm:pr-10">
            <img src={image} alt="Founder Pic" className="rounded-md" />
          </div>

          <div className="sm:w-3/5 pb-10 mx-auto">
            <h2 className="text-[#424A4F] format-normal leading-normal text-3xl sm:text-4xl md:text-5xl pb-7">
              Our Founding
            </h2>
            <p className="text-xl">{descriptionFounder}</p>
          </div>

        </div>
      </div>

    </div>
  );
}

export default AboutUs;
