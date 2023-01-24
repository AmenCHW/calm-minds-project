import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase-config';

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
    <div>
      <div className="mx-auto lg:max-w-7xl px-10 py-10">
        <div className="mb-24">
          <h1 className="font-medium lg:text-6xl text-4xl  ">
            CAREERS AT HEALING
          </h1>
          <p className="lg:text-3xl lg:opacity-50 text-3xl">
            Be a part of making people feel better.
          </p>
        </div>

        <p className="lg:text-[1.2vw] text-[6vw]">
          Our SEO software cuts through mountains of data to surface critical
          insights. We build and maintain systems that process massive amounts
          of data (we&#39;re talking 36 trillion records per day and multiple
          petabytes of storage.) We model transparent and empathetic marketing
          for the world. We educate our community, making every effort to help
          them improve their skill. And we do it all by fostering a culture that
          encourages accountability, empathy, and transparency.
        </p>
        <div>
          <p className="mt-16 lg:text-[1vw]  text-[6vw]">
            What role will you play?
          </p>

          <Link to="/bookingPage" className="focus:text-[#FEE89E]">
            <button
              className="lg:mt-10 mt-5 bg-[#2DD3E3] hover:bg-blue-400 text-white  lg:text-[1.2vw]
                  font-bold py-2 text-[4vw] px-4 border-b-4 border-[#2DD3E3] hover:border-blue-500 rounded"
              type="button"
            >
              SEE OUR OPEN LIST
            </button>
          </Link>
        </div>
      </div>

      <div className="w-full place-items-center py-10 flex flex-col bg-[#FEE89E] mb-10  sm:flex-row sm:p-10 sm:pl-20 sm:pr-8">
        <div className="w-full mx-auto lg:max-w-7xl px-10  ">
          <h1 className="text-4xl text-[#424A4F]">OUR HIRING PHILOSOPHY</h1>
          <p className="text-2xl text-[#424A4F] mt-8">
            To build the very best SEO tools, we need a workforce that reflects
            the diversity of our communities and customers. We want Online
            Therapy to be a place where everyone feels welcome and engaged, bar
            none. It&#39;s our mission and promise to interview a diverse and
            representative slate of candidates before making an offer for our
            open roles.
          </p>
        </div>
      </div>
      <div className="mx-auto lg:max-w-7xl px-10 py-10">
        <h1 className="text-4xl text-[#424A4F]">CURRENT OPEN POSITIONS</h1>
        <p className="text-2xl opacity-50">
          Please send us an email with the application title as the subject with
          an attached CV in PDF format!
        </p>
      </div>
      <div>
        {carees.map((caree) => {
          return (
            <div className="mx-auto lg:max-w-7xl px-10 py-4">
              <div className="lg:flex lg:justify-between ">
                <div className="lg:flex text-start lg:space-x-4 text-[#2DD3E3] text-3xl">
                  <h1>{caree.work} |</h1>
                  <h1>{caree.workon} |</h1>
                  <h1>{caree.place}</h1>
                </div>
                <div>
                  <h1 className="text-[#2DD3E3] text-3xl text-start">
                    {caree.degree}
                  </h1>
                </div>
              </div>
              <div className="lg:flex justify-between mb-6">
                <p className="text-2xl">{caree.descriptions}</p>
                <h1 className="lg:text-2xl  hidden">{caree.workon}</h1>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Careers;