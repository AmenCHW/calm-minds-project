import React, { useEffect, useState } from 'react';
import { deleteUser } from 'firebase/auth';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import {
  collection,
  query,
  where,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { db, storage, auth } from '../../firebase-config';
import { UserAuth } from '../../context/AuthContext';
import profileimage from '../EditProfile/profileimage.png';
import UpdateImage from '../EditProfile/edit.png';

function TherapistProfile() {
  const [userDetails, setUserDetails] = useState({});
  const [perc, setPerc] = useState(null);
  const { user, logOut } = UserAuth();

  const [inputValues, setInputValue] = useState({
    fullName: userDetails.fullName,
    birthDate: userDetails.birthDate,
    phonenumber: userDetails.phonenumber,
    bio: userDetails.bio,
  });

  const handleChange = (e) => {
    setInputValue({ ...inputValues, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const userDel = auth.currentUser;
  const userDelete = () => {
    deleteUser(userDel);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const refresh = () => {
      navigate(0);
      window.scrollTo(0, 0);
    };
    const docRef = doc(db, 'users', `${user.uid}`);
    await updateDoc(docRef, {
      username: inputValues.username,
      birthDate: inputValues.birthDate,
      photoURL: inputValues.photoURL,
      bio: inputValues.bio,
      phonenumber: inputValues.phonenumber,
    });
    refresh();
  };

  const handleDelete = async () => {
    await deleteDoc(doc(db, 'users', `${user.uid}`));
    userDelete();
    logOut();
    navigate('/');
  };

  const fetchSingleUserData = async () => {
    await getDocs(
      query(collection(db, 'users'), where('userId', '==', user.uid))
    ).then((querySnapshot) => {
      const usersData = querySnapshot.docs.map((docm) => {
        return docm.data();
      });
      setUserDetails(usersData[0]);
      setInputValue(usersData[0]);
    });
  };

  useEffect(() => {
    if (user && user.uid) fetchSingleUserData();
  }, [user]);

  const [file, setFile] = useState('');

  /* eslint-disable */

  const uploadFile = (fileState, setStateFn, urlKey) => {
    const uploadFiles = () => {
      const name = new Date().getTime() + fileState.name;
      console.log(name);
      const storageRef = ref(storage, fileState.name);
      const uploadTask = uploadBytesResumable(storageRef, fileState);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setPerc(progress);
          switch (snapshot.state) {
            case 'paused':
              break;
            case 'running':
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setInputValue((prev) => ({ ...prev, [urlKey]: downloadURL }));
          });
        }
      );
    };
    fileState && uploadFiles();
    /* eslint-disable */
  };

  useEffect(() => {
    uploadFile(file, setFile, 'photoURL');
  }, [file]);

  return (
    <div className="mx-auto lg:max-w-7xl px-10 py-10">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap justify-center md:justify-evenly">
          <div className="flex flex-col items-center">
            <img
              className="max-w-xs max-h-xs rounded-full aspect-square object-cover "
              src={userDetails.photoURL ? userDetails.photoURL : profileimage}
              alt="profile-pic"
            />
            <span className="flex flex-col items-center rounded-full  w-20 hover:cursor-pointer hover:shadow-lg relative z-0 border-2 border-black">
              {' '}
              <img src={UpdateImage} alt="Update" />
              <input
                type="file"
                placeholder="edit"
                id="profileImage"
                name="photoURL"
                onChange={(e) => setFile(e.target.files[0])}
                className=" rounded-lg  w-full h-10 items-center hover:cursor-pointer absolute inset-0 z-10 opacity-0"
              />
            </span>
          </div>

          <div className="">
            <h1 className="pt-5 text-3xl md:text-5xl format-normal leading-normal text-center md:text-left">
              THERAPIST PROFILE
            </h1>

            <div className="px-2 sm:px-0">
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
                  name="fullName"
                  onChange={(e) => handleChange(e)}
                  defaultValue={userDetails.username}
                  className="border-2 rounded-lg h-16 w-1/2 lg:w-[470px] border-gray-100 pl-4 shadow-md"
                />
              </label>

              <label
                className="flex flex-col items-center sm:flex-row sm:flex-wrap justify-center sm:justify-between mt-10"
                htmlFor="bio"
              >
                <span className="mb-5 text-2xl font-normal text-start mr-3 md:mr-10 mt-3">
                  Bio:
                </span>
                <input
                  type="text"
                  id="bio"
                  name="bio"
                  onChange={(e) => handleChange(e)}
                  defaultValue={userDetails.bio}
                  className="border-2 rounded-lg h-72 w-1/2 lg:w-[470px] border-gray-100 pl-4 shadow-md"
                />
              </label>

              <label
                className="flex flex-col items-center justify-center sm:flex-row sm:flex-wrap sm:justify-between mt-6"
                htmlFor="date"
              >
                <span className="mb-5 text-2xl font-normal text-start mr-3 md:mr-10 mt-3">
                  Birth Date:
                </span>
                <input
                  type="date"
                  id="date"
                  name="birthDate"
                  onChange={(e) => handleChange(e)}
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
                  name="email"
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
                  name="phonenumber"
                  onChange={(e) => handleChange(e)}
                  defaultValue={userDetails.phonenumber}
                  className="border-2 rounded-lg h-16 w-1/2 lg:w-[470px] border-gray-100 pl-4 shadow-md"
                />
              </label>

              <div className="flex flex-wrap justify-center lg:justify-between mt-12">
                <button
                  disabled={perc !== null && perc < 100}
                  type="submit"
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
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TherapistProfile;
