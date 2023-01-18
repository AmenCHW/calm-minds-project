import React, {useEffect, useState} from 'react';
import {deleteUser} from 'firebase/auth';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, query, where, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import {db, storage, auth } from '../../firebase-config';
import { UserAuth } from '../../context/AuthContext';
import profileimage from './profileimage.png';

 
function EditProfile() {

  const [userDetails, setUserDetails] = useState({})
  const navigate = useNavigate();
  const { user, logOut } = UserAuth();

   const userDel = auth.currentUser
    const userDelete = () => {deleteUser(userDel).then(() => {
        /* eslint-disable */
        console.log("user deleted")
      }).catch((error) => {
        /* eslint-disable */
        console.log(error)
      })};

  const handleDelete = async () => {
          try {
            await deleteDoc(doc(db, "users", `${user.uid}`));
            userDelete()
            logOut()
            navigate('/signup')
        } catch (e) {
            console.error("Error adding document: ", e);
        }

}

  const fetchSingleUserData = async () => {
    // eslint-disable-next-line
    // console.log('user.uid:', user.uid);
    await getDocs(query(collection(db, "users"), where("userId", "==", user.uid)))
      .then((querySnapshot) => {
        const usersData = querySnapshot.docs
          .map((docm) => {
            // eslint-disable-next-line 
            // console.log(doc.id, " => ", doc.data().isTherapist);
            return docm.data();
          });
          setUserDetails(usersData[0])
          console.log(usersData[0])
      })
  }

  useEffect(() => {
    if (user && user.uid)
      fetchSingleUserData();
  }, [user])

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
                  Full Name: 
                </span>
                <input
                  type="text"
                  id="name"
                 defaultValue={userDetails.fullName}
                  className="border-2 rounded-lg h-16 w-1/2 lg:w-[470px] border-gray-100 pl-4 shadow-md"
                />
              </label>

              <div className=" flex flex-col items-center sm:flex-row sm:flex-wrap justify-center mt-6 sm:justify-between">
                <span className="mb-5 text-2xl font-normal text-start mr-3 md:mr-10 mt-3">
                  Education Level: <span className=' font-bold text-blue-600'>{userDetails.educationLevel}</span>
                </span>
                <select defaultValue={userDetails.educationLevel} className="border-2 rounded-lg h-16 w-1/2 lg:w-[470px] border-gray-100 pl-4 shadow-md text-xl">
                  <option value="select....">select...</option>
                  <option value="Highschool">Highschool</option>
                  <option value="Diploma">Diploma</option>
                  <option value="bachelor">Bachelor&apos;s Degree</option>
                  <option value="master">Master&apos;s Degree</option>
                  <option value="phd">phD</option>
                </select>
              </div>

              <label
                className="flex flex-col items-center sm:flex-row sm:flex-wrap justify-center sm:justify-between mt-6"
                htmlFor="hobbies"
              >
                <span className="mb-5 text-2xl font-normal text-start mr-3 md:mr-10 mt-3">
                  Hobbies: <span className=' font-bold text-blue-600'>{userDetails.hobbies}</span>
                </span>
                <input
                  type="text"
                  id="hobbies"
                  defaultValue={userDetails.hobbies}
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
                    min={1}
                    id="family-size"
                    defaultValue={userDetails.familySize}
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
                <select defaultValue={userDetails.gender} className="border-2 rounded-lg h-16 w-1/2 lg:w-[470px] border-gray-100 pl-4 shadow-md text-xl">
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
                  Birth Date: <span className=' font-bold text-blue-600'>{userDetails.birthDate}</span>
                </span>
                <input
                  type="date"
                  id="date"
                  defaultValue={userDetails.birthDate}
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
                  defaultValue={userDetails.email}
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
                  defaultValue={userDetails.phonenumber}
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
                  onClick={handleDelete}
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
