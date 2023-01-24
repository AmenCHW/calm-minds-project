import React, { useEffect, useState } from 'react';
import { getDoc, doc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase-config';
import SubcribedEmails from '../../components/SubcribedEmails';
import RecommendedBlogs from './RecommendedBlogs';

const BlogDetails = () => {
  const params = useParams({});
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    async function fetchListing() {
      const docRef = doc(db, 'blogCollection', params.id);
      const docSnap = await getDoc(docRef);
      setBlog(docSnap.data());
    }
    fetchListing();
  }, [params.id]);

  return (
    <div key={blog.ID} className="mx-auto px-10 py-10 lg:max-w-7xl">
      <div>
        <img
          src={blog.coverImg}
          alt=""
          className="object-cover h-full w-full object-center rounded-lg mb-5 md:mb-20"
        />
      </div>

      <h1 className="text-2xl md:text-3xl lg:text-5xl font-medium mb-5 md:mb-12 mt-4">
        {blog.blogtitle}
      </h1>
      <p className="text-lg lg:text-xl">{blog.summery}</p>
      <h3 className="text-2xl lg:text-3xl mb-6 mt-12 ">{blog.secondTitle}</h3>
      <p className="text-lg lg:text-xl leading-relaxed mb-3">
        {blog.paragraph}
      </p>

      <div className="mt-5">
        <SubcribedEmails />
      </div>

      <RecommendedBlogs />
    </div>
  );
};
export default BlogDetails;
