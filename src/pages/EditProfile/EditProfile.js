import React from 'react';
import profileimage from './profileimage.png';

function EditProfile({t}) {
  return (
    <div className="mx-auto lg:max-w-7xl px-10 py-10">
      <h1 className="text-center text-[#FF0000] text-2xl mb-9">
        {t("Please fill all the fields with correct and valid details to complete your profile.")}
      </h1>

      <div className="flex flex-wrap justify-center md:justify-evenly">
        <div>
          <img src={profileimage} alt="profile-pic" />
        </div>

        <div className="">
          <h1 className="pt-5 text-3xl md:text-5xl format-normal leading-normal text-center md:text-left">
            {t("PROFILE INFO")}
          </h1>

          <div className="px-2 sm:px-0">
            <form>
              <label
                className="flex flex-col items-center sm:flex-row sm:flex-wrap justify-center sm:justify-between mt-10"
                htmlFor="name"
              >
                <span className="mb-5 text-2xl font-normal text-start mr-3 md:mr-10 mt-3">
                  {t("Full Name")}
                </span>
                <input
                  type="text"
                  id="name"
                  className="border-2 rounded-lg h-16 w-1/2 lg:w-[470px] border-gray-100 pl-4 shadow-md"
                />
              </label>

              <div className=" flex flex-col items-center sm:flex-row sm:flex-wrap justify-center mt-6 sm:justify-between">
                <span className="mb-5 text-2xl font-normal text-start mr-3 md:mr-10 mt-3">
                  {t("Education Level")}
                </span>
                <select className="border-2 rounded-lg h-16 w-1/2 lg:w-[470px] border-gray-100 pl-4 shadow-md text-xl">
                  <option value="select....">{t("select...")}</option>
                  <option value="due_date">option 1</option>
                  <option value="asc">option 2</option>
                  <option value="desc">option 3</option>
                </select>
              </div>

              <label
                className="flex flex-col items-center sm:flex-row sm:flex-wrap justify-center sm:justify-between mt-6"
                htmlFor="hobbies"
              >
                <span className="mb-5 text-2xl font-normal text-start mr-3 md:mr-10 mt-3">
                  {t("Hobbies")}
                </span>
                <input
                  type="text"
                  id="hobbies"
                  className="border-2 rounded-lg h-16 w-1/2 lg:w-[470px] border-gray-100 pl-4 shadow-md"
                />
              </label>

              <label
                className="flex flex-col items-center sm:flex-row sm:flex-wrap justify-center sm:justify-between mt-6"
                htmlFor="family-size"
              >
                <span className="mb-5 text-2xl font-normal text-start mr-3 md:mr-10 mt-3">
                  {t("Family Size")}
                </span>
                <div className="flex sm:flex-wrap sm:flex-start w-1/2 lg:w-[470px]">
                  <input
                    type="number"
                    id="family-size"
                    className="border-2 rounded-lg h-16 w-[68px] border-gray-100 pl-4 shadow-md"
                  />
                  <span className="text-2xl font-normal text-center sm:text-start ml-3 sm:ml-10 mt-3">
                    {t("Member(s)")}
                  </span>
                </div>
              </label>

              <div className=" flex flex-col items-center sm:flex-row sm:flex-wrap justify-center mt-6 sm:justify-between">
                <span className=" mb-5 text-2xl font-normal text-start mr-3 md:mr-10 mt-3">
                  {t("Gender")}
                </span>
                <select className="border-2 rounded-lg h-16 w-1/2 lg:w-[470px] border-gray-100 pl-4 shadow-md text-xl">
                  <option value="select....">{t("select...")}</option>
                  <option value="male">{t("male")}</option>
                  <option value="female">{t("female")}</option>
                </select>
              </div>

              <label
                className="flex flex-col items-center justify-center sm:flex-row sm:flex-wrap sm:justify-between mt-6"
                htmlFor="date"
              >
                <span className="mb-5 text-2xl font-normal text-start mr-3 md:mr-10 mt-3">
                  {t("Birth Date")}
                </span>
                <input
                  type="date"
                  id="date"
                  className="border-2 rounded-lg h-16 w-1/2 lg:w-[470px] border-gray-100 pl-4 shadow-md"
                />
              </label>

              <label
                className="flex flex-col items-center justify-center sm:flex-row sm:flex-wrap sm:justify-between mt-6"
                htmlFor="email"
              >
                <span className="mb-5 text-2xl font-normal text-start mr-3 md:mr-10 mt-3">
                  {t("Email")}
                </span>
                <input
                  type="email"
                  id="email"
                  className="border-2 rounded-lg h-16 w-1/2 lg:w-[470px] border-gray-100 pl-4 shadow-md"
                />
              </label>

              <label
                className="flex flex-col items-center sm:flex-row sm:flex-wrap justify-center sm:justify-between mt-6"
                htmlFor="phone"
              >
                <span className="mb-5 text-2xl font-normal text-start mr-3 md:mr-10 mt-3">
                  {t("Phone Number")}
                </span>
                <input
                  type="tel"
                  id="phone"
                  className="border-2 rounded-lg h-16 w-1/2 lg:w-[470px] border-gray-100 pl-4 shadow-md"
                />
              </label>

              <label
                className="flex flex-col items-center sm:flex-row sm:flex-wrap justify-center sm:justify-between mt-6"
                htmlFor="image"
              >
                <span className="mb-5 text-2xl font-normal text-start mr-3 md:mr-10 mt-3">
                  {t("Upload ID")}
                </span>
                <input
                  type="file"
                  id="image"
                  className="border-2 rounded-lg h-16 w-1/2 lg:w-[470px] items-center py-auto border-gray-100 pl-4 shadow-md"
                />
              </label>

              <h1 className="pt-16 text-3xl md:text-5xl format-normal leading-normal text-center md:text-left">
                {t("Security")}
              </h1>

              <label
                className="flex flex-col items-center sm:flex-row sm:flex-wrap justify-center sm:justify-between mt-10"
                htmlFor="password"
              >
                <span className="mb-5 text-2xl font-normal text-start mr-3 md:mr-10 mt-3">
                  {t("Password")}
                </span>
                <input
                  type="password"
                  id="password"
                  className="border-2 rounded-lg h-16 w-1/2 lg:w-[470px] border-gray-100 pl-4 shadow-md"
                />
              </label>

              <label
                className="flex flex-col items-center sm:flex-row sm:flex-wrap justify-center sm:justify-between mt-6"
                htmlFor="password"
              >
                <span className="mb-5 text-2xl font-normal text-start mr-3 md:mr-10 mt-3">
                  {t("Confirm Password")}
                </span>
                <input
                  type="password"
                  id="password"
                  className="border-2 rounded-lg h-16 w-1/2 lg:w-[470px] border-gray-100 pl-4 shadow-md"
                />
              </label>

              <div className="flex flex-wrap justify-center lg:justify-between mt-12">
                <button
                  type="button"
                  className="bg-[#2DD3E3] py-3 text-2xl border-2 rounded-lg border-[#2DD3E3] px-3 lg:px-0 lg:w-[220px] my-2 lg:my-0 mx-2"
                >
                  {t("SAVE CHANGES")}
                </button>

                <button
                  type="button"
                  className="bg-[#2DD3E3] py-3 text-2xl border-2 rounded-lg border-[#2DD3E3] px-3 lg:px-0 lg:w-[220px] my-2 lg:my-0 mx-2"
                >
                  {t("DELETE ACCOUNT")}
                </button>

                <button
                  type="button"
                  className="bg-[#2DD3E3] py-3 text-2xl border-2 rounded-lg border-[#2DD3E3] px-3 lg:px-0 lg:w-[220px] my-2 lg:my-0 mx-2"
                >
                  {t("CANCEL")}
                </button>
              </div>
            </form>
          </div>

          <div>
            <h1 className="pt-16 text-3xl md:text-5xl format-normal leading-normal text-center md:text-left">
              {t("Payment Methods & Tickets")}
            </h1>

            <div className="flex flex-col items-center sm:flex-row sm:flex-wrap pt-10 justify-center md:justify-start">
              <div className="flex flex-col">
                <p className="pb-3 text-xl text-center sm:text-start">
                  {t("3 Cards Added")}
                </p>
                <button
                  type="button"
                  className="bg-[#2DD3E3] py-3 text-2xl border-2 rounded-lg border-[#2DD3E3] px-3 lg:px-0 lg:w-[220px]"
                >
                  {t("SHOW CARDS")}
                </button>
              </div>

              <div className="flex flex-col sm:ml-5 pt-5 sm:pt-0">
                <p className="pb-3 text-xl text-center sm:text-start">
                  {t("10 Tickets Remaining")}
                </p>
                <button
                  type="button"
                  className="bg-[#2DD3E3] py-3 text-2xl border-2 rounded-lg border-[#2DD3E3] px-3 lg:px-0 lg:w-[220px]"
                >
                  {t("BUY TICKETS")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
