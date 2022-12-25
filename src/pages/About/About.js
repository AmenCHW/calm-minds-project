import React from 'react';
import AboutText from './components/AboutText';
import Founder from './components/Founder';
import image from './components/images/adilimam.jpg';

function About() {

  const descriptionMain = "At Healing, we believe there is a better way to do things. A more valuable way where customers are earned rather than bought. We're obsessively passionate about it, and our mission is to help people achieve it. We focus on search engine optimization. It's one of the least understood and least transparent aspects of great marketing, and we see that as an opportunity. We're excited to simplify SEO for everyone through our software, education, and community."
  const descriptionFounder = "Healing was founded by Payam Abubakr in 2021. It was called Healing Online, and started as a blog and an online community where some of the world's therapists shared their research and ideas. We launched the Beginner's Guide to Therapy and our first study, and that hub of industry expertise transformed into a small consulting firm and led us to create the Online Therapist of today!"

  return <div className="">
    <AboutText title="HEALING!" slogan="some cool one liner !" description={descriptionMain}/>
    <Founder title='Our Founding' description={descriptionFounder} image={image}/>
  </div>;
}

export default About;
