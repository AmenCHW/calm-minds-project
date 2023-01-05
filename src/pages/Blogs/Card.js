import React, { useEffect, useState } from 'react';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebase-config';

function Card({ title }) {
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

  return (
    <div
      className="
        flex
        justify-center
        text-3xl md:text-7xl 
        p-2 w-50 h-50  w-3/4 lg:w-60 sm:h-auto bg-blue-200
        items-center
        drop-shadow-md	
        rounded-md
        hover:shadow-lg"
    >
      <div className="flex-col">
        {imageList.map((image) => {
          return (
            <img
              src={image}
              alt=""
              className="object-cover h-48 w-96 rounded-lg"
            />
          );
        })}
        <h2 className="text-sm text-center mt-6">{title}</h2>
        <div className="text-sm hover:cursor-pointer text-gray-500" />
      </div>
    </div>
  );
}

export default Card;
