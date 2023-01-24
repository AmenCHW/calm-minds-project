import React, {  useEffect, useState} from 'react';
 import {  collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';
 import { db } from '../../firebase-config';




function RecentBlogs2() {
  const [blogs, setBlog] = useState([]);
  // ____________________________ blog id_____________________________________________________________________________________________________________________________
   const userCollectionRef = collection(db, 'blogCollection');
    useEffect(() => {
    const fetchBlogImage = async () => {
      const data = await getDocs(userCollectionRef);
      setBlog(data.docs.map((doc, i) => ({ ...doc.data(), id: doc.id, active: i<3 })));
    };

    fetchBlogImage();
  
  }, []);
  //  _________________________________________ Carsoul_____________________________________________________________________________________________________________

  const slideLeft = () => {
    const slider = document.getElementById('slider');
    slider.scrollLeft -= 380;
  };

  const slideRight = () => {
    const slider = document.getElementById('slider');
    slider.scrollLeft += 380;
  };
 
   return (
   
      
    <div className="flex flex-col md:flex-row place-content-center mb-4 mx-4">
      <button
        type="button"
        className="text-xl md:text-5xl cursor-pointer border-2 pb-2 px-5 border-black rounded-md h-1/2 my-10 md:mr-4 mx-36 md:mx-0"
        onClick={slideLeft}
      >
        &#8249;
      </button>
     
      <div    id="slider" className="flex-col flex md:flex-row gap-2 sm:gap-4 place-items-center">
      


      
         {blogs.map((blog) => {
            return (

              <div className='object-cover h-60 w-96 rounded-lg mr-3 mb-4 ' 
              key={blog.id}
               >
                <Link to= {`/blogs/${blog.id}`} onClick={window.scrollTo(0, 0)}> 
                  <img
                    src={blog.imgText}
                    alt="" 
                    className=" im1 object-cover h-56 w-96 rounded-lg mr-3 mb-4 hover:scale-110 transition duration-300 ease-in-out" 
                  />
                </Link>  

              </div>
             
          
            );

            
          })} 
         
          </div> 

      <button
        type="button"
        className="text-xl md:text-5xl hover:cursor-pointer border-2 pb-2 px-5 border-black rounded-md h-1/2 my-10 md:ml-4 mx-36 md:mx-0"
        onClick={slideRight}
      >
        &#8250;
      </button>
    
    </div>
    
   
  );
}
export default RecentBlogs2;

 