import React, { useEffect } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiOutlineUser } from "react-icons/hi";
// import { logoutRoute } from "../utilies/APIRoutes";

import "./nav.css";
import {
  Link,useNavigate
} from "react-router-dom";
// import { logoutRoute } from "../utilies/APIRoutes";

export const Navbar2 = () => {
  const navigate=useNavigate();
  const loggedIn = JSON.parse(localStorage.getItem("sanwad-app"));

const handleLogout=async(req,res,next)=>{
  try {
    // await axios.post(logoutRoute);
    localStorage.removeItem("sanwad-app");
    navigate("/");
  } catch (error) {
    next(error);
  }
}

  useEffect(() => {
    const list = document.querySelectorAll('.list');
    
      list.forEach(list => {
        list.addEventListener('click', () => {
          document.querySelector('.active')?.classList.remove('active');
          list.classList.add('active')
        }); 
      });
    });
  return (
    <>
    {/* --------------------Top Navbar (Mobile)------------------------ */}
    <div className="md:hidden md:fixed z-50 w-full h-full flex justify-center pt-[0.2rem]">
      <div className="md:hidden md:fixed shadow-inner bg-white w-full h-14 md:h-20 flex justify-between items-center lg:max-w-5xl md:gap-3 p-4 rounded-xl md:rounded-full drop-shadow-xl ">
      <div className="flex md:hidden items-center px-2 gap-1">
          {/* <img src="logoMain.png" alt="Logo" className="w-18" /> */}
          <Link to="#" className="text-3xl font-bold">
            Sam<span className="text-primary-color ">vad  </span>
          </Link>
        </div>
        <div >
        <Link
            to="#"
            className="md:hidden block p-3 bg-primary-color rounded-full text-white font-semibold cursor-pointer mr-auto px-8 py-3 transition ease-in duration-200 hover:-translate-y-1 "
          >
            Chat
          </Link>
        </div>
      </div>
      </div>
    {/* --------------------------------------------------------------- */}

    <div className="fixed bottom-0 md:sticky z-50 w-full flex justify-center md:pt-3 ">
      <div className="fixed bottom-0 md:sticky shadow-inner bg-white w-full h-16 md:h-20 flex justify-between items-center lg:max-w-5xl md:gap-3 p-4 rounded-xl md:rounded-full drop-shadow-2xl">
      
        
        <div className="md:flex items-center px-2 gap-1 hidden ">
          <img src="logoMain.png" alt="Logo" className="w-18" />
          <Link to="/" className="text-3xl font-bold">
            Sam<span className="text-primary-color ">vad</span>
          </Link>  
        </div>
        
        {/*---------------Bottom Navbar (mobile) ---------------*/}      
        <ul className="flex md:hidden w-full mobile ">
          <li className="relative w-[33.3%] h-[60px] z-50 list active ">
            <Link to="/" className="relative flex justify-center items-center h-full w-full">
              <span className="relative flex w-[55px] h-[55px] text-center items-center justify-center rounded-full text-2xl icon transition-all duration-500 text-primary-color "><IoHomeOutline/></span>
            </Link>
          </li>

          <li className="relative w-[33.3%] h-[60px] z-50 list">
            <Link to="/login" className="relative flex justify-center items-center h-full w-full">
              <span className="relative flex w-[55px] h-[55px] text-center items-center justify-center rounded-full text-2xl icon transition-all duration-500 text-primary-color"><IoMdNotificationsOutline/></span>
            </Link>
          </li>

          <li className="relative w-[33.3%] h-[60px] z-20 list transition-all ease-in-out duration-100">
            <Link to="#" className="relative flex justify-center items-center h-full w-full ">
              <span className="relative flex w-[55px] h-[55px] text-center items-center justify-center rounded-full text-2xl transition-all duration-500 icon text-primary-color"><HiOutlineUser/></span>
            </Link>
          </li>
        </ul>
        
        {/*---------------------------------------------------*/}

        <div
          name="menu"
          id="menu-bar"
          className=" drop-shadow-2xl transition-all ease-in flex flex-col md:flex-row absolute md:relative left-6 top-[88px] py-2  bg-white w-[93%] rounded-xl items-center md:bg-transparent md:w-auto gap-4 lg:gap-9 md:right-0 md:top-0 font-medium md:ml-auto md:mr-auto"
        >
          <Link
            to="/"
            className="hover:text-gray-400 transition-all ease-in hover:-translate-y-1 py-2 md:py-0 cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="#"
            className="hover:text-gray-400 transition-all ease-in hover:-translate-y-1 py-2 md:py-0 cursor-pointer"
          >
            Notification
          </Link>
          <Link
            to="#"
            className="hover:text-gray-400 transition-all ease-in hover:-translate-y-1 py-2 md:py-0 cursor-pointer"
          >
            Profile
          </Link>
          <Link
            to="#"
            className="hover:text-gray-400 transition-all ease-in hover:-translate-y-1 py-2 md:py-0 cursor-pointer"
          >
            About Us
          </Link>
          {/* <Link
            to="/"
            className="hover:text-gray-400 transition-all ease-in hover:-translate-y-1 py-2 md:py-0 cursor-pointer"
          >
            Contact
          </Link> */}
        </div>
        
        { !loggedIn ?
        <>
        <div className=" transition-all ease-in flex items-center  md:gap-2 justify-between">
          <Link
            to="/login"
            className="hidden md:flex font-medium mr-auto ml-auto transition-all ease-in hover:-translate-y-1 hover:text-gray-300 text-primary-color"
          >
            Sign-Up
          </Link>
          <Link
            to="/login"
            className="hidden md:block p-3 bg-primary-color rounded-full text-white font-semibold cursor-pointer mr-auto px-8 py-3 transition ease-in duration-200 hover:-translate-y-1"
          >
            Login
          </Link>
        </div>
        </> 
        
        
        :
        
        <>
          <div className=" transition-all ease-in flex items-center  md:gap-2 justify-between">
          <Link
            to="/login"
            onClick={handleLogout}
            className="hidden md:block p-3 bg-primary-color rounded-full text-white font-semibold cursor-pointer mr-auto px-8 py-3 transition ease-in duration-200 hover:-translate-y-1"
          >
            Logout
          </Link>
        </div>
        </>
        }
      </div>
    </div>
    </>
  );
};
