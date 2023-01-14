import React, { useEffect, useState } from 'react';
 import { doc,getDocs } from 'firebase/firestore';
import { useParams} from 'react-router-dom';
import { db } from '../../firebase-config';

const BlogDetails = () => {
    const params = useParams();
    const {id }= params.id;  
    const [blogs, setBlog] = useState({});
    useEffect(() => {
       const fetchBlogId = async () => {
       const ref=doc(db,'blogCollection',doc.id)
       const docs=await getDocs(ref)
       setBlog(docs);
       console.log(docs)
      };
      fetchBlogId();
    }, []);
    
    return( 
    <div>
      {/* {blogs.map((blog) => {
            return (
              <div key={blog.id}>
                <h1 className="text-6xl font-medium mb-12 mt-4">
                  {blog.blogtitle}
                </h1> </div>
            );
            
          })} */}
           <div>
                <h1 className="text-6xl font-medium mb-12 mt-4">
                  {blogs.blogtitle}
                </h1> </div>
      <h1> id of   : {id}</h1> 
    </div>
     
    ) 
};


export default BlogDetails;








// use firebase to fetch that specific blog by id.
// blogsCollection/${id}