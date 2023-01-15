// import React, { useState } from 'react';
// import { collection, addDoc} from 'firebase/firestore';
// import { db } from '../../firebase-config';
// import contactimage from './contactimage.png';

// const radioObject = [
//   {
//     id: 1,
//     text: 'I have a question about the service.',
//   },
//   {
//     id: 2,
//     text: "I'm a registered client and I need support.",
//   },
//   {
//     id: 3,
//     text: "I'm a counselor interested in joining.",
//   },
//   {
//     id: 4,
//     text: "I'm a registered counselor and I need support.",
//   },
//   {
//     id: 5,
//     text: 'I have a business-related inquiry.',
//   },
//   {
//     id: 6,
//     text: "I'm interested in Healing Online for my organization.",
//   },
//   {
//     id: 7,
//     text: 'I have a billing related question.',
//   },
// ];

// const addressObject = [
//   {
//     id: 1,
//     text: 'Nergiz Plaza',
//   },
//   {
//     id: 2,
//     text: '3rd Floor',
//   },
//   {
//     id: 3,
//     text: 'Bakhtiyari Street 40m',
//   },
//   {
//     id: 4,
//     text: 'Erbil, Iraq',
//   },
//   {
//     id: 5,
//     text: 44001,
//   },
// ];

// export default function Contact() { 
//   const [name,setName]=useState({});
//   const [newEmailInput, setNewEmailInput] = useState({});
//   const [details,setDetails]=useState({});

//   // this  used for selected radio input
//   const [state, setState] = useState('');

//   const handleOnChange = (event) => {
//     const {
//       target: { name: keyName, value },
//     } = event;
//     // console.log('handleOnChange:', keyName);
//     setName((prev) => {
//       return { ...prev, [keyName]: value };
//     });
//     setNewEmailInput((prev) => {
//       return { ...prev, [keyName]: value };
//     });
//     setDetails((prev) => {
//       return { ...prev, [keyName]: value };
//     });

//     setState(states => {
//       const newState = { ...states, [name]: value }
//       // post newState to firebase
//      return newState
//   });
//   };
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     // console.log(newEmailInput);
//     await addDoc(collection(db, 'ContactUs'), {
//       ...name,
//       ...newEmailInput,
//       ...details, // { "":hi@gmail.com } => { "email": "hi@gmail.com" }  key value shouldnot be empty so in email input we have name=email
//       ...state,
//     });
//     // Clear the form
//     setNewEmailInput({ email: '',
//     });
//     setDetails({ details: '',
//   });
//     setName({ name: '',
//   });
//   };

//   return (
//     <div className="mx-auto lg:max-w-7xl px-10 py-10">
//       <h1 className="pt-5 text-3xl md:text-5xl format-normal leading-normal">
//         SEND US YOUR REQUEST!
//       </h1>

//       <p className="mt-2 text-2xl">
//         Do you have a question, concern, idea, feedback, or problem? If you need
//         assistance, please fill out the form below and we&apos;d be happy to
//         help!
//       </p>

//       <div className="flex flex-wrap justify-center lg:flex-nowrap lg:justify-between mt-8 md:mt-16">
//         <div>
//           <form  onSubmit={handleSubmit}>
//             <p className="text-2xl font-semibold mb-4">Type of contact</p>
//             <div className="flex flex-col">
//               {radioObject.map((item) => {
//                 return (
//                   <div className="flex py-3">
//                     <input
//                       key={item.id}
//                       type="radio"
//                       name="state"
//                     value={state.state}
//                     onChange={e=>setState(e.target.value)}
//                       htmlFor="for"
//                       id="for"
//                       />
//                     <p className="ml-3 text-xl">{item.text}</p>
//                   </div>
//                 );
//               })}
//             </div>

//             <label className=" flex flex-col mt-8 lg:mt-20" htmlFor="name">
//               <span className="mb-5 text-2xl font-normal">Full Name:</span>
//               <input
//                 type="text"
                
//                 name="name"
//                 value={name.name}
//                 onChange={handleOnChange}
//                 id="name"
//                 placeholder="Enter your full name here..."
//                 className="border-2 rounded-lg h-16 w-auto border-[#E5E5E5] pl-4
//            placeholder:pl-1 "
//               />
//             </label>

//             <label className=" flex flex-col" htmlFor="email">
//               <span className="mb-5 text-2xl font-normal pt-5">Email:</span>
//               <input
//                  type="email"
//                  name="email"
//                  value={newEmailInput.email}
//                  onChange={handleOnChange}

//                 id="email"
//                 placeholder="Enter your email address here..."
//                 className="border-2 rounded-lg h-16 w-auto border-[#E5E5E5] pl-4
//            placeholder:pl-1"
//               />
//             </label>

//             <label className=" flex flex-col" htmlFor="details">
//               <span className="mb-5 text-2xl font-normal pt-5">Details:</span>
//               <input
//                 type="text"
               
//                 name="details"
//                 value={details.details}
//                 onChange={handleOnChange}
//                 id="details"
//                 placeholder="Enter your details here..."
//                 className="border-2 rounded-lg h-40 w-auto sm:w-[500px] lg:w-[604px] border-[#E5E5E5] pl-4
//            placeholder:pl-1"
//               />
//             </label>

//             <button
//               type="submit"
//               value="Submit"
//               className="bg-[#2DD3E3] my-5 border-2 rounded-md px-10 py-2 border-[#2DD3E3] text-xl font-normal"
//             >
//               SUBMIT
//             </button>
//           </form>
//         </div>

//         <div className="flex flex-col">
//           <img
//             className="mt-3 md:mt-0 h-auto lg:h-96 xl:h-auto xl:w-auto"
//             src={contactimage}
//             alt="contactimage"
//           />

//           <div className="mx-auto mt-9 lg:my-auto lg:align-middle">
//             <div className="flex flex-col bg-[#EAF8F9] border-2 border-[#EAF8F9] rounded-xl h-70 lg:h-auto p-8 w-auto sm:w-96 lg:w-80 xl:w-96 text-2xl sm:ml-2 ">
//               <h1 className="font-normal pb-3">Find Us At:</h1>
//               {addressObject.map((address) => {
//                 return (
//                   <p key={address.id} className="text-gray-500">
//                     {address.text}
//                   </p>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
