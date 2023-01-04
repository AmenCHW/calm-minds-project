import React, { useEffect, useState } from 'react';
import { collection, getDocs } from '@firebase/firestore';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../firebase-config';

export default function Resources() {
  const [imageList, setImageList] = useState([]);
  const imagesListRef = ref(storage, 'blogImages/');
  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
    });
  }, []);

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
      <div className="bg-indigo-300 rounded-lg">
        {imageList.map((image) => {
          return (
            <img
              src={image}
              alt=""
              className="object-cover h-48 w-96 rounded-lg"
            />
          );
        })}
      </div>

      <div>
        {blog.map((blogs) => {
          return (
            <div>
              <h1 className="text-4xl font-medium mb-8">{blogs.blogtitle}</h1>
              <p>{blogs.blogcontent}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
