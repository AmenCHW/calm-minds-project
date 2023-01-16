import React, { useEffect, useState } from 'react';
import { getDocs,doc } from 'firebase/firestore';
import { useParams} from 'react-router-dom';
import { db } from '../../firebase-config';

const BlogDetails = () => {
    const params = useParams({});
   //  const [id] = params.id;  
    // console.log("The value of a is " + id);
   
    const [blogs, setBlog] = useState({});


    useEffect(() => {
      const fetchBlogId = async () => {
      const ref=doc(db,'blogCollection',doc.id)
      const docs=await getDocs(ref)
      setBlog(docs);
      // console.log('docs')
      // console.log('docs'+docs)
     };
     fetchBlogId();
   }, []);

   
    console.log(blogs)
    return( 
    <div>
      {blogs.id}
      <h1>id of blog is : {params.id}</h1>
      
    </div>
    // console.log()
     ) 
};


export default BlogDetails;








// use firebase to fetch that specific blog by id.
// blogsCollection/${id}

