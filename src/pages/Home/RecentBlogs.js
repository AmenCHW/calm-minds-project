import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { db } from '../../firebase-config';

function RecentBlogs() {
  const [blogs, setBlog] = useState([]);
  // ____________________________ blog id_____________________________________________________________________________________________________________________________
  const userCollectionRef = collection(db, 'blogCollection');
  useEffect(() => {
    const fetchBlogImage = async () => {
      const data = await getDocs(userCollectionRef);
      setBlog(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    fetchBlogImage();
  }, []);
  //  _________________________________________ Carsoul_____________________________________________________________________________________________________________


  return (
    <div className=" bg-[#EAF8F9]">
      <div className="mx-auto lg:max-w-7xl px-10 py-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl format-normal leading-normal pt-10 pb-10 lg:pb-24">
          RECENT BLOGS
        </h1>
        <div className="flex flex-col md:flex-row place-content-center mb-4">


          <div className="flex-col flex md:flex-row gap-2 sm:gap-4 place-items-center">
            {blogs.map((blog) => {
              return (
                <div
                  className="object-cover h-60 w-auto xl:w-96 rounded-lg mr-3 mb-4 "
                  key={blog.id}
                >
                  <Link to={`/blogs/${blog.id}`}>
                    <img
                      src={blog.imgText}
                      alt=""
                      className=" im1 object-cover h-56 w-auto xl:w-96 rounded-lg mr-3 mb-4"
                    />
                  </Link>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
}
export default RecentBlogs;
