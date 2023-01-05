import React, { useEffect, useState } from 'react';
import { collection, getDocs } from '@firebase/firestore';
import { db } from '../../firebase-config';

export default function Resources() {
  const [blog, setBlog] = useState([]);
  const userCollectionRef = collection(db, 'blogCollection');
  useEffect(() => {
    const fetchBlogImage = async () => {
      const data = await getDocs(userCollectionRef);
      setBlog(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    fetchBlogImage();
  }, []);
  return (
    <div className="mx-auto lg:max-w-7xl px-10 py-10">
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
  );
}
