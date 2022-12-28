import React from 'react';
import { Link } from 'react-router-dom';
import Image from './SignupImage.png';
import { ReactComponent as FacebookIcon } from '../../icons/facebookBlue.svg';
import { ReactComponent as GoogleIcon } from '../../icons/googleBlue.svg';
// import YearSelect from './YearSelect';
// import MonthSelect from './MonthSelect';

function Signup() {
  return (
    <div className="flex flex-col place-items-center  p-6 lg:flex-row lg:pt-24">
      <img src={Image} alt="signup" className=" w-full lg:w-1/2 p-2 lg:p-6" />
      <div className='w-full lg:w-1/2 p-2 lg:p-6'>
        <h2 className='font-normal text-5xl text-center lg:text-left mb-8'>SIGNUP NOW</h2>
        <form className="lg:w-full px-8 py-10 flex flex-col bg-white rounded-md drop-shadow-xl">
            <div className='flex flex-col place-items-center lg:flex-row m-1'>
                <input className='border border-[#D1DBE3] py-4 px-3.5  w-full mb-2 lg:mb-0 lg:mr-1' type='text' placeholder='First Name'/>
                <input className='border border-[#D1DBE3] py-4 px-3.5  w-full lg:ml-1' type='text' placeholder='Last Name'/>
            </div>
            <input className='border border-[#D1DBE3] py-4 px-3.5 m-1' type='text' placeholder='Your Email'/>
            <input className='border border-[#D1DBE3] py-4 px-3.5 m-1' type='text' placeholder='Confirm Email'/>
            <div className='flex flex-col place-items-center lg:flex-row m-1'>
                <input className='border border-[#D1DBE3] py-4 px-3.5  w-full mb-2 lg:mb-0 lg:mr-1' type='text' placeholder='Pssword'/>
                <input className='border border-[#D1DBE3] py-4 px-3.5  w-full lg:ml-1' type='text' placeholder='Confirm Password'/>
            </div>
            <div className='flex flex-col w-full place-items-center py-4 px-1 lg:flex-row mb-1 place-content-around'>
               <h2 className='lg:w-2/5'>Birth Date:</h2> 
               <input className='border border-[#D1DBE3] py-4 px-3.5 w-full lg:w-full ' type='date' placeholder='Day'/>
               {/* <div className='flex mt-2 gap-2 lg:mt-0 lg:w-3/5 place-content-around'>
                <MonthSelect />  
                <YearSelect />
               </div> */}
            </div>
            <div className='flex mt-2 lg:mt-8 lg:w-full place-content-center gap-8'>
                <Link to='/login'><button className=' w-28 h-12 md:w-48 md:h-16 border border-[#2DD3E3] font-medium text-2xl text-[#2DD3E3] rounded-md hover:bg-cyan-100 focus:bg-[#2DD3E3] focus:text-black focus:shadow-xl' type='button'>Log In</button></Link>
                <Link to='/signup'><button className='w-28 h-12 md:w-48 md:h-16 border border-[#2DD3E3] font-medium text-2xl text-[#2DD3E3] rounded-md  hover:bg-cyan-100 focus:bg-[#2DD3E3] focus:text-black focus:shadow-xl' type='button'>Sign Up</button></Link>
            </div>
            
        </form>
        <div className='w-full flex mt-10 px-10'><div className='w-2/5 border-t mt-2 border-[#2DD3E3]'/><h2 className='w-1/5 text-center font-light text-lg text-[#1D6B87]'>Or</h2><div className='w-2/5 border-t mt-2 border-[#2DD3E3]'/></div>
        <div className='w-full flex place-content-center gap-12 mt-4'>
            <FacebookIcon className="cursor-pointer" />
            <GoogleIcon className="cursor-pointer" />
        </div>
      </div> 
    </div>
  );
}

export default Signup;
