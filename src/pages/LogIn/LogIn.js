import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import image2 from './image1.svg';
import { UserAuth } from '../../context/AuthContext';
import { ReactComponent as FacebookIcon } from '../../icons/facebookBlue.svg';
import { ReactComponent as GoogleIcon } from '../../icons/googleBlue.svg';


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
    <div className="mx-auto lg:max-w-7xl px-10 py-10">


      <div className="flex-wrap md:flex lg:my-10 justify-center lg:justify-between">
        <div>

          <h1 className="pt-5 md:pl-3 mb-10 text-3xl sm:text-4xl md:text-5xl format-normal leading-normal sm:ml-24 md:ml-0">
            LOGIN
          </h1>

          <form onSubmit={handleSubmit} className="shadow-lg border-2 rounded-lg sm:w-[458px] p-10 border-t-0 mx-auto md:mr-2">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Your Email"
              className="border-2 rounded h-14 border-[#E5E5E5] my-4 w-full placeholder:pl-3"
            />

            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Your Password"
              className="border-2 rounded h-14 border-[#E5E5E5] my-5 mb-8 w-full placeholder:pl-3"
            />

            <div className='flex flex-wrap justify-between'>
              <button
                type="submit"
                className="shadow-xl bg-[#2DD3E3] hover:bg-[#66e0eb] border-[#2DD3E3] hover:border-[#41d6e4] text-[#000000] 
          border-2 font-bold my-5 py-2 px-9 sm:px-14 rounded"
              >
                Login
              </button>

              <Link to="/signup" className="focus:text-[#FEE89E]">
                <button
                  type="button"
                  className="bg-[#FFFFFF] hover:bg-[#aaf1f7] border-[#a2f4fb] hover:border-[#96eff7] text-[#2DD3E3] 
         border-2 font-bold my-5 py-2 px-8 sm:px-14 rounded"
                >
                  Signup
                </button>
              </Link>
            </div>
          </form>

          <div className="w-full flex mt-10 px-10">
            <div className="w-2/5 border-t mt-2 border-[#2DD3E3]" />
            <h2 className="w-1/5 text-center font-light text-lg text-[#1D6B87]">
              Or
            </h2>
            <div className="w-2/5 border-t mt-2 border-[#2DD3E3]" />
          </div>

          <div className="w-full flex place-content-center gap-12 mt-4">
            <FacebookIcon className="cursor-pointer -mt-0.5" onClick={handleFacebookSignIn} />
            <GoogleIcon className="cursor-pointer" onClick={handleGoogleSignIn} />
          </div>
        </div>

        <img
          src={image2}
          alt="loading"
          className="mt-10 lg:mt-0 w-auto h-auto md:w-1/2 lg:pl-3"
        />

      </div>
    </div>
  );
}

export default LogIn;
