import React from 'react';
import BookingButton from './BookingButton';
import img from '../../img/img4.PNG';

const therapistImageObject = [
  {
    id: 1,
    src: img,
    alt: "therapist"
  },
  {
    id: 2,
    src: img,
    alt: "therapist"
  },
  {
    id: 3,
    src: img,
    alt: "therapist"
  },
  {
    id: 4,
    src: img,
    alt: "therapist"
  },
  {
    id: 5,
    src: img,
    alt: "therapist"
  }
]

function BookingSection() {
  return (
    <div className="Booking bg-amber-200 mx-auto lg:px-44 px-10 py-14">

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-normal mt-0 mb-2 text-slate-800 lg:pr-14">
        PROFESSIONAL, LICENSED, AND VETTED THERAPISTS THAT YOU CAN TRUST
      </h1>

      <div className="py-10 flex flex-wrap mx-auto md:mx-0">
        {therapistImageObject.map((each) => {
          return <img key={each.id}
            className="mx-2 rounded-full my-4 md:my-0 w-36 h-full border-solid border-2 border-[#2DD3E3]"
            src={each.src}
            alt={each.alt}
          />
        })}
      </div>

      <p className="lg:text-justify mt-2 text-xl md:text-2xl">
        Tap into the worlds largest network of licensed, accredited, and
        experienced therapists who can help you with a range of issues
        including depression, anxiety, relationships, trauma, grief, and more.
        With our therapists, you get the same professionalism and quality you
        would expect from an in-office therapist, but with the ability to
        communicate whenever and however you want.
      </p>

      <BookingButton />
    </div>
  );
}

export default BookingSection;
