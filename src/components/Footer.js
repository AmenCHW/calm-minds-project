import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as TwitterIcon } from '../icons/twitter.svg';
import { ReactComponent as FacebookIcon } from '../icons/google.svg';
import { ReactComponent as GoogleIcon } from '../icons/facebook.svg';
import SubcribedEmails from './SubcribedEmails';

const MenuObject = [
  {
    id: 1,
    title: "Home",
    linkto: "/"
  },
  {
    id: 2,
    title: "Blogs",
    linkto: "/blogs"
  },
  {
    id: 3,
    title: "About",
    linkto: "/about"
  },
  {
    id: 4,
    title: "Contact",
    linkto: "/contact"
  }
]

function Footer() {

  return (
    <div className="mx-auto px-8 lg:px-20 py-6 flex-wrap bg-[#FEE89E] sm:flex justify-evenly items-center">

      <div className="sm:w-1/2 text-left mx-auto">
        <h2 className="text-2xl sm:text-3xl font-medium text-[#1A1A1A]">Subscribe</h2>

        <p className="text-xl mt-2 font-normal text-[#718096]">
          We&apos;ll never spam you or share your email
        </p>

        <div className='mt-5'>
          <SubcribedEmails />
        </div>

      </div>

      <div className="sm:w-1/2 mx-auto text-center sm:text-left">

        <div className="mx-auto flex-wrap justify-center sm:flex  mt-4 sm:mt-0 sm:justify-between">
          {MenuObject.map(({ id, title, linkto }) => {
            return (
              <Link
                to={linkto}
                key={id}
                className="text-xl text-[#718096] font-normal hover:text-[#AAC1E3] mx-1 sm:mx-0"
              >
                {title}
              </Link>
            )
          })}
        </div>

        <div className="h-1/2 flex justify-center items-center mt-8 mx-auto">
          <TwitterIcon className="cursor-pointer mx-2 sm:mx-3" />
          <FacebookIcon className="cursor-pointer mx-2 sm:mx-3" />
          <GoogleIcon className="cursor-pointer mx-2 sm:mx-3" />
        </div>

      </div>

    </div>
  );
}

export default Footer;
