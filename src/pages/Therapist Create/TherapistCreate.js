import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TherapistAuth } from '../../context/AuthContext';



function TherapistCreate() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [, setError] = useState('');
  const { createTherapist } = TherapistAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createTherapist(email, password);
      navigate('/')
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className=" flex-col mx-auto lg:max-w-7xl px-10 py-10">
      <form onSubmit={handleSubmit}>
        <h2 className="mb-8 font-normal text-3xl text-center sm:text-left sm:text-5xl">
          CREATE AN ACCOUNT
        </h2>
        <div>
          <div className="mb-4">
            <h2 className=" font-normal text-2xl text-gray-500 ml-1 mb-1">
              Username
            </h2>
            <input
              type="text"
              className="border rounded-md p-2 w-full h-12 sm:w-96"
            />
          </div>
          <div className="mb-4">
            <h2 className=" font-normal text-2xl text-gray-500 ml-1 mb-1">
              Email
            </h2>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded-md p-2 w-full h-12 sm:w-96"
            />
          </div>
          <div className="mb-4">
            <h2 className=" font-normal text-2xl text-gray-500 ml-1 mb-1">
              City
            </h2>
            <input
              type="text"
              className="border rounded-md p-2 w-full h-12 sm:w-96"
            />
          </div>
          <div className="mb-4">
            <h2 className=" font-normal text-2xl text-gray-500 ml-1 mb-1">
              License Number
            </h2>
            <input
              type="text"
              className="border rounded-md p-2 w-full h-12 sm:w-96"
            />
          </div>
          <div className="mb-4">
            <h2 className=" font-normal text-2xl text-gray-500 ml-1 mb-1">
              Create Password
            </h2>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border rounded-md p-2 w-full h-12 sm:w-96"
            />
          </div>
          <div className="mb-4">
            <h2 className=" font-normal text-2xl text-gray-500 ml-1 mb-1">
              Confirm Password
            </h2>
            <input
              type="text"
              className="border rounded-md p-2 w-full h-12 sm:w-96"
            />
          </div>
        </div>
        <div>
          <button
            className=" mt-12 w-48 h-16 bg-[#2dd3e3] rounded-md hover:bg-[#4dd9e9] font-normal text-2xl"
            type="submit"
          >
            CREATE
          </button>
        </div>
      </form>
    </div>
  );
}

export default TherapistCreate;
