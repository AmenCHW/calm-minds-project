import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase-config';

function RecommendedBlogs() {

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
    <div className="mx-auto py-10 my-3">
      {/* _____________________Recommended blog images _________________________________________________________________________________ -*/}
      <h3 className="text-2xl sm:text-2xl md:text-3xl format-normal leading-normal pt-5 mt-10 font-medium">
        RECOMMENED FOR YOU
      </h3>
      <div className="flex flex-wrap mt-6">
        {blogs.slice(1, 3).map((blog) => {
          return (
            <div
              key={blog.id}
            >

              <Link
                to={`/blogs/${blog.id}`}
                onClick={window.scrollTo(0, 0)}
              >
                <img src={blog.imgText}
                  alt="blog"
                  className=" im1 object-cover sm:h-56 sm:w-96 rounded-lg mr-3 mb-4  hover:scale-100 transition duration-300 ease-in-out "
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RecommendedBlogs;
