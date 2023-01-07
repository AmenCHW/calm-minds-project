import React, { useEffect, useState } from "react"; 
import { collection, addDoc,getDocs} from "firebase/firestore"; 
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { ReactComponent as SendIcon } from '../../icons/send.svg';
import { db,storage } from '../../firebase-config';


function Blogs() {
  const [newEmailInput, setNewEmailInput] = useState({});
  const [imageList, setImageList] = useState([]);
  const imagesListRef = ref(storage, 'blogImages/');
  const [blog, setBlog] = useState([]);
  const userCollectionRef = collection(db, 'blogCollection');

  useEffect(() => {
    const fetchBlogImage = async () => {
      const data = await getDocs(userCollectionRef);
      setBlog(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    fetchBlogImage();
  }, []);
  // _________________showing Recommended blog images using List All and reference___________________________
  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
    });
  }, []);
  

  // __________this handling subscribtion email input___________________
  const handleOnChange = (event) => {
    const {target: {name: keyName, value}} = event;
    // console.log('handleOnChange:', keyName);
     setNewEmailInput((prev) => {
      return { ...prev, [keyName]: value };
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(newEmailInput);
    await addDoc(collection(db, "subscribed-emails"), {
      ...newEmailInput // { "": muslim@gmail.com } => { "email": "muslim@gmail.com" }  key value shouldnot be empty so in email input we have name=email 
    });
    // Clear the form
    setNewEmailInput({
      email: "",
      
    });
  };
   
  return (
    <div className="mx-auto  px-10 py-10">
    <div className="mx-auto lg:max-w-7xl ">
      <div className="rounded-lg bg-cover bg-center ">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/calm-minds-project.appspot.com/o/blogImages%2FRectangle45.svg?alt=media&token=9eaa7a99-680b-4734-868c-cdf5899133e9"
          alt=""
          className="object-cover h-full w-full object-center  rounded-lg mb-20"
        />
      </div>

      <div>
        {blog.map((blogs) => {
          return (
            <div>
              <h1 className="text-6xl font-medium mb-12 mt-4">
                {blogs.blogtitle}
              </h1>
              <p className="text-2xl">{blogs.summery}</p>
              <h3 className="text-5xl mb-6 mt-12 ">{blogs.secondTitle}</h3>
              <p className="text-2xl leading-relaxed">{blogs.paragraph}</p>
            </div>
          );
        })}
      </div>
    </div>
    
      {/* <EditProfile /> */}
      
      <div className='py-10 px-10 ml-10'>                                                                              
       <h3 className='text-xl sm:text-xl md:text-3xl  pt-5 items-start '>SIGN UP FOR THE HEALING BLOG</h3>
       <p>A weekly, ad-free Blog that helps you stay in the know.</p>
      {/* _____________________subscribtion__________________________________________________________________________________________________- */}
       <div className="mt-4 flex mx-2 ">
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
         {/* _____________________Recommended blog images _________________________________________________________________________________ -*/}
        <div className="mx-2"> 
          <h3 className='text-xl sm:text-xl md:text-3xl format-normal leading-normal pt-5 my-10'>RECOMMENED FOR YOU  </h3>
          <div className="flex flex-wrap pr-5 py-2">
          {imageList.slice(1, 3).map((image) => {
          return (
            <img
              src={image}
              alt=""
              className="object-cover h-48 w-96 rounded-lg mr-3 mb-4"
            />
          );
        })}
          </div>
        </div>
      </div>
      </div>
      
    
  );
  
}

export default Blogs;