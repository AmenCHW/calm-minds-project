import React, { useEffect, useState } from 'react';
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
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [fullName, setFullName] = useState('')
  const [birthDate, setBirthDate] = useState('')


  const handleChange = () => setFullName(`${firstName} ${lastName}`)
  useEffect(() => {
    handleChange();
  }, [firstName, lastName]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (email === confirmEmail && password !== confirmPassword) {
      setNotMatching("Password is not matching")
    } else if (email !== confirmEmail && password === confirmPassword) {
      setNotMatching("Email is not matching")
    } else if (email !== confirmEmail && password !== confirmPassword) {
      setNotMatching("Password and Email are not matching")
    } else if (email === confirmEmail && password === confirmPassword) {
      try {
        await createUser(email, password, fullName, birthDate);
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
    <div className="flex flex-wrap-reverse place-items-center p-6 lg:flex-row lg:pt-24 mx-auto lg:max-w-7xl px-10 py-10">
      <img
        src={Image}
        alt="signup"
        className=" w-full lg:w-1/2 p-2 lg:p-6 pt-12 lg:pt-0"
      />
      <div className="w-full lg:w-1/2 p-2 lg:p-6">
        <h2 className="font-normal text-5xl text-center lg:text-left mb-8">
          SIGNUP NOW
        </h2>
        <form onSubmit={handleSubmit} className="lg:w-full px-8 py-10 flex flex-col bg-white rounded-md drop-shadow-xl">
          <div className="flex flex-col place-items-center lg:flex-row m-1">
            <input
              onChange={(e) => setFirstName(e.target.value)}
              className="border border-[#D1DBE3] py-4 px-3.5  w-full mb-2 lg:mb-0 lg:mr-1"
              type="text"
              placeholder="First Name"
            />
            <input
              onChange={(e) => setLastName(e.target.value)}
              className="border border-[#D1DBE3] py-4 px-3.5  w-full lg:ml-1"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="border border-[#D1DBE3] py-4 px-3.5 m-1"
            type="email"
            placeholder="Your Email"
          />
          <input
            onChange={(e) => setConfirmEmail(e.target.value)}
            className="border border-[#D1DBE3] py-4 px-3.5 m-1"
            type="text"
            placeholder="Confirm Email"
          />
          <div className="flex flex-col place-items-center lg:flex-row m-1">
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="border border-[#D1DBE3] py-4 px-3.5  w-full mb-2 lg:mb-0 lg:mr-1"
              type="password"
              placeholder="Password"
            />
            <input
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="border border-[#D1DBE3] py-4 px-3.5  w-full lg:ml-1"
              type="password"
              placeholder="Confirm Password"
            />
          </div>
          <h2 className="text-red-500 py-4 px-3.5 m-1">{notMatching}</h2>
          <div className="flex flex-col w-full place-items-center py-4 px-1 lg:flex-row mb-1 place-content-around">
            <h2 className="lg:w-2/5">Birth Date:</h2>
            <input
              onChange={(e) => setBirthDate(e.target.value)}
              className="border border-[#D1DBE3] py-4 px-3.5 w-full lg:w-full "
              type="date"
              placeholder="Day"
            />

          </div>
          <div className="flex mt-2 lg:mt-8 lg:w-full place-content-center gap-8">
            <Link to="/login">
              <button
                className=" w-28 h-12 md:w-48 md:h-16 border border-[#2DD3E3] font-medium text-2xl text-[#2DD3E3] rounded-md hover:bg-cyan-100 focus:bg-[#2DD3E3] focus:text-black focus:shadow-xl"
                type="button"
              >
                Log In
              </button>
            </Link>
            <button
              className="w-28 h-12 md:w-48 md:h-16 border border-[#2DD3E3] font-medium text-2xl rounded-md  hover:bg-[#aaf1f7] bg-[#2DD3E3] text-black focus:shadow-xl"
              type="submit"
            >
              Sign Up
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
  );
}

export default Signup;