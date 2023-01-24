import React, { useState } from 'react';
import { collection, addDoc} from 'firebase/firestore';
import { db } from '../../firebase-config';
import contactimage from './contactimage.png';



const addressObject = [
  {
    id: 1,
    text: 'Nergiz Plaza',
  },
  {
    id: 2,
    text: '3rd Floor',
  },
  {
    id: 3,
    text: 'Bakhtiyari Street 40m',
  },
  {
    id: 4,
    text: 'Erbil, Iraq',
  },
  {
    id: 5,
    text: 44001,
  },
];

export default function  Contact({t}) { 
  const [name,setName]=useState({});
  const [newEmailInput, setNewEmailInput] = useState({});
  const [details,setDetails]=useState({});
 
 
  const[questions , setQuestion] = useState("")
  const[first,setFirst] = useState(true)
  const[second,setSecond] = useState(true)
  const[third,setThird] = useState(true)
  const[fourth,setFourth] = useState(true)
  const[fifth,setFifth] = useState(true)
  const[sixth,setSixth] = useState(true)
  const[seventh,setSeventh] = useState(true)
  // this  used for selected radio input
  



  const handleOnChange1 = (data) => {

    if (data==='first'){
         if (first===true) {
          setQuestion("I have a question about the service.")
         }
        setFirst(!first)
      };
    
    
      if (data==='second'){
           if (second===true) {
            setQuestion("I am a registered client and I need support.")
           }
          setSecond(!second)
        };
    
    if (data==='third'){
             if (third===true) {
              setQuestion("I am a counselor interested in joining.")
             }
            setThird(!third)
          };
    
    if (data==='fourth'){
               if (fourth===true) {
                setQuestion("I am a registered counselor and I need support.")
               }
              setFourth(!fourth)
            };
    
    if (data==='fifth'){
                 if (fifth===true) {
                  setQuestion("I have a business-related inquiry.")
                 }
                setFifth(!fifth)
              };
    if (data==='sixth'){
                   if (sixth===true) {
                    setQuestion("I am interested in Healing Online for my organization.")
                   }
                  setSixth(!sixth)
                };
    
    if (data==='seventh'){
                     if (seventh===true) {
                      setQuestion("I have a billing related question.")
                     }
                    setSeventh(!seventh)
                  };
    
    };
    
    

  const handleOnChange = (event) => {
    const {
      target: { name: keyName, value },
    } = event;
    // console.log('handleOnChange:', keyName);
    setName((prev) => {
      return { ...prev, [keyName]: value };
    });
    setNewEmailInput((prev) => {
      return { ...prev, [keyName]: value };
    });
    setDetails((prev) => {
      return { ...prev, [keyName]: value };
    });

 
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(newEmailInput);
    await addDoc(collection(db, 'contact'), {
      ...newEmailInput,questions ,
    })
    // .then(() => {
    //   alert('Message has been submitted');})
    // Clear the form
    setNewEmailInput({ email: '',
    });
    setDetails({ details: '',
  });
    setName({ name: '',
  });
  };

  return (
    <div className="mx-auto lg:max-w-7xl px-10 py-10">
      <h1 className="pt-5 text-3xl md:text-5xl format-normal leading-normal">
        {t('SEND US YOUR REQUEST!')}
      </h1>

      <p className="mt-2 text-2xl">
        Do you have a question, concern, idea, feedback, or problem? If you need
        assistance, please fill out the form below and we&apos;d be happy to
        help!
      </p>

      <div className="flex flex-wrap justify-center lg:flex-nowrap lg:justify-between mt-8 md:mt-16">
        <div>
         
            <p className="text-2xl font-semibold mb-4">Type of contact</p>
            <div className="flex flex-col">
              
                  <div className=" py-3 px-2">
                    
        <label htmlFor="ques1">
        <input className='mr-2' type="radio" id="ques1" name="questions" onChange={()=> handleOnChange1("first")} value={first} />
          I have a question about the service.
        </label><br/>
        <label htmlFor="ques2">
        <input className='mr-2'  type="radio" id="ques2" name="questions" onChange={()=> handleOnChange1("second")} value={second} />
          I am a registered client and I need support.
        </label><br/>
        <label htmlFor="ques3">
        <input className='mr-2'  type="radio" id="ques3" name="questions" onChange={()=> handleOnChange1("third")} value={third}  />
        I am a counselor interested in joining.</label><br/>
        <label htmlFor="ques4">
          <input className='mr-2'  type="radio" id="ques4" name="questions" onChange={()=> handleOnChange1("fourth")} value={fourth}  />
          I am a registered counselor and I need support.</label><br/>
        <label htmlFor="ques5">
        <input  className='mr-2'  type="radio" id="ques5" name="questions" onChange={()=> handleOnChange1("fifth")} value={fifth}  />
        I have a business-related inquiry.
        </label><br/>
        <label htmlFor="ques6">
        <input className='mr-2'  type="radio" id="ques6" name="questions" onChange={()=> handleOnChange1("sixth")} value={sixth}  />
        I am interested in Healing Online for my organization.
        </label><br/>
        <label htmlFor="ques7">
        <input className='mr-2'   type="radio" id="ques7" name="questions" onChange={()=> handleOnChange1("seventh")} value={seventh}  />
        I have a billing related question.s
        </label><br/>
                    
                   
                  </div>
              
            </div>
            <form  onSubmit={handleSubmit}>
            <label className=" flex flex-col mt-8 lg:mt-20" htmlFor="name">
              <span className="mb-5 text-2xl font-normal">Full Name:</span>
              <input
                type="text"
                
                name="name"
                value={name.name}
                onChange={handleOnChange}
                id="name"
                placeholder="Enter your full name here..."
                className="border-2 rounded-lg h-16 w-auto border-[#E5E5E5] pl-4
           placeholder:pl-1 "
              />
            </label>

            <label className=" flex flex-col" htmlFor="email">
              <span className="mb-5 text-2xl font-normal pt-5">Email:</span>
              <input
                 type="email"
                 name="email"
                 value={newEmailInput.email}
                 onChange={handleOnChange}

                id="email"
                placeholder="Enter your email address here..."
                className="border-2 rounded-lg h-16 w-auto border-[#E5E5E5] pl-4
           placeholder:pl-1"
              />
            </label>

            <label className=" flex flex-col" htmlFor="details">
              <span className="mb-5 text-2xl font-normal pt-5">Details:</span>
              <input
                type="text"
               
                name="details"
                value={details.details}
                onChange={handleOnChange}
                id="details"
                placeholder="Enter your details here..."
                className="border-2 rounded-lg h-40 w-auto sm:w-[500px] lg:w-[604px] border-[#E5E5E5] pl-4
           placeholder:pl-1"
              />
            </label>

            <button
              type="submit"
              value="Submit"
              className="bg-[#2DD3E3] my-5 border-2 rounded-md px-10 py-2 border-[#2DD3E3] text-xl font-normal"
            >
              SUBMIT
            </button>
          </form>
        </div>

        <div className="flex flex-col">
          <img
            className="mt-3 md:mt-0 h-auto lg:h-96 xl:h-auto xl:w-auto"
            src={contactimage}
            alt="contactimage"
          />

          <div className="mx-auto mt-9 lg:my-auto lg:align-middle">
            <div className="flex flex-col bg-[#EAF8F9] border-2 border-[#EAF8F9] rounded-xl h-70 lg:h-auto p-8 w-auto sm:w-96 lg:w-80 xl:w-96 text-2xl sm:ml-2 ">
              <h1 className="font-normal pb-3">Find Us At:</h1>
              {addressObject.map((address) => {
                return (
                  <p key={address.id} className="text-gray-500">
                    {address.text}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
