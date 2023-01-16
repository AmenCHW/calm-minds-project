import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
import img from './image 1.png';
import fb from './Style.png';
import google from './google.svg';

function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [, setError] = useState('');
  const { signIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signIn(email, password)
      navigate('/')
    } catch (error) {
      setError(error.message);
    }
  }

  const { googleSignIn } = UserAuth();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      navigate('/')
    } catch (error) {
      // eslint-disable-next-line
      console.log(error);
    }
  };

  const { facebookSignIn } = UserAuth();
  
  const handleFacebookSignIn = async () => {
    try {
      await facebookSignIn();
      navigate('/')
    } catch (error) {
      // eslint-disable-next-line
      alert("This account already exists")

    }
  };



  return (
    <div className="lg:mx-24 mx-1 my-10  pl-3  ">
      <h1 className="lg:mx-24 mx-3 my-10 text-3xl md:text-4xl lg:text-5xl pl-3 font-normal  ">
        LOGIN
      </h1>

      <div className="flex flex-wrap  lg:my-10 ">
        <div>
          <form onSubmit={handleSubmit} className="shadow-lg  border-2  rounded-lg h-72 max-w-sm  px-4 py-3  border-t-0 mr-4 ">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Your Email "
              className="border-2 rounded h-14  border-[#E5E5E5]  my-4 px-20 max-w-lg 
           placeholder:pl-0"
            />

            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Your Password "
              className="border-2 rounded h-14  border-[#E5E5E5]  my-5 mb-8 px-20 max-w-lg 
           placeholder:pl-0"
            />
            <button
              type="submit"
              className="shadow-lg bg-[#2DD3E3] hover:bg-[#66e0eb] border-[#2DD3E3] hover:border-[#41d6e4] text-[#000000] 
          border-2 font-bold mx-1 mb-5 py-2 px-14 rounded"
            >
              Login
            </button>
            <Link to="/signup" className="focus:text-[#FEE89E]">
              <button
                type="button"
                className="shadow-lg  bg-[#FFFFFF] hover:bg-[#aaf1f7] border-[#a2f4fb] hover:border-[#96eff7] text-[#2DD3E3] 
         border-2 font-bold mx-1 mb-5 py-2 px-14 rounded"
              >
                Signup
              </button>
            </Link>
          </form>
          <div className="flex">
            <hr className="bg-[#2DD3E3] border-2 w-40 h-1 my-8 mx-3 " />
            <p className="my-3 text-xl">or</p>
            <hr className="bg-[#2DD3E3] border-2 w-40 h-1 my-8 mx-3" />
          </div>

          <div className="flex justify-center ">
           <button type='button' onClick={handleFacebookSignIn}> <img src={fb} alt="loading" className="mr-6"  /></button>
            <button type="button" onClick={handleGoogleSignIn} ><img src={google} alt="loading" className="ml-6" /> </button>
          </div>
        </div>
        <div className="  ">
          <img
            src={img}
            alt="loading"
            className="lg:ml-2  ml-0 w-full   lg:h-96"
          />
        </div>
      </div>
    </div>
  );
}

export default LogIn;

// lg:max-w-5xl  md:max-w-[30%]
