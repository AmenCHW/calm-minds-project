import React from "react";

function Card({ image, title }) {
 
  return (
    <div
      className="
        flex
        justify-center
        text-3xl md:text-7xl 
        p-2 w-50 h-50  w-3/4 lg:w-60 sm:h-auto bg-blue-200
        items-center
        drop-shadow-md	
        rounded-md"
    >
      <div  className="flex-col">
        <img src={image} alt="blog" />
        <h2 className="text-sm text-center mt-6">{title}</h2>
        <div className="text-sm hover:cursor-pointer text-gray-500"/>
      </div>
    </div>
  );
}

export default Card;
