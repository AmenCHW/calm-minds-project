import React from 'react';

export default function Ticket({ t }) {
  return (
    <div className="mx-auto py-14 px-10 lg:px-44">
      <h1 className="text-3xl sm:text-4xl md:text-5xl format-normal leading-normal">
        {t('Purchase tickets')}
      </h1>
      <h5 className="pt-5">
        {t('PURCHASE TICKETS THAT CAN BE USED TO BOOK APPOINTMENTS!')}
      </h5>

      <div className="flex flex-wrap">
        <div className="flex flex-col w-96 lg:w-[40%] xl:w-[30%] border-4 border-[#FBFBFB] shadow-2xl shadow-[#B2ABAB] rounded-3xl p-10 mt-8 text-center justify-center items-center mx-4">
          <h1 className="pt-5 text-3xl md:text-5xl format-normal leading-normal">
            {t('5 TICKETS')}
          </h1>
          <p className="pt-5 text-gray-500"> 10 $</p>
          <button
            className="my-4 bg-[#2DD3E3] hover:bg-[#7decf6] text-black 
                  font-bold py-2 px-4 border-b-4 border-[#2DD3E3] hover:border-[#42e4f3] rounded"
            type="button"
          >
            {t('PURCHASE')}
          </button>
        </div>

        <div className="flex flex-col w-96 lg:w-[40%] xl:w-[30%] border-4 border-[#FBFBFB] shadow-2xl shadow-[#B2ABAB] rounded-3xl p-10 mt-8 text-center justify-center items-center mx-4">
          <h1 className="pt-5 text-3xl md:text-5xl format-normal leading-normal">
            {t('25 TICKETS')}
          </h1>
          <p className="pt-5 text-gray-500"> 40 $</p>
          <button
            className="my-4 bg-[#2DD3E3] hover:bg-[#7decf6] text-black 
            font-bold py-2 px-4 border-b-4 border-[#2DD3E3] hover:border-[#42e4f3] rounded"
            type="button"
          >
            {t('PURCHASE')}
          </button>
        </div>

        <div className="flex flex-col w-96 lg:w-[40%] xl:w-[30%] border-4 border-[#FBFBFB] shadow-2xl shadow-[#B2ABAB] rounded-3xl p-10 mt-8 text-center justify-center items-center mx-4">
          <h1 className="pt-5 text-3xl md:text-5xl format-normal leading-normal">
            {t('50 TICKETS')}
          </h1>
          <p className="pt-5 text-gray-500"> 70 $</p>
          <button
            className="my-4 bg-[#2DD3E3] hover:bg-[#7decf6] text-black 
            font-bold py-2 px-4 border-b-4 border-[#2DD3E3] hover:border-[#42e4f3] rounded"
            type="button"
          >
            {t('PURCHASE')}
          </button>
        </div>
      </div>
    </div>
  );
}
