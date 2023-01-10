import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
// import Card from "./Card";
// import {initalState} from "./testData";
import { db } from '../../firebase-config';

function RecentBlogs() {

  // const [cards, setCards] = useState(initalState);
  const [blogs, setBlog] = useState([]);
  const userCollectionRef = collection(db, 'blogCollection');

  useEffect(() => {
    const fetchBlogImage = async () => {
      const data = await getDocs(userCollectionRef);
      setBlog(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    fetchBlogImage();
  console.log(blogs);
  }, []);





  // slide
  const handleRightClick = () => {
    const prevState = [...blogs];
    // find next inactive card index - top
    const nextCardIdx = prevState
      .filter((ft) => ft.active === true)
      .sort((a, b) => {
        if (a.pos > b.pos) {
          return 1;
        } 
          return -1;
       
      })
      [0].idx;
    // reset
    prevState.find((f) => f.active === false).active = true;
    // update
    prevState.find((f) => f.idx === nextCardIdx).active = false;
    // maximize pos
    prevState.find((f) => f.idx === nextCardIdx).pos =
      Math.max.apply(
        null,
        prevState.map((o) => {
          return o.pos;
        })
      ) + 1;

    // update state
    setBlog(prevState);
  };

  const handleLeftClick = () => {
    const prevState = [...blogs];
    // find next inactive card index - bottom
    const nextCardIdx = prevState
      .filter((ft) => ft.active === true)
      .sort((a, b) => {
        if (a.pos > b.pos) {
          return 1;
        } 
          return -1;
       
      })
      
      .pop(1).idx;
    // minimize pos
    prevState.find((f) => f.active === false).pos =
      Math.min.apply(
        null,
        prevState.map((o) => {
          return o.pos;
        })
      ) - 1;
    // reset
    prevState.find((f) => f.active === false).active = true;
    // update
    prevState.find((f) => f.idx === nextCardIdx).active = false;

    // update state
    setBlog(prevState);
  };

  return (
    <div className="flex flex-col md:flex-row place-content-center mb-4 ">
      <button
      type="button"
        className="text-xl md:text-5xl cursor-pointer border-2 pb-2 px-5 border-black rounded-md h-1/2 my-10 md:mr-4 mx-36 md:mx-0"
        onClick={() => handleLeftClick()}
      >
        &#8249;
      </button>
      <div className="flex-col flex md:flex-row gap-2 sm:gap-4 place-items-center">
      {blogs
        .filter((f) => f.active === true)
        .sort((a, b) => {
            if (a.pos > b.pos) {
              return 1;
            } 
              return -1;
          
          })
          
        .map((blog) => ( 
         
            <div className='object-cover h-60 w-96 rounded-lg mr-3 mb-4 '
            // style={{backgroundImage: `url(${blog.coverImg})` }}
            >
              
              {/* <h1 className="text-2xl font-medium mb-12 mt-4 mx-2 my-2">
                {blog.blogtitle}
              </h1> */}

              <img
                src={blog.coverImg}
                alt="" 
                className=" im1 object-cover h-48 w-96 rounded-lg mr-3 mb-4"
                
              /> 
              
            </div>
        
          // <Card key={blog.blogtitle} image={blog.coverImg} />
        ))}</div>


        {blogs.map((blog) => {
            return (
              <div className='object-cover h-60 w-96 rounded-lg mr-3 mb-4 '
              // style={{backgroundImage: `url(${blog.coverImg})` }}
              >
                
                {/* <h1 className="text-2xl font-medium mb-12 mt-4 mx-2 my-2">
                  {blog.blogtitle}
                </h1> */}

                <img
                  src={blog.coverImg}
                  alt="" 
                  className=" im1 object-cover h-48 w-96 rounded-lg mr-3 mb-4"
                  
                /> 
                
              </div>
            );
          })}
        {/* <div>
          
         {blog.map((blogg)=>{
          return(
            <div key={blogg.blogtitle}>
            <img
            src={blogg.coverImg}
            alt="" 
            className=" im1 object-cover h-48 w-96 rounded-lg mr-3 mb-4"
            
          /></div>
          
          
          
          
          )})}
          
          </div> */}
      <button
      type="button"
        className="text-xl md:text-5xl hover:cursor-pointer border-2 pb-2 px-5 border-black rounded-md h-1/2 my-10 md:ml-4 mx-36 md:mx-0"
        onClick={() => handleRightClick()}
      >
        &#8250;	
      </button>
    </div>
  );
}

export default RecentBlogs;
