import React from 'react';
import { Link } from 'react-router-dom';
import DropDownMenuItems from './DropDownMenuItems';

function DropDown({ onDropMenuLinkClick, active }) {

  return (
    <ul className="lg:w-[160px] lg:absolute lg:top-20 lg:text-start lg:mt-9 lg:-ml-4">
      {DropDownMenuItems.map((item) => {
        return (
          <li key={item.id}>
            <Link
              to={item.path}
              onClick={() => onDropMenuLinkClick(item)}
              className={
                active === item.active
                  ? 'block h-full w-full p-4 hover:bg-[#FEE89E] hover:text-white bg-[#EAF8F9] text-[#FEE89E]'
                  : 'block h-full w-full p-4 hover:bg-[#FEE89E] hover:text-white bg-[#EAF8F9] text-black'
              }
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
