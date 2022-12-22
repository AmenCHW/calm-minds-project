import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DropDown from './DropDown';
import NavBarIcon from './NavBarIcon.png';

function NavBar() {
  const xIcon = 'fas fa-2x fa-times';
  const burgerMenuIcon = 'fas fa-2x fa-bars';
  const arrowIcon = 'fas fa-caret-down';

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const handleShowMobileMenu = () => setShowMobileMenu(!showMobileMenu);
  const closeMobileMenu = () => setShowMobileMenu(false);

  const [showDropDownMenu, setshowDropDownMenu] = useState(false);
  const handleDropDownMenuClick = () => setshowDropDownMenu(!showDropDownMenu);

  return (
    <nav className="flex px-8 lg:px-20 py-6 bg-[#EAF8F9] justify-between items-center">
      <div className="justify-between flex md:justify-start">

        <img
          src={NavBarIcon}
          alt="navbar icon"
          className="w-7 h-10 md:h-full md:w-full"
        />

        <Link
          to="/"
          className="text-3xl md:text-4xl lg:text-5xl pl-3 font-normal"
        >
          Healing
        </Link>

      </div>

      { /* Deskop Menu */ }
      <ul className="hidden lg:flex text-2xl">

        <li className="p-4 hover:text-[#2DD3E3] ">
          <Link to="/" className="focus:text-[#FEE89E]">
            Home
          </Link>
        </li>

        <li className="p-4 hover:text-[#2DD3E3]">
          <Link to="/blogs" className="focus:text-[#FEE89E]">
            Blogs
          </Link>
        </li>

        <li className="p-4 hover:text-[#2DD3E3] focus:text-[#FEE89E]">
          <button
            type="button"
            className="focus:text-[#FEE89E]"
            onClick={handleDropDownMenuClick}
          >
            About <i className={arrowIcon} />
            {showDropDownMenu ? (
              <DropDown setshowDropDownMenu={setshowDropDownMenu} />
            ) : null}
          </button>
        </li>

        <li className="p-4 hover:text-[#2DD3E3]">
          <Link to="/contact" className="focus:text-[#FEE89E]">
            Contact Us
          </Link>
        </li>

        <li className="p-4 ">
          <Link to="/login" className="focus:text-[#FEE89E]">
            <button
              type="button"
              className=" bg-[#2DD3E3] rounded-md px-5 hover:bg-[#FEE89E] py-1 -mt-2 focus:text-white"
            >
              Log in
            </button>
          </Link>
        </li>

      </ul>

      { /* Mobile & Tablet Menus */ }
      <button
        type="button"
        className="block lg:hidden"
        onClick={handleShowMobileMenu}
      >
        {showMobileMenu ? (
          <i className={xIcon} />
        ) : (
          <i className={burgerMenuIcon} />
        )}
      </button>

      <div
        className={
          showMobileMenu
            ? 'fixed left-0 top-0 w-full h-full ease-in-out duration-700 bg-[#EAF8F9] align-middle mx-auto mt-20 text-2xl'
            : 'fixed left-[-100%]'
        }
      >
        <ul className="pt-24 mx-auto text-center">

          <li className="p-4 hover:text-[#2DD3E3]">
            <Link
              to="/"
              className="focus:text-[#FEE89E]"
              onClick={closeMobileMenu}
            >
              Home
            </Link>
          </li>

          <li className="p-4 hover:text-[#2DD3E3]">
            <Link
              to="/blogs"
              className="focus:text-[#FEE89E]"
              onClick={closeMobileMenu}
            >
              Blogs
            </Link>
          </li>

          <li className="p-4 hover:text-[#2DD3E3]">
             <button type="button" onClick={handleDropDownMenuClick}>
              About <i className={arrowIcon} />
              {showDropDownMenu ? <DropDown setshowDropDownMenu={setshowDropDownMenu} closeMobileMenu={closeMobileMenu} /> : null}
            </button>  
          </li>

          <li className="p-4 hover:text-[#2DD3E3]">
            <Link
              to="/contact"
              className="focus:text-[#FEE89E]"
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>

          <li className="p-4 hover:text-[#2DD3E3]">
            <Link
              to="/login"
              className="focus:text-[#FEE89E]"
              onClick={closeMobileMenu}
            >
              <button
                type="button"
                className=" bg-[#2DD3E3] rounded-md px-5 hover:bg-[#FEE89E] py-1"
              >
                Log in
              </button>
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
