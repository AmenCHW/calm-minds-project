import React, { useEffect, useState } from 'react';
import { getDoc, doc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase-config';
import SubcribedEmails from "./SubcribedEmails"

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
  }, [params.listingId]);

  return (
    <div className="mx-auto px-10 py-10">
      <div className="mx-auto lg:max-w-7xl">
        <div className="rounded-lg bg-cover bg-center ">
          <div className="rounded-lg bg-cover bg-center ">
            <img
              src={blog.coverImg}
              alt=""
              className="object-cover h-full w-full object-center  rounded-lg mb-20"
            />
          </div>
          <h1 className="text-6xl font-medium mb-12 mt-4">{blog.blogtitle}</h1>
          <p className="text-2xl">{blog.summery}</p>
          <h3 className="text-5xl mb-6 mt-12 ">{blog.secondTitle}</h3>
          <p className="text-2xl leading-relaxed">{blog.paragraph}</p>
        </div> 
      </div>
      <SubcribedEmails/>
    </div>
  );
};

export default BlogDetails;


// blogsCollection/${id}
