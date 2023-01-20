import React, { useState } from 'react';
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
      ...newEmailInput, // { "": hi@gmail.com } => { "email": "hi@gmail.com" }  key value shouldnot be empty so in email input we have name=email
    });
    // Clear the form
    setNewEmailInput({
      email: '',
    });
  };

  return (
    <div className="mx-auto">
      <form className="flex justify-start" onSubmit={handleSubmit}>
        <input
          className="border-2 border-[#718096] rounded-l-md w-auto placeholder:pl-2"
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

          <SendIcon />
        </button>
      </form>
    </div>
  );
}

export default SubcribedEmails;
