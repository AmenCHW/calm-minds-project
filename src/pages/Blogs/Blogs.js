import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase-config';
import SubcribedEmails from './SubcribedEmails';

function Blogs() {

  const [blogs, setBlog] = useState([]);
  const userCollectionRef = collection(db, 'blogCollection');

  useEffect(() => {
    const fetchBlogImage = async () => {
      const data = await getDocs(userCollectionRef);
      setBlog(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    fetchBlogImage();
  }, []);

  return (
    <div className="mx-auto px-10 py-10 lg:max-w-7xl">

      <div className="rounded-lg bg-cover bg-center ">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/calm-minds-project.appspot.com/o/blogImages%2FRectangle45.svg?alt=media&token=9eaa7a99-680b-4734-868c-cdf5899133e9"
          alt=""
          className="object-cover h-full w-full object-center rounded-lg mb-20"
        />
      </div>

      <div>
        {blogs.map((blog) => {
          return (
            <div>
              <h1 className="text-xl md:text-3xl lg:text-5xl font-medium mb-12 mt-4">
                {blog.blogtitle}
              </h1>
              <p className="text-lg lg:text-xl">{blog.summery}</p>
              <h3 className="text-3xl mb-6 mt-12 ">{blog.secondTitle}</h3>
              <p className="text-lg lg:text-xl leading-relaxed">{blog.paragraph}</p>
            </div>
          );
        })}
      </div>

      {/* _____________________subscription__________________________________________________________________________________________________- */}
      <div className='mt-3'>
        <h3 className="text-xl sm:text-xl md:text-2xl  mb-2 mt-8 items-start font-medium">
          SIGN UP FOR THE HEALING BLOG
        </h3>
        <p>A weekly, ad-free Blog that helps you stay in the know.</p>
        <div className='pt-5'><SubcribedEmails /></div>
      </div>

      {/* _____________________Recommended blog images _________________________________________________________________________________ -*/}
      <div className="mx-2 my-3 py-10">
        <h3 className="text-2xl sm:text-2xl md:text-3xl format-normal leading-normal pt-5 mt-10 font-medium">
          RECOMMENED FOR YOU
        </h3>
        <div className="flex flex-wrap pr-5 mt-6">
          {blogs.slice(1, 3).map((blog) => {
            return (
              <div
                key={blog.id}
              >
                <Link to={`/blogs/${blog.id}`}>
                  <img
                    src={blog.imgText}
                    alt="blogimage"
                    className=" im1 object-cover sm:h-56 sm:w-96 rounded-lg mr-3 mb-4"
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
