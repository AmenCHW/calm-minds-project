import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Image from './SignupImage.png';
import { UserAuth } from '../../context/AuthContext';
import { ReactComponent as FacebookIcon } from '../../icons/facebookBlue.svg';
import { ReactComponent as GoogleIcon } from '../../icons/googleBlue.svg';

function Signup() {

  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [, setError] = useState('');
  const [notMatching, setNotMatching] = useState('');
  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    navigate('/signup-thanks')

    if (email === confirmEmail && password !== confirmPassword) {
      setNotMatching("Password is not matching")
    } else if (email !== confirmEmail && password === confirmPassword) {
      setNotMatching("Email is not matching")
    } else if (email !== confirmEmail && password !== confirmPassword) {
      setNotMatching("Password and Email are not matching")
    } else if (email === confirmEmail && password === confirmPassword) {
      try {
        await createUser(email, password);
        navigate('/')
      } catch (error) {
        setError(error.message);
      }
    } else {
      setNotMatching("Password or Email are not matching")
    }
  };

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
    <div className="mx-auto lg:max-w-7xl px-10 py-10 ">
      <div className='flex flex-wrap-reverse sm:flex justify-center lg:justify-between justify-items-center content-center place-items-center'>
        <img
          src={Image}
          alt="signup"
          className="mt-10 lg:mt-0 md:w-1/2 md:h-1/4"
        />

        <div className="lg:w-1/2 p-2 lg:p-6 sm:w-[555px]">
          <h1 className="pt-5 md:pl-3 mb-10 text-3xl sm:text-4xl md:text-5xl format-normal leading-normal sm:ml-24 md:ml-12">
            SIGNUP NOW
          </h1>

          <form onSubmit={handleSubmit} className="flex-col shadow-lg border-2 rounded-lg  p-10 border-t-0 mx-auto md:mr-2 xl:mr-0">
            <div className="flex flex-col place-items-center sm:flex-row">
              <input
                className="border-2 rounded h-14 border-[#E5E5E5] my-4 w-full placeholder:pl-3 pl-3"
                type="text"
                placeholder="First Name"
              />
              <input
                className="border-2 rounded h-14 border-[#E5E5E5] my-4 w-full placeholder:pl-3 sm:ml-3 pl-3"
                type="text"
                placeholder="Last Name"
              />
            </div>

            <input
              onChange={(e) => setEmail(e.target.value)}
              className="border-2 rounded h-14 border-[#E5E5E5] my-4 w-full placeholder:pl-3 pl-3"
              type="email"
              placeholder="Your Email"
            />
            <input
              onChange={(e) => setConfirmEmail(e.target.value)}
              className="border-2 rounded h-14 border-[#E5E5E5] my-4 w-full placeholder:pl-3 pl-3"
              type="text"
              placeholder="Confirm Email"
            />
            <div className="flex flex-col place-items-center sm:flex-row">
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="border-2 rounded h-14 border-[#E5E5E5] my-4 w-full placeholder:pl-3 pl-3"
                type="password"
                placeholder="Password"
              />
              <input
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="border-2 rounded h-14 border-[#E5E5E5] my-4 w-full placeholder:pl-3 sm:ml-3 pl-3"
                type="password"
                placeholder="Confirm Password"
              />
            </div>

            {notMatching && <h2 className="text-red-500 py-4 px-3.5 m-1">{notMatching}</h2>}
            <div className="flex flex-col w-full place-items-center py-1 px-1 lg:flex-row mb-1 place-content-around">
              <h2 className="lg:w-2/5 ">Birth Date:</h2>

              <input
                className="border-2 rounded h-14 border-[#E5E5E5] my-4 w-full placeholder:pl-3 pl-3 pr-3"
                type="date"
                placeholder="Day"
              />
            </div>

            <div className="flex flex-wrap justify-evenly">
              <Link to="/login">
                <button
                  className="bg-[#FFFFFF] hover:bg-[#aaf1f7] border-[#a2f4fb] hover:border-[#96eff7] text-[#2DD3E3] 
                  border-2 font-bold my-5 py-2 px-16 lg:px-10 xl:px-14 rounded"
                  type="button"
                >
                  Login
                </button>
              </Link>

              <button
                className="shadow-xl bg-[#2DD3E3] hover:bg-[#66e0eb] border-[#2DD3E3] hover:border-[#41d6e4] text-[#000000] 
                  border-2 font-bold my-5 py-2 px-14 lg:px-10 xl:px-14 rounded"
                type="submit"
              >
                Signup
              </button>
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
            <FacebookIcon className="cursor-pointer " onClick={handleFacebookSignIn} />
            <GoogleIcon className="cursor-pointer" onClick={handleGoogleSignIn} />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Signup;
