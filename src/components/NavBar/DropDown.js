import React from 'react';
import { Link } from 'react-router-dom';
import DropDownMenuItems from './DropDownMenuItems';

function DropDown({ setshowDropDownMenu }) {
  const handlePreventRefreshAndHideDropDownMenu = (e) => {
    e.preventDefault();
    setshowDropDownMenu(false);
  };

  return (
    <ul className="lg:w-[160px] lg:absolute lg:top-20 lg:text-start lg:mt-9 lg:-ml-4">
      {DropDownMenuItems.map((item) => {
        return (
          <li key={item.id}>
            <Link
              to={item.path}
              onClick={() => handlePreventRefreshAndHideDropDownMenu}
              className="block h-full w-full p-4 text-black bg-[#EAF8F9] hover:bg-[#FEE89E] focus:text-white"
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default DropDown;
