import React, {  useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
// import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { ReactComponent as SendIcon } from '../../icons/send.svg';
import { db } from '../../firebase-config';

function SubcribedEmails() {
  const [newEmailInput, setNewEmailInput] = useState({});

  


  // __________this handling subscribtion email input___________________
  const handleOnChange = (event) => {
    const {
      target: { name: keyName, value },
    } = event;
    // console.log('handleOnChange:', keyName);
    setNewEmailInput((prev) => {
      return { ...prev, [keyName]: value };
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(newEmailInput);
    await addDoc(collection(db, 'subscribed-emails'), {
      ...newEmailInput, // { "": muslim@gmail.com } => { "email": "muslim@gmail.com" }  key value shouldnot be empty so in email input we have name=email
    });
    // Clear the form
    setNewEmailInput({
      email: '',
    });
  };

  return (
    <div className="mx-auto  px-10 py-10">
      <div className="mx-auto lg:max-w-7xl ">
        
        {/* _____________________subscribtion__________________________________________________________________________________________________- */}
        <div className="mt-4 flex mx-2 ">
          <form className="flex" onSubmit={handleSubmit}>
            <input
              className="p-2 border-2 lg:px-3 px-0 border-[#718096] rounded-l-md"
              placeholder="Enter your e-mail"
              type="email"
              name="email"
              value={newEmailInput.email}
              onChange={handleOnChange}
            />
            <button
              className="p-2 border-y-2 border-r-2 border-[#718096] rounded-r-md bg-cyan-500 active:pr-1 active:pl-1 active:bg-cyan-400"
              type="submit"
              aria-label="Send"
            >
              {' '}
              <SendIcon />
            </button>
          </form>
        </div>  
      </div>
    </div>
  );
}

export default SubcribedEmails;
