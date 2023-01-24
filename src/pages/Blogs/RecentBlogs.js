// import React, {  useEffect, useState } from 'react';
//  import {  collection, getDocs } from 'firebase/firestore';
// import { Link } from 'react-router-dom';
//  import { db } from '../../firebase-config';



// function RecentBlogs() {
//   const [blogs, setBlog] = useState([]);
//   // ____________________________ blog id_____________________________________________________________________________________________________________________________
//    const userCollectionRef = collection(db, 'blogCollection');
//     useEffect(() => {
//     const fetchBlogImage = async () => {
//       const data = await getDocs(userCollectionRef);
//       setBlog(data.docs.map((doc, i) => ({ ...doc.data(), id: doc.id, active: i<3 })));
//     };

//     fetchBlogImage();
  
//   }, []);
//   //  _________________________________________ Carsoul_____________________________________________________________________________________________________________

//   const handleRightClick = () => {
//     const prevState = [...blogs];
//     // find next inactive card index - top
//     const nextCardIdx = prevState
//       .filter((ft) => ft.active === true)
//       .sort((a, b) => {
//         if (a.pos > b.pos) {
//           return 1;
//         }
//         return -1;
//       })[0].idx;
//     // reset
//     prevState.find((f) => f.active === false).active = true;
//     // update
//     prevState.find((f) => f.idx === nextCardIdx).active = false;
//     // maximize pos
//     prevState.find((f) => f.idx === nextCardIdx).pos =
//       Math.max.apply(
//         null,
//         prevState.map((o) => {
//           return o.pos;
//         })
//       ) + 1;

//     // update state
//     setBlog(prevState);
//   };

//   const handleLeftClick = () => {
//     const prevState = [...blogs];
//     // find next inactive card index - bottom
//     const nextCardIdx = prevState
//       .filter((ft) => ft.active === true)
//       .sort((a, b) => {
//         if (a.pos > b.pos) {
//           return 1;


//         } 
//           return -1;
       
//       }) .pop(1).idx;

//     // minimize pos
//     prevState.find((f) => f.active === false).pos =
//       Math.min.apply(
//         null,
//         prevState.map((o) => {
//           return o.pos;
//         })
//       ) - 1;
//     // reset
//     prevState.find((f) => f.active === false).active = true;
//     // update
//     prevState.find((f) => f.idx === nextCardIdx).active = false;

//     // update state
//     setBlog(prevState);
//   };
//    return (
//     <div className="flex flex-col md:flex-row place-content-center mb-4 ">
//       <button
//         type="button"
//         className="text-xl md:text-5xl cursor-pointer border-2 pb-2 px-5 border-black rounded-md h-1/2 my-10 md:mr-4 mx-36 md:mx-0"
//         onClick={() => handleLeftClick()}
//       >
//         &#8249;
//       </button>

//       <div className="flex-col flex md:flex-row gap-2 sm:gap-4 place-items-center">
      


      
//          {blogs.filter(b=> b.active).map((blog) => {
//             return (

//               <div className='object-cover h-60 w-96 rounded-lg mr-3 mb-4 ' 
//               key={blog.id}
//                >
//                 <Link to= {`/blogs/${blog.id}`} onClick={window.scrollTo(0, 0)}> 
//                   <img
//                     src={blog.imgText}
//                     alt="" 
//                     className=" im1 object-cover h-56 w-96 rounded-lg mr-3 mb-4 hover:scale-110 transition duration-300 ease-in-out" 
//                   />
//                 </Link>  

//               </div>
             
          
//             );

            
//           })}   
//           </div> 

//       <button
//         type="button"
//         className="text-xl md:text-5xl hover:cursor-pointer border-2 pb-2 px-5 border-black rounded-md h-1/2 my-10 md:ml-4 mx-36 md:mx-0"
//         onClick={() => handleRightClick()}
//       >
//         &#8250;
//       </button>
//     </div>
//   );
// }
// export default RecentBlogs;

// ..........................................................estaaaaaaaaaa
import React, {  useEffect, useState} from 'react';
import Carousel from 'react-elastic-carousel'
 import {  collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';
 import { db } from '../../firebase-config';




function RecentBlogs() {
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

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 }
   
  ]

 
   return (
   
      
    <div className="flex flex-col md:flex-row place-content-center mb-4 mx-4">
      {/* <button
        type="button"
        className="text-xl md:text-5xl cursor-pointer border-2 pb-2 px-5 border-black rounded-md h-1/2 my-10 md:mr-4 mx-36 md:mx-0"
        onClick={() =>{}}
      >
        &#8249;
      </button> */}
     < Carousel  breakPoints={breakPoints} className="mx-2  ">
      <div className="flex-col flex md:flex-row gap-2 sm:gap-4 place-items-center">
      


      
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

      {/* <button
        type="button"
        className="text-xl md:text-5xl hover:cursor-pointer border-2 pb-2 px-5 border-black rounded-md h-1/2 my-10 md:ml-4 mx-36 md:mx-0"
        onClick={() =>{}}
      >
        &#8250;
      </button> */}
      </Carousel>
    </div>
    
   
  );
}
export default RecentBlogs;

 