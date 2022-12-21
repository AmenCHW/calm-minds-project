import React, { useState } from "react";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";
import NavBarIcon from "./NavBarIcon.png";

/*
'fas fa-times'    => x icon
'fas fa-bars'   => burger menu icon
*/

function NavBar(){
    const [click , SetClick] = useState(false)
    const handleClick = () => SetClick(!click)
    const closeMobileMenu = () => SetClick(false)

    const [showDropDownMenu, setshowDropDownMenu] = useState(false);
    const handleDropDownMenuClick = () => setshowDropDownMenu(!showDropDownMenu);

    return(
        <nav className="flex px-8 lg:px-20 py-6 bg-[#EAF8F9] justify-between items-center">
            <div className="justify-between flex md:justify-start">
                <img src={NavBarIcon} alt="navbar icon" className="w-7 h-10 md:h-full md:w-full"/>
                <Link to="/" className="text-3xl md:text-4xl lg:text-5xl pl-3 font-normal"> Healing </Link> 
            </div>  
            <ul className="hidden lg:flex text-2xl" >
				  <li className="p-4 hover:text-[#2DD3E3] "><Link to="/" className="visited:text-[#FEE89E] target:text-[#FEE89E]"> Home </Link> </li>
				  <li className="p-4 hover:text-[#2DD3E3] target:text-[#FEE89E] enabled:text-[#FEE89E]"><Link to="/blogs"> Blogs </Link> </li>
				  <li className="p-4 hover:text-[#2DD3E3] target:text-[#FEE89E]" > 
                     <button type="button" onClick={handleDropDownMenuClick} > About <i className="fas fa-caret-down" />{showDropDownMenu ? <DropDown setshowDropDownMenu={setshowDropDownMenu}/> :null }</button> 
				  </li>
				  <li className="p-4 hover:text-[#2DD3E3] target:text-[#FEE89E]"><Link to="/contact"> Contact Us </Link> </li>
                  <li className="p-4 target:text-[#FEE89E]"><Link to="/logIn"><button type="button" className=" bg-[#2DD3E3] rounded-md px-5 hover:bg-[#FEE89E]"> Log in</button></Link> </li>
            </ul>
            <button type="button" className="block lg:hidden" onClick={handleClick}>
                { click ? <i className='fas fa-2x fa-times' /> : <i className='fas fa-2x fa-bars' /> }
            </button>


            <div className={ click ? "fixed left-0 top-0 w-full h-full ease-in-out duration-700 bg-[#EAF8F9] align-middle mx-auto mt-20 text-2xl" : "fixed left-[-100%]"}> 
            <ul className="pt-24 mx-auto text-center">
				  <li className="p-4 hover:text-[#2DD3E3] active:text-[#FEE89E]"><Link to="/" onClick={closeMobileMenu}> Home </Link> </li>
				  <li className="p-4 hover:text-[#2DD3E3] active:text-[#FEE89E]"><Link to="/blogs" onClick={closeMobileMenu}> Blogs </Link> </li>
				  <li className="p-4 hover:text-[#2DD3E3] active:text-[#FEE89E]"> 
                     <button type="button" onClick={handleDropDownMenuClick} > About <i className="fas fa-caret-down" />{showDropDownMenu ? <DropDown /> :null }</button> 
				  </li>
				  <li className="p-4 hover:text-[#2DD3E3] active:text-[#FEE89E]"><Link to="/contact" onClick={closeMobileMenu}> Contact Us </Link> </li>
                  <li className="p-4 hover:text-[#2DD3E3] active:text-[#FEE89E]"><Link to="/logIn"  onClick={closeMobileMenu}><button type="button" className=" bg-[#2DD3E3] rounded-md px-5 hover:bg-[#FEE89E]"> Log in</button></Link> </li>
            </ul>
            </div>      
        </nav>
    )
}

export default NavBar;