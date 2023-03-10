import React, { useEffect, useState } from 'react';
import { deleteUser, updatePassword } from 'firebase/auth';
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
import profileimage from './profileimage.png';
import UpdateImage from './edit.png';

function EditProfile() {
  const [userDetails, setUserDetails] = useState({});
  const [perc, setPerc] = useState(null);
  const { user, logOut } = UserAuth();

  const [inputValues, setInputValue] = useState({
    gender: userDetails.gender,
    fullName: userDetails.fullName,
    birthDate: userDetails.birthDate,
    educationLevel: userDetails.educationLevel,
    hobbies: userDetails.hobbies,
    familySize: userDetails.familySize,
    phonenumber: userDetails.phonenumber,
  });

  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChange = (e) => {
    setInputValue({ ...inputValues, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const userDel = auth.currentUser;
  const userDelete = () => {
    deleteUser(userDel);
  };

  const [newPassword, setNewPassword] = useState('');
  const [notMatching, setNotMatching] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setNotMatching('Password and Confrim Password are not matching');
    } else {
      const refresh = () => {
        navigate(0);
        window.scrollTo(0, 0);
      };

      const docRef = doc(db, 'users', `${user.uid}`);
      await updatePassword(auth.currentUser, newPassword);
      await updateDoc(docRef, {
        gender: inputValues.gender,
        fullName: inputValues.fullName,
        birthDate: inputValues.birthDate,
        photoURL: inputValues.photoURL,
        IDURL: inputValues.IDURL,
        educationLevel: inputValues.educationLevel,
        hobbies: inputValues.hobbies,
        familySize: inputValues.familySize,
        phonenumber: inputValues.phonenumber,
      });
      refresh();
    }
  };

  const handleDelete = async () => {
    await deleteDoc(doc(db, 'users', `${user.uid}`));
    userDelete();
    logOut();
    navigate('/signup');
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
  const [IDImage, setIDImage] = useState('');

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
    uploadFile(IDImage, setIDImage, 'IDURL');
  }, [file, IDImage]);

  return (
    <div className="mx-auto lg:max-w-7xl px-10 py-10">
      <h1 className="text-center text-[#FF0000] text-xl md:text-2xl mb-9 mx-auto">
        Please fill all the fields with correct and valid details to complete
        your profile.
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap md:justify-evenly">
          <div className="flex flex-col items-center mx-auto">
            <img
              className="max-w-xs max-h-xs rounded-full aspect-square object-cover "
              src={userDetails.photoURL ? userDetails.photoURL : profileimage}
              alt="profile-pic"
            />
            <span className="flex flex-col items-center rounded-full relative z-0 w-20 hover:cursor-pointer hover:shadow-lg border-2 border-black">
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

          <div className="mx-auto">
            <h1 className="pt-5 text-3xl md:text-5xl format-normal leading-normal text-left">
              PROFILE INFO
            </h1>

            <div className="">
              <label
                className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-between mt-10"
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
                  defaultValue={userDetails.fullName}
                  className="border-2 rounded-lg h-16 w-full sm:w-1/2 lg:w-[470px] border-gray-100 pl-4 shadow-md"
                />
              </label>

              <div className=" flex flex-col sm:flex-row sm:flex-wrap mt-6 sm:justify-between">
                <span className="mb-5 text-2xl font-normal text-start mr-3 md:mr-10 mt-3">
                  Education Level:
                </span>
                <select
                  onChange={(e) => handleChange(e)}
                  defaultValue={userDetails.educationLevel}
                  key={userDetails.educationLevel}
                  name="educationLevel"
                  className="border-2 rounded-lg h-16 w-full sm:w-1/2 lg:w-[470px] border-gray-100 pl-4 shadow-md text-xl"
                >
                  <option value="select....">select...</option>
                  <option value="Highschool">Highschool</option>
                  <option value="Diploma">Diploma</option>
                  <option value="bachelor">Bachelors Degree</option>
                  <option value="master">Masters Degree</option>
                  <option value="phd">phd</option>
                </select>
              </div>

              <label
                className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-between mt-6"
                htmlFor="hobbies"
              >
                <span className="mb-5 text-2xl font-normal text-start mr-3 md:mr-10 mt-3">
                  Hobbies:
                </span>
                <input
                  type="text"
                  id="hobbies"
                  name="hobbies"
                  onChange={(e) => handleChange(e)}
                  defaultValue={userDetails.hobbies}
                  className="border-2 rounded-lg h-16 w-full sm:w-1/2 lg:w-[470px] border-gray-100 pl-4 shadow-md"
                />
              </label>

              <label
                className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-between mt-6"
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
                    name="familySize"
                    onChange={(e) => handleChange(e)}
                    defaultValue={userDetails.familySize}
                    className="border-2 rounded-lg h-16 w-[68px] border-gray-100 pl-4 shadow-md"
                  />
                  <span className="text-2xl font-normal sm:text-start ml-3 sm:ml-10 mt-3">
                    Member(s)
                  </span>
                </div>
              </label>

              <div className=" flex flex-col sm:flex-row sm:flex-wrap mt-6 sm:justify-between">
                <span className=" mb-5 text-2xl font-normal text-start mr-3 md:mr-10 mt-3">
                  Gender
                </span>
                <select
                  onChange={(e) => handleChange(e)}
                  name="gender"
                  defaultValue={userDetails.gender}
                  key={userDetails.gender}
                  className="border-2 rounded-lg h-16 w-full sm:w-1/2 lg:w-[470px] border-gray-100 pl-4 shadow-md text-xl"
                >
                  <option value="select....">select...</option>
                  <option value="male">male</option>
                  <option value="female">female</option>
                </select>
              </div>

              <label
                className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-between mt-6"
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
                  className="border-2 rounded-lg h-16 w-full sm:w-1/2 lg:w-[470px] border-gray-100 pl-4 shadow-md"
                />
              </label>

              <label
                className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-between mt-6"
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
                  className="border-2 rounded-lg h-16 w-full sm:w-1/2 lg:w-[470px] border-gray-100 pl-4 shadow-md"
                />
              </label>

              <label
                className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-between mt-6"
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
                  className="border-2 rounded-lg h-16 w-full sm:w-1/2 lg:w-[470px] border-gray-100 pl-4 shadow-md"
                />
              </label>

              <label
                className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-between mt-6"
                htmlFor="image"
              >
                <span className="mb-5 text-2xl font-normal text-start mr-3 md:mr-10 mt-3">
                  Upload ID
                </span>

                <input
                  type="file"
                  id="image"
                  name="IDURL"
                  onChange={(e) => setIDImage(e.target.files[0])}
                  className="border-2 rounded-lg h-16 w-full sm:w-1/2 lg:w-[470px] py-auto border-gray-100 pl-4 shadow-md"
                />
              </label>
              <div className="flex flex-col items-center sm:flex-row sm:flex-wrap justify-center sm:justify-between mt-6">
                <span className="mb-5 text-2xl font-normal text-start mr-3 md:mr-10 mt-3">
                  ID
                </span>

                <img
                  src={userDetails.IDURL}
                  alt="Id"
                  className="border-2 rounded-lg aspect-rectangle w-24 items-center py-auto border-gray-100  shadow-md object-cover sm:mr-52"
                />
              </div>

              <h1 className="pt-16 text-3xl md:text-5xl format-normal leading-normal text-left">
                Security
              </h1>

              <label
                className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-between mt-10"
                htmlFor="password"
              >
                <span className="mb-5 text-2xl font-normal text-start mr-3 md:mr-10 mt-3">
                  Password
                </span>
                <input
                  type="password"
                  id="password"
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="border-2 rounded-lg h-16 w-full sm:w-1/2 lg:w-[470px] border-gray-100 pl-4 shadow-md"
                />
              </label>

              <label
                className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-between mt-6"
                htmlFor="password"
              >
                <span className="mb-5 text-2xl font-normal text-start mr-3 md:mr-10 mt-3">
                  Confirm Password
                </span>
                <input
                  type="password"
                  id="confirmPassword"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="border-2 rounded-lg h-16 w-full sm:w-1/2 lg:w-[470px] border-gray-100 pl-4 shadow-md"
                />
              </label>
              <h2 className="text-red-500 py-4 px-3.5 m-1">{notMatching}</h2>

              <div className="flex flex-col sm:flex-row pt-10 justify-start lg:justify-between mt-12">
                <button
                  disabled={perc !== null && perc < 100}
                  type="submit"
                  className="bg-[#2DD3E3] py-3 text-xl md:text-2xl border-2 rounded-lg border-[#2DD3E3] px-3 lg:px-0 lg:w-[220px] my-2 lg:my-0 mx-2"
                >
                  SAVE CHANGES
                </button>

                <button
                  type="button"
                  className="bg-[#2DD3E3] py-3 text-xl md:text-2xl border-2 rounded-lg border-[#2DD3E3] px-3 lg:px-0 lg:w-[220px] my-2 lg:my-0 mx-2"
                  onClick={handleDelete}
                >
                  DELETE ACCOUNT
                </button>

                <button
                  type="button"
                  className="bg-[#2DD3E3] py-3 text-xl md:text-2xl border-2 rounded-lg border-[#2DD3E3] px-3 lg:px-0 lg:w-[220px] my-2 lg:my-0 mx-2"
                >
                  CANCEL
                </button>
              </div>
            </div>

            <div>
              <h1 className="pt-16 text-3xl md:text-5xl format-normal leading-normal text-left">
                Payment Methods & Tickets
              </h1>

              <div className="flex flex-col sm:flex-row pt-10 justify-start">
                <div className="flex flex-col">
                  <p className="pb-3 text-xl text-start">3 Cards Added</p>
                  <button
                    type="button"
                    className="bg-[#2DD3E3] py-3 text-xl md:text-2xl border-2 rounded-lg border-[#2DD3E3] px-3 lg:px-0 lg:w-[220px]"
                  >
                    SHOW CARDS
                  </button>
                </div>

                <div className="flex flex-col sm:ml-5 pt-5 sm:pt-0">
                  <p className="pb-3 text-xl text-start">
                    10 Tickets Remaining
                  </p>
                  <button
                    type="button"
                    className="bg-[#2DD3E3] py-3 text-xl md:text-2xl border-2 rounded-lg border-[#2DD3E3] px-3 lg:px-0 lg:w-[220px]"
                  >
                    BUY TICKETS
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditProfile;
