
import React, {  useState } from "react"; 
import "../../App.css";
import { collection, addDoc} from "firebase/firestore"; 
import { ReactComponent as SendIcon } from '../../icons/send.svg';
import {db} from '../../firebase-config'

function Blogs() {
  const [newEmailInput, setNewEmailInput] = useState({});
  const handleOnChange = (event) => {
    const {target: {name: keyName, value}} = event;

    console.log('handleOnChange:', keyName);

    setNewEmailInput((prev) => {
      // Copy the previous object (state) and only change the keyName that I want
      // prev is aka newMovieInput
      return { ...prev, [keyName]: value };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
   
    console.log(newEmailInput);

    await addDoc(collection(db, "subscribed-emails"), {
      ...newEmailInput // { "": muslim@gmail.com } => { "email": "muslim@gmail.com" }
    });
    // Clear the form
    setNewEmailInput({
      email: "",
      
    });
  };
  return (
    <>
      {/* <EditProfile /> */}
      <div className=' mx-4 my-10'>
      <div className='py-10 px-2'>                                                                              
       <h3 className='text-xl sm:text-xl md:text-3xl  pt-5 items-start '>SIGN UP FOR THE HEALING BLOG</h3>
       <p>A weekly, ad-free Blog that helps you stay in the know.</p>
      {/* _____________________subscribtion__________________________________________________________________________________________________- */}
       <div className="mt-4 flex  sm:ml-0  justify-center">
        <form  className='flex' onSubmit={handleSubmit}>
          <input
            className="p-2 border-2 lg:px-3 px-0 border-[#718096] rounded-l-md"
            placeholder="Enter your e-mail"
            type='email'
            name='email'
            
            value={newEmailInput.email}
            onChange={handleOnChange}
          
          />
          <button
            className="p-2 border-y-2 border-r-2 border-[#718096] rounded-r-md bg-cyan-500 active:pr-1 active:pl-1 active:bg-cyan-400"
            type="submit"
            aria-label="Send"
          > <SendIcon />
          </button>
          </form>
        </div>
         {/* _____________________subscribtion___________________________________________________________________________________________________________ -*/}
        <div> 
          <h3 className='text-xl sm:text-xl md:text-3xl format-normal leading-normal pt-5 my-10'>RECOMMENED FOR YOU  </h3>
        </div>
      </div>
      </div>
      
    </>
  );
  
}

export default Blogs;
