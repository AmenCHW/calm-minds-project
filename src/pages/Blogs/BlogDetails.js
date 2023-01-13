import React, { useEffect, useState } from 'react';
import { doc,getDocs } from 'firebase/firestore';
import { useParams} from 'react-router-dom';
import { db } from '../../firebase-config';

const BlogDetails = () => {
    const params = useParams();
    const id = params.id;  
    const [blogs, setBlog] = useState();
    useEffect(() => {
       const fetchBlogId = async () => {
       const ref=doc(db,'blogCollection',doc.id)
       const docs=await getDocs(ref)
       setBlog(docs);
      };
      fetchBlogId();
    }, []);
    
    return(
      <div>
         {blogs.map((blog) => {
            return (
              <div className='object-cover h-60 w-96 rounded-lg mr-3 mb-4 '
                > {blog.blogtitle}   
              </div>
              ); })}
             <h1> id : {id}</h1>;
             </div>
    ) 
};
export default BlogDetails;

// use firebase to fetch that specific blog by id.
    // blogsCollection/${id}