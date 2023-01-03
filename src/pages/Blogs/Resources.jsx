import { collection, getDocs } from '@firebase/firestore';
import React, { useEffect } from 'react';
// import { useState } from 'react';
import { db } from '../../firebase-config';

export default function Resources() {
//   const [blogImage, setBlogImage] = useState([]);
  const userCollectionRef = collection(db, 'blogCollection');
  useEffect(() => {
    const fetchBlogImage = async () => {
      const { data } = await getDocs.get(userCollectionRef);
      console.log(data);
    };

    fetchBlogImage();
  }, []);
  return <div>Resources</div>;
}

// const { data } = await userCollectionRef.get();
//           setBlogImage(data);
//         };
