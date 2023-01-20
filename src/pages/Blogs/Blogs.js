
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection,  getDocs } from 'firebase/firestore';
// import { ref, listAll, getDownloadURL } from 'firebase/storage';

import { db } from '../../firebase-config';
import SubcribedEmails from './SubcribedEmails';

function Blogs() {



  // const [imageList, setImageList] = useState([]);
  // const imagesListRef = ref(storage, 'blogImages/');
  const [blogs, setBlog] = useState([]);
  const userCollectionRef = collection(db, 'blogCollection');


  useEffect(() => {
    const fetchBlogImage = async () => {
      const data = await getDocs(userCollectionRef);
      setBlog(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    fetchBlogImage();
  }, []);
  // _________________showing Recommended blog images using List All and reference___________________________
  // useEffect(() => {
  //   listAll(imagesListRef).then((response) => {
  //     response.items.forEach((item) => {
  //       getDownloadURL(item).then((url) => {
  //         setImageList((prev) => [...prev, url]);
  //       });
  //     });
  //   });
  // }, []);

  
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
          {blogs.slice(2).map((blog) => {
            return (
              <div>
                <h1 className="text-6xl font-medium mb-12 mt-4">
                  {blog.blogtitle}
                </h1>
                <p className="text-2xl">{blog.summery}</p>
                <h3 className="text-5xl mb-6 mt-12 ">{blog.secondTitle}</h3>
                <p className="text-2xl leading-relaxed">{blog.paragraph}</p>
              </div>
            );
          })}
        </div>
 {/* _____________________subscribtion__________________________________________________________________________________________________- */}
       <div className='mt-3 '>
          <h3 className="text-xl sm:text-xl md:text-2xl  mb-2 mt-8 items-start font-medium">
            SIGN UP FOR THE HEALING BLOG
          </h3>
          <p >A weekly, ad-free Blog that helps you stay in the know.</p>
          <SubcribedEmails /> 
        </div>
       
          {/* _____________________Recommended blog images _________________________________________________________________________________ -*/}
          <div className="py-10 ">
          <div className="mx-2 my-3">
            <h3 className="text-2xl sm:text-2xl md:text-3xl format-normal leading-normal pt-5 mt-10 font-medium">
              RECOMMENED FOR YOU{' '}
            </h3>
            <div className="flex flex-wrap pr-5 mt-6">
              {blogs.slice(1, 3).map((blog) => {
                return (
                  <div
                    className="object-cover h-60 w-96 rounded-lg mr-3 mb-4 "
                    key={blog.id}
                  >
                   
                    <Link to= {`/blogs/${blog.id}`}>
                      <img
                        src={blog.imgText}
                        alt=""
                        className=" im1 object-cover h-56 w-96 rounded-lg mr-3 mb-4"
                      />
                    </Link>
                  </div>
                );
              })}
              {/* {imageList.slice(1, 3).map((image) => {
              return (
                <div>
               
                </div> 
              );
            })} */}
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* {blog.map((blogg) => {
        return (
          <div key={blogg}>
          <div key={blogg.blogtitle}>
            <RecentBlogs imgs={blogg.coverImg}/>
            </div></div>
        );
      })} */}
      </div>
    </div>
  );
}

export default Blogs;
