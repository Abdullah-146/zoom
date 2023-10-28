import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import LogoWithText from "../assets/logowithtext.png";
import HamburgerNav from "./HamburgerNav";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slice/user/userSlice";
import { socket } from "../socket/socket";
function Navbar() {

  const dispatch = useDispatch();
  const {userInfo} = useSelector(state=>state.user);

  return (
    <div className="mobile:flex items-center justify-between">
      <nav className="flex items-center justify-between flex-wrap bg-white p-1 w-full md:p-6  ">
        <ul className="flex items-center justify-between w-full p-1 md:p-3">
          <li>
            <Link to={"/"}>
              <img src={LogoWithText} alt="" style={{ width: "120px" }} />
            </Link>
          </li>
          <li className="hidden lg:block">
            <NavLink to="/details">About Us</NavLink>
          </li>
          <li className="hidden lg:block">
            <NavLink to="/plans">Products</NavLink>
          </li>
          <li className="hidden lg:block">
            <NavLink to="/custom">Solutions</NavLink>
          </li>
          <li className="hidden lg:block">
            <NavLink to="/details">Resources</NavLink>
          </li>
          <li className="hidden lg:block">
            <NavLink to="/plans">Plan & Pricing</NavLink>
          </li>
          <li className="hidden text-primary lg:block">
            <NavLink to="/custom">Contact Sales</NavLink>
          </li>
          {!userInfo?._id ? <li className="hidden lg:block">
            <Link
              to="/signup"
              className=" p-3 px-5 border-2 border-primary text-primary rounded-2xl hover:translate-y-1 hover:shadow-md transition-all duration-300 ease-in-out cursor-pointer"
            >
              SignUp for Free
            </Link>
          </li>
          :
          <li onClick={()=>{
            dispatch(logout());
            socket.disconnect();
          }} className="hidden lg:block">
            <div
              className=" p-3 px-5 border-2 border-primary text-primary rounded-2xl hover:translate-y-1 hover:shadow-md transition-all duration-300 ease-in-out cursor-pointer"
            >
             Logout
            </div>
          </li>

          }
          <HamburgerNav />
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
