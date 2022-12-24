import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as SendIcon } from './icons/send.svg';
import { ReactComponent as TwitterIcon } from './icons/twitter.svg';
import { ReactComponent as FacebookIcon } from './icons/google.svg';
import { ReactComponent as GoogleIcon } from './icons/facebook.svg';


function Footer() {
  return (
    <div className="w-full place-items-center py-10 flex flex-col bg-[#FEE89E]  sm:flex-row sm:p-10 sm:pl-20 sm:pr-8">
      <div className="w-1/2 text-center sm:text-left">
        <h2 className="text-4xl font-medium text-[#1A1A1A]">Subscribe</h2>
        <p className="text-xl mt-2 font-normal text-[#718096]">
          We&apos;ll never spam you or share your email
        </p>
        <div className="mt-4 flex  sm:ml-0 ">
          <input
            className="p-2 border-2 w-full sm:w-1/2 border-[#718096] rounded-l-md"
            placeholder="Enter your e-mail"
          />
          <button
            className="p-2 border-y-2 border-r-2 border-[#718096] rounded-r-md bg-cyan-500 active:pr-1 active:pl-1 active:bg-cyan-400"
            type="submit"
            aria-label="Send"
          >
            <SendIcon />
          </button>
        </div>
      </div>
      <div className="w-1/2 text-center place-content-evenly">
        <div className="h-1/2 flex place-content-around gap-1 mt-4 sm:mt-0">
          <Link to="/" className="text-xl text-[#718096] font-normal hover:text-[#AAC1E3]">
            Home
          </Link>
          <Link to="/blogs" className="text-xl text-[#718096] font-normal hover:text-[#AAC1E3]">
            Blogs
          </Link>
          <Link to="/about" className="text-xl text-[#718096] font-normal hover:text-[#AAC1E3]">
            About
          </Link>
          <Link to="/contact" className="text-xl text-[#718096] font-normal hover:text-[#AAC1E3]">
            Contact
          </Link>
        </div>
        <div className="h-1/2 flex place-content-evenly  mt-8 sm:px-14">
          <TwitterIcon className='cursor-pointer' />
          <FacebookIcon className='cursor-pointer'/>
          <GoogleIcon className='cursor-pointer'/>
        </div>
      </div>
    </div>
  );
}

export default Footer;
