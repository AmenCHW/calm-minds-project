import React from 'react';
import { Link } from 'react-router-dom';
import img from "./image 1.png"
import fb from "./Style.png"
import google from "./google.svg"


function LogIn() {
  return (
    <div className="mx-24 my-10  pl-3 ">
      <h1 className="mx-24 my-10 text-3xl md:text-4xl lg:text-5xl pl-3 font-normal  sm:justify-center">
        LOGIN
      </h1>
      
      <div className='flex flex-wrap  lg:my-10 '>
        <div>
        <form className='shadow-lg  border-2  rounded-lg h-72 max-w-sm  px-4 py-3  border-t-0 '>
          <input
            type="text"
            placeholder=" Your Email "
            className="border-2 rounded h-14  border-[#E5E5E5]  my-4 px-20 max-w-lg
           placeholder:pl-1"
          />

          <input
            type="text"
            placeholder=" Your Password "
            className="border-2 rounded h-14  border-[#E5E5E5]  my-5 mb-8 px-20 max-w-lg
           placeholder:pl-1"
          />
          <button type='button' className="shadow-lg bg-[#2DD3E3] hover:bg-[#66e0eb] border-[#2DD3E3] hover:border-[#41d6e4] text-[#000000] 
          border-2 font-bold mx-1 mb-5 py-2 px-14 rounded">
          Login
        </button>
        <Link to="/signup" className="focus:text-[#FEE89E]">
        <button  type='button' className="shadow-lg  bg-[#FFFFFF] hover:bg-[#aaf1f7] border-[#a2f4fb] hover:border-[#96eff7] text-[#2DD3E3] 
         border-2 font-bold mx-1 mb-5 py-2 px-14 rounded">
        Signup
      </button></Link>
        </form>
        <div className='flex'>
        <hr className='bg-[#2DD3E3] border-2 w-40 h-1 my-8 mx-3 '/>
        <p className='my-3 text-xl'>or</p>
        <hr  className='bg-[#2DD3E3] border-2 w-40 h-1 my-8 mx-3' /> 
        </div>
        
        <div className='flex justify-center '>
        <img src={fb} alt='loading' className='mr-6' />
        <img src={google} alt='loading' className='ml-6' />
        </div>
        </div>
        <div className='md:mb-20  '><img src={img} alt='loading' className='lg:ml-32  lg:mb-36 max-w-xs lg:max-w-5xl lg:h-96 md:max-w-md' /></div>
      </div>
    </div>
  );
}

export default LogIn;
