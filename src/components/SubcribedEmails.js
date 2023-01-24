import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { ReactComponent as SendIcon } from '../icons/send.svg';
import { db } from '../firebase-config';

function SubcribedEmails() {
  const [newEmailInput, setNewEmailInput] = useState({});

  const navigate = useNavigate();

  // __________this handling subscription email input___________________
  const handleOnChange = (event) => {
    const {
      target: { name: keyName, value },
    } = event;
    setNewEmailInput((prev) => {
      return { ...prev, [keyName]: value };
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    await addDoc(collection(db, 'subscribed-emails'), {
      ...newEmailInput,
    });
    // Clear the form
    setNewEmailInput({
      email: '',
    });

    navigate('/subscribe-thanks')
  };

  return (
    <div className="mx-auto flex justify-start lg:max-w-7xl">
      <form className="flex" onSubmit={handleSubmit}>
        <input
          className="border-2 border-[#718096] rounded-l-md w-auto placeholder:pl-2 pl-2"
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
