import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase-config';

function Careers() {
  const [carees, setCarees] = useState([]);
  const userCollectionRef = collection(db, 'careers');

  useEffect(() => {
    const fetchBlogImage = async () => {
      const data = await getDocs(userCollectionRef);
      setCarees(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    fetchBlogImage();
  }, []);

  return (
    <>
      <div className="mx-auto lg:max-w-7xl px-10 py-10">

        <div className="mb-10 sm:mb-24">
          <h1 className="pt-5 text-3xl sm:text-4xl md:text-5xl format-normal leading-normal">
            CAREERS AT HEALING
          </h1>
          <p className="text-xl sm:text-2xl text-[#718096]">
            Be a part of making people feel better.
          </p>
        </div>

        <p className="lg:text-justify mt-2 text-xl">
          Our SEO software cuts through mountains of data to surface critical
          insights. We build and maintain systems that process massive amounts
          of data (we&#39;re talking 36 trillion records per day and multiple
          petabytes of storage.) We model transparent and empathetic marketing
          for the world. We educate our community, making every effort to help
          them improve their skill. And we do it all by fostering a culture that
          encourages accountability, empathy, and transparency.
        </p>
        <div>

          <p className="mt-16 text-xl">
            What role will you play?
          </p>

          <button
            className="lg:mt-10 mt-5 bg-[#2DD3E3] hover:bg-blue-400 text-white
                 py-2 px-4 border-b-4 border-[#2DD3E3] hover:border-blue-500 rounded"
            type="button"
          >
            SEE OUR OPEN LIST
          </button>
        </div>
      </div>

      <div className="bg-[#FEE89E]">
        <div className="mx-auto lg:max-w-7xl px-10 py-4 flex flex-col">
          <h1 className="text-[#424A4F] text-3xl sm:text-4xl md:text-5xl format-normal leading-normal">OUR HIRING PHILOSOPHY</h1>
          <p className="text-xl text-[#424A4F] mt-2">
            To build the very best SEO tools, we need a workforce that reflects
            the diversity of our communities and customers. We want Online
            Therapy to be a place where everyone feels welcome and engaged, bar
            none. It&#39;s our mission and promise to interview a diverse and
            representative slate of candidates before making an offer for our
            open roles.
          </p>
        </div>
      </div>

      <div className="mx-auto lg:max-w-7xl px-10 py-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl format-normal leading-normal text-[#424A4F]">CURRENT OPEN POSITIONS</h1>
        <p className="text-xl sm:text-2xl text-[#718096] mb-5">
          Please send us an email with the application title as the subject with
          an attached CV in PDF format!
        </p>

        {carees.map((caree) => {
          return (
            <div key={caree.id} className="pt-4">

              <div className="sm:flex sm:justify-between">
                <div className='flex flex-col lg:w-3/4'>
                  <div className="lg:flex text-start lg:space-x-4 text-[#2DD3E3] text-2xl md:text-3xl">
                    <h1>{caree.work} |</h1>
                    <h1>{caree.workon} |</h1>
                    <h1>{caree.place}</h1>
                  </div>
                  <p className="text-xl pt-3 lg:pt-0">{caree.descriptions}</p>
                </div>

                <div className='flex flex-col mt-3 sm:mt-0'>
                  <h1 className="text-[#2DD3E3] text-2xl md:text-3xl text-start">
                    {caree.degree}
                  </h1>
                  <h1 className="text-[#5D6769] text-xl">{caree.workon}</h1>
                </div>

              </div>
              <hr className='border-1 border-[#5D6769]' />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Careers;
