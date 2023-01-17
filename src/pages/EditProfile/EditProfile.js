import React, {useEffect, useState} from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from '../../firebase-config';
import profileimage from './profileimage.png';

function EditProfile() {

  const [file, setFile] = useState('')
  useEffect(()=>{
    const uploadFile = ()=> {

      const name = new Date().getTime() + file.name
      console.log(name);
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file.name);

      uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log( `Upload is ${progress} % done`);
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
        default:
          break;
    }
  }, 
  (error) => {
    console.log(error)
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL);
    });
  }
);


    };
    // eslint-disable-next-line
    file && uploadFile();
  }, [file])

  return (
    <div className="mx-auto lg:max-w-7xl px-10 py-10">
      <h1 className="text-center text-[#FF0000] text-2xl mb-9">
        Please fill all the fields with correct and valid details to complete
        your profile.
      </h1>

      <div className="flex flex-wrap justify-center md:justify-evenly">
        <div>
          <img src={profileimage} alt="profile-pic" />
        </div>

        <div className="">
          <h1 className="pt-5 text-3xl md:text-5xl format-normal leading-normal text-center md:text-left">
            PROFILE INFO
          </h1>

          <div className="px-2 sm:px-0">
            <form>
              <label
                className="flex flex-col items-center sm:flex-row sm:flex-wrap justify-center sm:justify-between mt-10"
                htmlFor="name"
              >
                <span className="mb-5 text-2xl font-normal text-start mr-3 md:mr-10 mt-3">
                  Full Name
                </span>
                <input
                  type="text"
                  id="name"
                  className="border-2 rounded-lg h-16 w-1/2 lg:w-[470px] border-gray-100 pl-4 shadow-md"
                />
              </label>

              <div className=" flex flex-col items-center sm:flex-row sm:flex-wrap justify-center mt-6 sm:justify-between">
                <span className="mb-5 text-2xl font-normal text-start mr-3 md:mr-10 mt-3">
                  Education Level
                </span>
                <select className="border-2 rounded-lg h-16 w-1/2 lg:w-[470px] border-gray-100 pl-4 shadow-md text-xl">
                  <option value="select....">select...</option>
                  <option value="due_date">option 1</option>
                  <option value="asc">option 2</option>
                  <option value="desc">option 3</option>
                </select>
              </div>

              <label
                className="flex flex-col items-center sm:flex-row sm:flex-wrap justify-center sm:justify-between mt-6"
                htmlFor="hobbies"
              >
                <span className="mb-5 text-2xl font-normal text-start mr-3 md:mr-10 mt-3">
                  Hobbies
                </span>
                <input
                  type="text"
                  id="hobbies"
                  className="border-2 rounded-lg h-16 w-1/2 lg:w-[470px] border-gray-100 pl-4 shadow-md"
                />
              </label>

              <label
                className="flex flex-col items-center sm:flex-row sm:flex-wrap justify-center sm:justify-between mt-6"
                htmlFor="family-size"
              >
                <span className="mb-5 text-2xl font-normal text-start mr-3 md:mr-10 mt-3">
                  Family Size
                </span>
                <div className="flex sm:flex-wrap sm:flex-start w-1/2 lg:w-[470px]">
                  <input
                    type="number"
                    id="family-size"
                    className="border-2 rounded-lg h-16 w-[68px] border-gray-100 pl-4 shadow-md"
                  />
                  <span className="text-2xl font-normal text-center sm:text-start ml-3 sm:ml-10 mt-3">
                    Member(s)
                  </span>
                </div>
              </label>

              <div className=" flex flex-col items-center sm:flex-row sm:flex-wrap justify-center mt-6 sm:justify-between">
                <span className=" mb-5 text-2xl font-normal text-start mr-3 md:mr-10 mt-3">
                  Gender
                </span>
                <select className="border-2 rounded-lg h-16 w-1/2 lg:w-[470px] border-gray-100 pl-4 shadow-md text-xl">
                  <option value="select....">select...</option>
                  <option value="male">male</option>
                  <option value="female">female</option>
                </select>
              </div>

              <label
                className="flex flex-col items-center justify-center sm:flex-row sm:flex-wrap sm:justify-between mt-6"
                htmlFor="date"
              >
                <span className="mb-5 text-2xl font-normal text-start mr-3 md:mr-10 mt-3">
                  Birth Date
                </span>
                <input
                  type="date"
                  id="date"
                  className="border-2 rounded-lg h-16 w-1/2 lg:w-[470px] border-gray-100 pl-4 shadow-md"
                />
              </label>

              <label
                className="flex flex-col items-center justify-center sm:flex-row sm:flex-wrap sm:justify-between mt-6"
                htmlFor="email"
              >
                <span className="mb-5 text-2xl font-normal text-start mr-3 md:mr-10 mt-3">
                  Email
                </span>
                <input
                  type="email"
                  id="email"
                  className="border-2 rounded-lg h-16 w-1/2 lg:w-[470px] border-gray-100 pl-4 shadow-md"
                />
              </label>

              <label
                className="flex flex-col items-center sm:flex-row sm:flex-wrap justify-center sm:justify-between mt-6"
                htmlFor="phone"
              >
                <span className="mb-5 text-2xl font-normal text-start mr-3 md:mr-10 mt-3">
                  Phone Number
                </span>
                <input
                  type="tel"
                  id="phone"
                  className="border-2 rounded-lg h-16 w-1/2 lg:w-[470px] border-gray-100 pl-4 shadow-md"
                />
              </label>

              <label
                className="flex flex-col items-center sm:flex-row sm:flex-wrap justify-center sm:justify-between mt-6"
                htmlFor="image"
              >
                <span className="mb-5 text-2xl font-normal text-start mr-3 md:mr-10 mt-3">
                  Upload ID
                </span>
                <input
                  type="file"
                  id="image"
                  onChange={(e)=> setFile(e.target.files[0])}
                  className="border-2 rounded-lg h-16 w-1/2 lg:w-[470px] items-center py-auto border-gray-100 pl-4 shadow-md"
                />
              </label>

              <h1 className="pt-16 text-3xl md:text-5xl format-normal leading-normal text-center md:text-left">
                Security
              </h1>

              <label
                className="flex flex-col items-center sm:flex-row sm:flex-wrap justify-center sm:justify-between mt-10"
                htmlFor="password"
              >
                <span className="mb-5 text-2xl font-normal text-start mr-3 md:mr-10 mt-3">
                  Password
                </span>
                <input
                  type="password"
                  id="password"
                  className="border-2 rounded-lg h-16 w-1/2 lg:w-[470px] border-gray-100 pl-4 shadow-md"
                />
              </label>

              <label
                className="flex flex-col items-center sm:flex-row sm:flex-wrap justify-center sm:justify-between mt-6"
                htmlFor="password"
              >
                <span className="mb-5 text-2xl font-normal text-start mr-3 md:mr-10 mt-3">
                  Confirm Password
                </span>
                <input
                  type="password"
                  id="password"
                  className="border-2 rounded-lg h-16 w-1/2 lg:w-[470px] border-gray-100 pl-4 shadow-md"
                />
              </label>

              <div className="flex flex-wrap justify-center lg:justify-between mt-12">
                <button
                  type="button"
                  className="bg-[#2DD3E3] py-3 text-2xl border-2 rounded-lg border-[#2DD3E3] px-3 lg:px-0 lg:w-[220px] my-2 lg:my-0 mx-2"
                >
                  SAVE CHANGES
                </button>

                <button
                  type="button"
                  className="bg-[#2DD3E3] py-3 text-2xl border-2 rounded-lg border-[#2DD3E3] px-3 lg:px-0 lg:w-[220px] my-2 lg:my-0 mx-2"
                >
                  DELETE ACCOUNT
                </button>

                <button
                  type="button"
                  className="bg-[#2DD3E3] py-3 text-2xl border-2 rounded-lg border-[#2DD3E3] px-3 lg:px-0 lg:w-[220px] my-2 lg:my-0 mx-2"
                >
                  CANCEL
                </button>
              </div>
            </form>
          </div>

          <div>
            <h1 className="pt-16 text-3xl md:text-5xl format-normal leading-normal text-center md:text-left">
              Payment Methods & Tickets
            </h1>

            <div className="flex flex-col items-center sm:flex-row sm:flex-wrap pt-10 justify-center md:justify-start">
              <div className="flex flex-col">
                <p className="pb-3 text-xl text-center sm:text-start">
                  3 Cards Added
                </p>
                <button
                  type="button"
                  className="bg-[#2DD3E3] py-3 text-2xl border-2 rounded-lg border-[#2DD3E3] px-3 lg:px-0 lg:w-[220px]"
                >
                  SHOW CARDS
                </button>
              </div>

              <div className="flex flex-col sm:ml-5 pt-5 sm:pt-0">
                <p className="pb-3 text-xl text-center sm:text-start">
                  10 Tickets Remaining
                </p>
                <button
                  type="button"
                  className="bg-[#2DD3E3] py-3 text-2xl border-2 rounded-lg border-[#2DD3E3] px-3 lg:px-0 lg:w-[220px]"
                >
                  BUY TICKETS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
