import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../firebase-config';
import { UserAuth } from '../../context/AuthContext';
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

  const [active, setActive] = useState('');

  const [istherapist, setIsTherapist] = useState(false)

  const onDropMenuLinkClick = (item) => {
    setshowDropDownMenu(false);
    setShowMobileMenu(false);
    setActive(item.active);
  };

  const { user, logOut } = UserAuth();

  // eslint-disable-next-line
  { user && console.log('user sent', user) }

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      // eslint-disable-next-line 
      console.log(error)
    }
  }


  const fetchSingleUserData = async () => {
    // eslint-disable-next-line
    console.log('user.uid:', user.uid);
    await getDocs(query(collection(db, "users"), where("userId", "==", user.uid)))
      .then((querySnapshot) => {
        const usersData = querySnapshot.docs
          .map((doc) => {
            // eslint-disable-next-line 
            console.log(doc.id, " => ", doc.data().isTherapist);
            return doc.data();
          });

        if (usersData.length > 0) {
          setIsTherapist(usersData[0].isTherapist);
        }
      })
  }

  useEffect(() => {
    if (user && user.uid)
      fetchSingleUserData();
  }, [user])

  //   const fetchPost = async () => {
  //     await getDocs(collection(db, "users", `${user.uid}`))
  //       .then((querySnapshot) => {
  //         const userInfo = querySnapshot.docs
  //           .map((doc) => {
  //             return { ...doc.data(), id: doc.id }
  //           });

  //         // eslint-disable-next-line
  //         console.log("userinfo", userInfo)
  //       })
  //   }

  // useEffect(() => {
  //   fetchPost();
  // }, [])

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

      {/* Deskop Menu */}
      <ul className="hidden lg:flex text-2xl">
        <li className="p-4 hover:text-[#2DD3E3] ">
          <Link
            to="/"
            className={active === '' ? 'text-[#FEE89E]' : 'text-black'}
            onClick={() => setActive('')}
          >
            Home
          </Link>
        </li>

        <li className="p-4 hover:text-[#2DD3E3]">
          <Link
            to="/blogs"
            className={active === 'blogs' ? 'text-[#FEE89E]' : 'text-black'}
            onClick={() => setActive('blogs')}
          >
            Blogs
          </Link>
        </li>

        <li className="p-4 hover:text-[#2DD3E3]">
          <button
            type="button"
            className={
              active === 'about' || active === 'team' || active === 'careers'
                ? 'text-[#FEE89E]'
                : 'text-black'
            }
            onClick={handleDropDownMenuClick}
          >
            About <i className={arrowIcon} />
            {showDropDownMenu && (
              <DropDown
                onDropMenuLinkClick={onDropMenuLinkClick}
                active={active}
              />
            )}
          </button>
        </li>

        <li className="p-4 hover:text-[#2DD3E3]">
          <Link
            to="/contact"
            className={active === 'contact' ? 'text-[#FEE89E]' : 'text-black'}
            onClick={() => setActive('contact')}
          >
            Contact Us
          </Link>
        </li>

        {
          // eslint-disable-next-line
          console.log("inside Jsx - istherapist", istherapist)
        }

        {// eslint-disable-next-line
          user &&
          // eslint-disable-next-line
          console.log("user uid", user.uid)}


        {user && (istherapist ?
          <li className="p-4 hover:text-[#2DD3E3]">
            <Link
              to="/therapist/profile"
              className={active === 'therapist/profile' ? 'text-[#FEE89E]' : 'text-black'}
              onClick={() => setActive('therapist/profile')}
            >
              {user.displayName || 'Therapist Profile'}
            </Link>
          </li> :
          <li className="p-4 hover:text-[#2DD3E3]">
            <Link
              to="/profile"
              className={active === 'profile' ? 'text-[#FEE89E]' : 'text-black'}
              onClick={() => setActive('profile')}
            >
              {user.displayName || 'Profile'}
            </Link>
          </li>
        )
        }


        {user ? (!istherapist &&
          <li className="p-4"> <Link
            to="/login"
            className={
              active === 'login'
                ? 'text-white bg-[#FEE89E]'
                : 'text-black bg-[#2DD3E3]'
            }
            onClick={() => setActive('login')}
          > <button type="button" onClick={handleSignOut}
            className="rounded-md px-5 py-1 -mt-2 text-black bg-[#2DD3E3]">
              Log out
            </button></Link> </li>)
          :
          <li className="p-4">
            <Link
              to="/login"
              className={
                active === 'login'
                  ? 'text-white bg-[#FEE89E]'
                  : 'text-black bg-[#2DD3E3]'
              }
              onClick={() => setActive('login')}
            >
              <button type="button" className="rounded-md px-5 py-1 -mt-2">
                Log in
              </button>
            </Link>
          </li>}

        {user ? (istherapist && <li className="p-4"> <Link
          to="/login"
          className={
            active === 'login'
              ? 'text-white bg-[#FEE89E]'
              : 'text-black bg-[#2DD3E3]'
          }
          onClick={() => setActive('login')}
        > <button type="button"
          onClick={handleSignOut}
          className="rounded-md px-5 py-1 -mt-2 text-black bg-[#2DD3E3]">
            Log out
          </button></Link> </li>)
          :
          <li className="p-4">
            <Link
              to="/therapist/create"
              className={
                active === 'therapist/create'
                  ? 'text-white bg-[#FEE89E]'
                  : 'text-black bg-[#2DD3E3]'
              }
              onClick={() => setActive('therapist/create')}
            >
              <button type="button" className="rounded-md px-5 py-1 -mt-2">
                Join our Therapist
              </button>
            </Link>
          </li>}

      </ul>








      {/* Mobile & Tablet Menus */}
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
              className={active === '' ? 'text-[#FEE89E]' : 'text-black'}
              onClick={() => {
                closeMobileMenu();
                setActive('');
              }}
            >
              Home
            </Link>
          </li>

          <li className="p-4 hover:text-[#2DD3E3]">
            <Link
              to="/blogs"
              className={active === 'blogs' ? 'text-[#FEE89E]' : 'text-black'}
              onClick={() => {
                closeMobileMenu();
                setActive('blogs');
              }}
            >
              Blogs
            </Link>
          </li>

          <li className="p-4 hover:text-[#2DD3E3]">
            <button
              type="button"
              className={
                active === 'about' || active === 'team' || active === 'careers'
                  ? 'text-[#FEE89E]'
                  : 'text-black'
              }
              onClick={handleDropDownMenuClick}
            >
              About <i className={arrowIcon} />
              {showDropDownMenu && (
                <DropDown
                  onDropMenuLinkClick={onDropMenuLinkClick}
                  active={active}
                />
              )}
            </button>
          </li>

          <li className="p-4 hover:text-[#2DD3E3]">
            <Link
              to="/contact"
              className={active === 'contact' ? 'text-[#FEE89E]' : 'text-black'}
              onClick={() => {
                closeMobileMenu();
                setActive('contact');
              }}
            >
              Contact Us
            </Link>
          </li>

          {user && (istherapist ?
            <li className="p-4 hover:text-[#2DD3E3]">
              <Link
                to="/therapist/profile"
                className={active === 'therapist/profile' ? 'text-[#FEE89E]' : 'text-black'}
                onClick={() => {
                  closeMobileMenu();
                  setActive('therapist/profile');
                }
                }
              >
                {user.displayName || 'Therapist Profile'}
              </Link>
            </li> :
            <li className="p-4 hover:text-[#2DD3E3]">
              <Link
                to="/profile"
                className={active === 'profile' ? 'text-[#FEE89E]' : 'text-black'}
                onClick={() => {
                  closeMobileMenu();
                  setActive('profile');
                }}
              >
                {user.displayName || 'Profile'}
              </Link>
            </li>
          )
          }

          {user ? (!istherapist &&
            <li className="p-4"> <Link
              to="/login"
              className={
                active === 'login'
                  ? 'text-white bg-[#FEE89E]'
                  : 'text-black bg-[#2DD3E3]'
              }
              onClick={() => {
                closeMobileMenu();
                setActive('login');
              }}
            > <button type="button" onClick={handleSignOut}
              className="rounded-md px-5 py-1 -mt-2 text-black bg-[#2DD3E3]">
                Log out
              </button></Link> </li>)
            :
            <li className="p-4 hover:text-[#2DD3E3]">
              <Link
                to="/login"
                className={active === 'login' ? 'text-[#FEE89E]' : 'text-black'}
                onClick={() => {
                  closeMobileMenu();
                  setActive('login');
                }}
              >
                <button
                  type="button"
                  className=" bg-[#2DD3E3] rounded-md px-5 hover:bg-[#FEE89E] py-1"
                >
                  Log in
                </button>
              </Link>
            </li>}

          {user ? (istherapist && <li className="p-4"> <Link
            to="/login"
            className={
              active === 'login'
                ? 'text-white bg-[#FEE89E]'
                : 'text-black bg-[#2DD3E3]'
            }
            onClick={() => { closeMobileMenu(); setActive('login'); }}
          > <button type="button"
            onClick={handleSignOut}
            className="rounded-md px-5 py-1 -mt-2 text-black bg-[#2DD3E3]">
              Log out
            </button></Link> </li>)
            :
            <li className="p-4">
              <Link
                to="/therapist/create"
                className={
                  active === 'therapist/create'
                    ? 'text-white bg-[#FEE89E]'
                    : 'text-black bg-[#2DD3E3]'
                }
                onClick={() => { closeMobileMenu(); setActive('therapist/create'); }}
              >
                <button type="button" className="rounded-md px-5 py-1 -mt-2">
                  Join our Therapist
                </button>
              </Link>
            </li>}

        </ul>
      </div>
    </nav >
  );
}

export default NavBar;
